"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm({ styles }) {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({
        email: "",
        validEmail: false,
        pw: "",
        validPw: false,
        pwCheck: "",
        matchPw: false,
        nickname: "",
        validNickname: false,
    });

    const [errMessage, setErrMessage] = useState({
        email: "",
        pw: "",
        pwCheck: "",
    });

    const [passedSignup, setPassedSignup] = useState(false);

    const handleInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const regexs = {
        emailRegex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
        pwRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        nicknameRegex: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/,
    };

    const handleInputBlur = (e) => {
        if (e.target.name === "email") {
            if (!regexs.emailRegex.test(inputValue.email)) {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "이메일 형식을 확인해주세요.",
                });
                setInputValue({
                    ...inputValue,
                    validEmail: false,
                });
            } else {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "",
                });
                setInputValue({
                    ...inputValue,
                    validEmail: true,
                });
            }
        } else if (e.target.name === "pw") {
            if (!regexs.pwRegex.test(inputValue.pw)) {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]:
                        "8자리 이상의 영문, 숫자를 조합하여 입력해주세요.",
                });
                setInputValue({
                    ...inputValue,
                    validPw: false,
                });
            } else {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "",
                });
                setInputValue({
                    ...inputValue,
                    validPw: true,
                });
            }
        } else if (e.target.name === "pwCheck") {
            if (inputValue.pw !== e.target.value) {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "비밀번호가 일치하지 않습니다.",
                });
                setInputValue({
                    ...inputValue,
                    matchPw: false,
                });
            } else {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "",
                });
                setInputValue({
                    ...inputValue,
                    matchPw: true,
                });
            }
        } else if (e.target.name === "nickname") {
            if (!regexs.nicknameRegex.test(inputValue.nickname)) {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "2글자 이상으로 입력해주세요.",
                });
                setInputValue({
                    ...inputValue,
                    validNickname: false,
                });
            } else {
                setErrMessage({
                    ...errMessage,
                    [e.target.name]: "",
                });
                setInputValue({
                    ...inputValue,
                    validNickname: true,
                });
            }
        }
    };

    const isPassedSignup = () => {
        return inputValue.validEmail &&
            inputValue.validPw & inputValue.matchPw &&
            (inputValue.validNickname ||
                regexs.nicknameRegex.test(inputValue.nickname))
            ? setPassedSignup(true)
            : setPassedSignup(false);
    };

    const handleOnSubmit = async (e) => {
        const email = inputValue.email;
        const pw = inputValue.pw;
        const pwCheck = inputValue.pwCheck;
        const nickname = inputValue.nickname;
        e.preventDefault();
        if (email === "" || pw === "" || pwCheck === "" || nickname === "") {
            alert("모두 작성해주세요.");
        } else {
            try {
                const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    body: JSON.stringify({ email, pw, nickname }),
                });
                const result = await res.json();
                if (result.message === "가입완료") {
                    alert("가입이 완료되었습니다.");
                    router.push("/login");
                } else {
                    alert("이미 가입된 이메일입니다.");
                    setInputValue({
                        email: "",
                        validEmail: false,
                        pw: "",
                        validPw: false,
                        pwCheck: "",
                        matchPw: false,
                        nickname: "",
                        validNickname: false,
                    });
                    setPassedSignup(false);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <form method="POST" className="account_form">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                className={errMessage.email ? "err_input" : "account_input"}
                value={inputValue.email}
                onChange={handleInputValue}
                onBlur={handleInputBlur}
                onKeyUp={isPassedSignup}
            />
            {errMessage.email && (
                <span className="err_msg">{errMessage.email}</span>
            )}
            <input
                type="password"
                id="password"
                name="pw"
                placeholder="비밀번호"
                className={errMessage.pw ? "err_input" : "account_input"}
                value={inputValue.pw}
                onChange={handleInputValue}
                onBlur={handleInputBlur}
                onKeyUp={isPassedSignup}
            />
            {errMessage.pw && <span className="err_msg">{errMessage.pw}</span>}
            <input
                type="password"
                id="password_check"
                name="pwCheck"
                placeholder="비밀번호 확인"
                className={errMessage.pwCheck ? "err_input" : "account_input"}
                value={inputValue.pwCheck}
                onChange={handleInputValue}
                onBlur={handleInputBlur}
                onKeyUp={isPassedSignup}
            />
            {errMessage.pwCheck && (
                <span className="err_msg">{errMessage.pwCheck}</span>
            )}
            <input
                type="text"
                id="user_name"
                name="nickname"
                placeholder="닉네임"
                className={errMessage.nickname ? "err_input" : "account_input"}
                maxLength={10}
                value={inputValue.nickname}
                onChange={handleInputValue}
                onBlur={handleInputBlur}
                onKeyUp={isPassedSignup}
            />
            {errMessage.nickname && (
                <span className="err_msg">{errMessage.nickname}</span>
            )}

            <button
                type="submit"
                className={`submit_btn ${styles.signup_btn}`}
                disabled={!passedSignup}
                onClick={handleOnSubmit}
            >
                가입하기
            </button>
        </form>
    );
}
