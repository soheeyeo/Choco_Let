import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm({ styles }: StylesProps) {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({
        email: "",
        pw: "",
    });
    const [passedLogin, setPassedLogin] = useState(false);

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const isPassedLogin = () => {
        return inputValue.email !== "" && inputValue.pw !== ""
            ? setPassedLogin(true)
            : setPassedLogin(false);
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const res = await signIn("credentials", {
                email,
                password,
                callbackUrl: sessionStorage.getItem("prevPath") || "/",
                redirect: false,
            });

            if (res?.status === 401) {
                alert(res.error);
                setInputValue({
                    email: "",
                    pw: "",
                });
            } else {
                router.refresh();
                router.push(res?.url || "/");
            }
        } catch (err) {
            // signIn 호출 자체가 실패했을 때 실행
            console.log(err);
        }
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(inputValue.email, inputValue.pw);
    };

    const handleTestLogin = () => {
        handleLogin("test@test.com", "test1234");
    };

    return (
        <form
            onSubmit={handleOnSubmit}
            className={`account_form ${styles.login_form}`}
        >
            <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                className="account_input"
                value={inputValue.email}
                onChange={handleInputValue}
                onKeyUp={isPassedLogin}
            />
            <input
                type="password"
                id="password"
                name="pw"
                placeholder="비밀번호"
                className="account_input"
                value={inputValue.pw}
                onChange={handleInputValue}
                onKeyUp={isPassedLogin}
            />
            <button
                type="submit"
                className={`submit_btn ${styles.login_btn}`}
                disabled={!passedLogin}
            >
                로그인
            </button>
            <button
                type="submit"
                className={styles.test_login_btn}
                onClick={handleTestLogin}
            >
                테스트 계정으로 로그인
            </button>
        </form>
    );
}
