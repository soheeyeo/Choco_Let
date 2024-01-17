import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm({ styles }) {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({
        email: "",
        pw: "",
    });

    const handleInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email: inputValue.email,
                password: inputValue.pw,
                callbackUrl: sessionStorage.getItem("prevPath") || "/",
            });
            if (!res.ok) {
                alert(res.error);
            } else {
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
            />
            <input
                type="password"
                id="password"
                name="pw"
                placeholder="비밀번호"
                className="account_input"
                value={inputValue.password}
                onChange={handleInputValue}
            />
            <button type="submit" className={`submit_btn ${styles.login_btn}`}>
                로그인
            </button>
        </form>
    );
}
