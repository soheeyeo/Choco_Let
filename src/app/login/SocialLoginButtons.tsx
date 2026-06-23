"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";

const getRedirectTo = () =>
    (typeof window !== "undefined" &&
        sessionStorage.getItem("prevPath")) ||
    "/";

export default function SocialLoginButtons() {
    return (
        <div className={styles.social_login_container}>
            <button
                type="button"
                className={`${styles.social_btn} ${styles.kakao_btn}`}
                onClick={() =>
                    signIn("kakao", {
                        redirect: true,
                        redirectTo: getRedirectTo(),
                    })
                }
            >
                <span className="ir">카카오 로그인</span>
            </button>
            <button
                type="button"
                className={`${styles.social_btn} ${styles.naver_btn}`}
                onClick={() =>
                    signIn("naver", {
                        redirect: true,
                        redirectTo: getRedirectTo(),
                    })
                }
            >
                <span className="ir">네이버 로그인</span>
            </button>
            <button
                type="button"
                className={`${styles.social_btn} ${styles.google_btn}`}
                onClick={() =>
                    signIn("google", {
                        redirect: true,
                        redirectTo: getRedirectTo(),
                    })
                }
            >
                <span className="ir">구글 로그인</span>
            </button>
        </div>
    );
}
