import styles from "./list.module.css";
import NavList from "./NavList";

export default function List() {
    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} />
            </section>
        </main>
    );
}
