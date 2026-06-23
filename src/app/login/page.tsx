import Link from "next/link";
import styles from "./login.module.css";
import LoginForm from "./LoginForm";
import SocialLoginButtons from "./SocialLoginButtons";

export default function Login() {
    return (
        <main>
            <section className="account_section">
                <h1 className="h1_tit">로그인</h1>
                <LoginForm styles={styles} />
                <div>
                    <Link href="/signup" className={styles.join_link_btn}>
                        회원가입
                    </Link>
                    <p className={styles.social_login_txt}>소셜 로그인</p>
                    <SocialLoginButtons />
                </div>
            </section>
        </main>
    );
}
