"use client";
import DropdownBtn from "./DropdownBtn";
import ItemCard from "./ItemCard";
import { useState, useEffect, useMemo } from "react";
import useGetLike from "@/hooks/useGetLike";
import { Chocolate } from "@prisma/client";

interface ContentProps {
    itemList: Chocolate[];
    styles: Record<string, string>;
}

export default function Content({ itemList, styles }: ContentProps) {
    const { likedItemList } = useGetLike();
    const [selected, setSelected] = useState<string>("추천순");

    useEffect(() => {
        sessionStorage?.removeItem("prevPath");
    }, []);

    const data = itemList;

    // selected 상태값에 따른 초콜릿 데이터 정렬
    const sortedChocoData = useMemo(() => {
        let sortedData = [...data];

        switch (selected) {
            case "추천순":
                sortedData.sort((a, b) => b.recommendation - a.recommendation);
                break;
            case "브랜드명순":
                sortedData.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
            case "낮은가격순":
                sortedData.sort((a, b) => a.price - b.price);
                break;
            case "높은가격순":
                sortedData.sort((a, b) => b.price - a.price);
                break;
        }

        return sortedData;
    }, [selected]);

    return (
        <>
            <DropdownBtn
                styles={styles}
                selected={selected}
                setSelected={setSelected}
            />
            <div className={styles.item_container}>
                <ul className={styles.item_li}>
                    {sortedChocoData.map((chocolate) => {
                        return (
                            <li className={styles.item} key={chocolate.id}>
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
