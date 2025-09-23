"use server";
import { auth, signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { SignupValidator, FormState, SignInValidator } from "@/lib/validators";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function signup(prevState: FormState, formData: FormData) {
    // formData 유효성 검사
    const validatedFields = SignupValidator.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        name: formData.get("name"),
    });

    if (!validatedFields.success) {
        const fieldErrors: Record<string, string[]> = {};

        // Zod 에러 fieldErrors 객체로 가공
        validatedFields.error.issues.forEach((issue) => {
            const path = issue.path[0] as string;
            if (!fieldErrors[path]) fieldErrors[path] = [];
            fieldErrors[path].push(issue.message);
        });

        // 에러 정보, 입력값 그대로 반환 -> 클라이언트에서 값 유지 가능
        return {
            errors: fieldErrors,
            values: {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
                confirmPassword: formData.get("confirmPassword") as string,
                name: formData.get("name") as string,
            },
        };
    }

    // 유효성 검사 성공 시 데이터 추출
    const { email, password, name } = validatedFields.data;

    let hashedPassword = await bcrypt.hash(password, 10);

    // 이메일 중복 확인
    let existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return {
            status: 409,
            message: "이미 사용중인 이메일입니다.",
            values: {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
                confirmPassword: formData.get("confirmPassword") as string,
                name: formData.get("name") as string,
            },
        };
    } else {
        let user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });
        return { status: 201, message: "회원가입이 완료되었습니다." };
    }
}

export async function signInWithCredentials(
    prevState: FormState,
    formData: FormData
) {
    const validatedFields = SignInValidator.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        const fieldErrors: Record<string, string[]> = {};

        // Zod 에러 fieldErrors 객체로 가공
        validatedFields.error.issues.forEach((issue) => {
            const path = issue.path[0] as string;
            if (!fieldErrors[path]) fieldErrors[path] = [];
            fieldErrors[path].push(issue.message);
        });

        return {
            errors: fieldErrors,
            values: {
                email: formData.get("email") as string,
                password: formData.get("password") as string,
            },
        };
    }

    // 유효성 검사 성공 시 데이터 추출
    const { email, password } = validatedFields.data;

    const callbackUrl = (formData.get("callbackUrl") as string) || "/";

    try {
        await signIn("credentials", {
            email,
            password,
        });

        return {
            status: 200,
            message: "로그인 성공",
        };
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === "CredentialsSignin") {
                return {
                    status: 400,
                    message: "이메일 혹은 비밀번호가 일치하지 않습니다.",
                    values: {
                        email: formData.get("email") as string,
                        password: formData.get("password") as string,
                    },
                };
            } else {
                return {
                    status: 500,
                    message:
                        "로그인 요청 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
                };
            }
        }
    }
    // 로그인 성공 시 redirect
    redirect(callbackUrl);
}

export { auth as getSession };
