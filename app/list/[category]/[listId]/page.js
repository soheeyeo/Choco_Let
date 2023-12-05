import styles from "./list.module.css";
import NavList from "./NavList";
import ItemCard from "./ItemCard";

export default function List() {
    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} />
                <div className={styles.item_container}>
                    <ul className={styles.item_li}>
                        <li>
                            <ItemCard styles={styles} />
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
