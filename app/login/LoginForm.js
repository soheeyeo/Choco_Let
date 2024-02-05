import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm({ styles }) {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({
        email: "",
        pw: "",
    });
    const [passedLogin, setPassedLogin] = useState(false);

    const handleInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const isPassedLogin = () => {
        return inputValue.email !== "" && inputValue.pw !== ""
            ? setPassedLogin(true)
            : setPassedLogin(false);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: inputValue.email,
                password: inputValue.pw,
                callbackUrl: sessionStorage.getItem("prevPath") || "/",
                redirect: false,
            });

            if (res.status === 401) {
                alert(res.error);
                setInputValue({
                    email: "",
                    pw: "",
                });
            } else {
                router.refresh();
                router.push(res.url);
            }
        } catch (err) {
            console.log(err);
        }
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
        </form>
    );
}
