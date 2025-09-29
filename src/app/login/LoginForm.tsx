import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signInWithCredentials } from "@/data/authAction";

export default function LoginForm({ styles }: StylesProps) {
    const searchParams = useSearchParams();
    const [state, action, pending] = useActionState(
        signInWithCredentials,
        undefined
    );
    const callbackUrl = searchParams.get("next") || "/";

    // const handleTestLogin = () => {
    //     handleLogin("test@test.com", "test1234");
    // };

    useEffect(() => {
        if (state?.status === 400 || state?.status === 500) {
            alert(state?.message);
        }
    }, [state]);

    return (
        <form action={action} className={`account_form ${styles.login_form}`}>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                defaultValue={state?.values?.email}
                className="account_input"
            />
            {state?.errors?.email && (
                <span className="err_msg">{state.errors.email}</span>
            )}
            <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                defaultValue={state?.values?.password}
                className="account_input"
            />
            {state?.errors?.password && (
                <span className="err_msg">{state.errors.password}</span>
            )}
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <button
                type="submit"
                className={`submit_btn ${styles.login_btn}`}
                disabled={pending}
            >
                로그인
            </button>
            <button
                type="submit"
                className={styles.test_login_btn}
                // onClick={handleTestLogin}
            >
                테스트 계정으로 로그인
            </button>
        </form>
    );
}
