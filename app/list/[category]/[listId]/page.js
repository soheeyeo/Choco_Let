"use client";
import styles from "./list.module.css";
import NavList from "./NavList";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function List({ params: { category } }) {
    const [selected, setSelected] = useState("추천순");
    const [data, setData] = useState([]);

    const params = useParams();
    const param1 = params.category;
    const param2 = params.listId;

    useEffect(() => {
        fetch(`/api/list/${param1}/${param2}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, [data]);

    function handleSortItems(selected) {
        let sortedData = [...data];
        if (selected === "추천순") {
            sortedData.sort((a, b) => {
                return a.recommendation < b.recommendation ? 1 : -1;
            });
        } else if (selected === "브랜드명순") {
            sortedData.sort((a, b) => {
                return a.brand > b.brand ? 1 : -1;
            });
        } else if (selected === "낮은가격순") {
            sortedData.sort((a, b) => {
                return a.price > b.price ? 1 : -1;
            });
        } else {
            sortedData.sort((a, b) => {
                return a.price < b.price ? 1 : -1;
            });
        }
        return sortedData;
    }

    const sortedChocoData = handleSortItems(selected);

    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} category={category} />
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
                                        link={chocolate.id}
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
