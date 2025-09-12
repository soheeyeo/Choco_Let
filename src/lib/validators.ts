import z from "zod";

const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SignupValidator = z
    .object({
        email: z.email({ error: "이메일 형식을 확인해주세요." }),
        password: z
            .string()
            .regex(pwRegex, {
                error: "8자리 이상의 영문, 숫자를 조합하여 입력해주세요.",
            })
            .trim(),
        confirmPassword: z
            .string()
            .min(1, { error: "비밀번호가 일치하지 않습니다." })
            .trim(),
        name: z
            .string()
            .min(2, { error: "2글자 이상으로 입력해주세요." })
            .trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
    });

export type FormState =
    | {
          errors?: Record<string, string[]>;
      }
    | { status: number; message: string }
    | { error?: string | null }
    | undefined;
