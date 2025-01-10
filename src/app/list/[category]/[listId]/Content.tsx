"use client";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import useGetLike from "@/hooks/useGetLike";
import { Chocolate } from "@prisma/client";

interface ContentProps {
    itemList: Chocolate[];
    styles: Record<string, string>;
}

export default function Content({ itemList, styles }: ContentProps) {
    const { likedItemList } = useGetLike();

    const [selected, setSelected] = useState<string>("추천순");

    const data = itemList;

    useEffect(() => {
        sessionStorage?.removeItem("prevPath");
    }, []);

    function handleSortItems(selected: string) {
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
                                    styles={styles}
                                    chocolate={chocolate}
                                    liked={likedItemList.includes(chocolate.id)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
