import styles from "./signup.module.css";
import SignupForm from "./SignupForm";

export default function Join() {
    return (
        <main>
            <section className="account_section">
                <h1 className="h1_tit">회원가입</h1>
                <SignupForm styles={styles} />
            </section>
        </main>
    );
}
