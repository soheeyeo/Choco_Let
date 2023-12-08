"use client";
import styles from "./list.module.css";
import NavList from "./NavList";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import chocolates from "@/util/data";
import { useState } from "react";

export default function List() {
    const [selected, setSelected] = useState("추천순");

    let chocoData = [...chocolates];

    function handleSortItems() {
        if (selected === "추천순") {
            chocoData.sort((a, b) => {
                return a.recommendation < b.recommendation ? 1 : -1;
            });
        } else if (selected === "브랜드명순") {
            chocoData.sort((a, b) => {
                return a.brand > b.brand ? 1 : -1;
            });
        } else if (selected === "낮은가격순") {
            chocoData.sort((a, b) => {
                return a.price > b.price ? 1 : -1;
            });
        } else {
            chocoData.sort((a, b) => {
                return a.price < b.price ? 1 : -1;
            });
        }
        return chocoData;
    }

    const sortedChocoData = handleSortItems();

    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} />
                <DropdownBtn
                    styles={styles}
                    selected={selected}
                    setSelected={setSelected}
                />
                <div className={styles.item_container}>
                    <ul className={styles.item_li}>
                        {sortedChocoData.map((chocolate, i) => {
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
