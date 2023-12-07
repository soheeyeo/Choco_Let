import styles from "./list.module.css";
import NavList from "./NavList";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import chocolates from "@/util/data";

export default function List() {
    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} />
                <DropdownBtn styles={styles} />
                <div className={styles.item_container}>
                    <ul className={styles.item_li}>
                        {chocolates.map((chocolate, i) => {
                            return (
                                <li className={styles.item}>
                                    <ItemCard
                                        link={i + 1}
                                        styles={styles}
                                        img={chocolate.image}
                                        brand={chocolate.brand}
                                        name={chocolate.name}
                                        price={chocolate.price}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
}
