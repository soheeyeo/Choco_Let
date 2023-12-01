import styles from "./login.module.css";
import LoginForm from "./LoginForm";

export default function Login() {
    return (
        <main>
            <section className="account_section">
                <h1 className="h1_tit">로그인</h1>
                <LoginForm styles={styles} />
                <div>
                    <button className={styles.join_link_btn}>회원가입</button>
                    <p className={styles.social_login_txt}>소셜 로그인</p>
                    <div className={styles.social_login_container}>
                        <button
                            className={`${styles.social_btn} ${styles.kakao_btn}`}
                        ></button>
                        <span className="ir">카카오 로그인</span>
                        <button
                            className={`${styles.social_btn} ${styles.naver_btn}`}
                        >
                            <span className="ir">네이버 로그인</span>
                        </button>
                        <button
                            className={`${styles.social_btn} ${styles.google_btn}`}
                        >
                            <span className="ir">구글 로그인</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
