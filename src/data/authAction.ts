"use server";

import { auth, signIn } from "@/auth";
import { SignupValidator, FormState } from "@/lib/validators";
import bcrypt from "bcryptjs";

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

export async function signInWithCredentials(formData: FormData) {
    await signIn("credentials", {
        email: formData.get("email") || "",
        password: formData.get("password") || "",
        redirect: true,
        redirectTo: (formData.get("callbackUrl") as string) || "/",
    });
}

export async function signInWithKakao() {
    await signIn("kakao", {
        redirect: false,
    });
}

export async function signInWithGoogle() {
    await signIn("google", {
        redirect: false,
    });
}

export async function signInWithNaver() {
    await signIn("naver", {
        redirect: false,
    });
}

export { auth as getSession };
