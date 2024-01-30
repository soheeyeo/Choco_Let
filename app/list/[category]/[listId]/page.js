"use client";
import styles from "./list.module.css";
import NavList from "./NavList";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import useGetLike from "@/hooks/useGetLike";

export default function List({ params: { category } }) {
    const { likedItemList } = useGetLike();

    const [selected, setSelected] = useState("추천순");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const params = useParams();
    const param1 = params.category;
    const param2 = params.listId;

    useEffect(() => {
        fetch(`/api/list/${param1}/${param2}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setIsLoading(true);
            });
    }, [data]);

    useEffect(() => {
        sessionStorage?.removeItem("prevPath");
    }, []);

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
                {isLoading ? (
                    <>
                        <DropdownBtn
                            styles={styles}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <div className={styles.item_container}>
                            <ul className={styles.item_li}>
                                {sortedChocoData.map((chocolate, i) => {
                                    return (
                                        <li className={styles.item} key={i}>
                                            <ItemCard
                                                link={chocolate.id}
                                                styles={styles}
                                                img={chocolate.image}
                                                country={chocolate.country}
                                                brand={chocolate.brand}
                                                name={chocolate.name}
                                                price={chocolate.price}
                                                id={chocolate.id}
                                                liked={likedItemList.includes(
                                                    chocolate.id
                                                )}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                ) : (
                    <Loading style={"data_s"} />
                )}
            </section>
        </main>
    );
}
