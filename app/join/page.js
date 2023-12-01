import styles from "./join.module.css";
import JoinForm from "./JoinForm";

export default function Join() {
    return (
        <main>
            <section className="account_section">
                <h1 className="h1_tit">회원가입</h1>
                <JoinForm styles={styles} />
            </section>
        </main>
    );
}
