"use client";
import { signup } from "@/data/authAction";
import { useActionState, useEffect } from "react";

export default function SignupForm({ styles }: StylesProps) {
    const [state, action, pending] = useActionState(signup, undefined);

    // 회원가입 성공 시 alert
    useEffect(() => {
        if (state?.status === 201) {
            alert(state.message);
        }
    }, [state]);

    return (
        <form action={action} className="account_form">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                defaultValue={state?.values?.email}
                className={state?.errors?.email ? "err_input" : "account_input"}
            />
            {state?.errors?.email && (
                <span className="err_msg">{state.errors.email}</span>
            )}
            {state?.status === 409 && (
                <span className="err_msg">{state.message}</span>
            )}
            <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                defaultValue={state?.values?.password}
                className={
                    state?.errors?.password ? "err_input" : "account_input"
                }
            />
            {state?.errors?.password && (
                <span className="err_msg">{state.errors.password}</span>
            )}
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                defaultValue={state?.values?.confirmPassword}
                className={
                    state?.errors?.confirmPassword
                        ? "err_input"
                        : "account_input"
                }
            />
            {state?.errors?.confirmPassword && (
                <span className="err_msg">{state.errors.confirmPassword}</span>
            )}
            <input
                type="text"
                id="name"
                name="name"
                placeholder="닉네임"
                defaultValue={state?.values?.name}
                className={state?.errors?.name ? "err_input" : "account_input"}
                maxLength={10}
            />
            {state?.errors?.name && (
                <span className="err_msg">{state.errors.name}</span>
            )}
            <button
                type="submit"
                className={`submit_btn ${styles.signup_btn}`}
                disabled={pending}
            >
                가입하기
            </button>
        </form>
    );
}
