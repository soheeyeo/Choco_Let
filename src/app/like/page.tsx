"use client";
import styles from "./like.module.css";
import LikeItemCard from "./LikeItemCard";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { Chocolate } from "@prisma/client";
import { fetchData } from "@/data/fetchData";

export default function Like() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [likeList, setLikedList] = useState<Chocolate[]>([]);

    useEffect(() => {
        (async () => {
            try {
                // 관심목록 API 요청
                const result = await fetchData("GET", "like/likeList");
                setLikedList(result);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    // 삭제 버튼 클릭 핸들러
    const handleDeleteClick = async (id: number) => {
        try {
            await fetchData("DELETE", "like/likeList", id);
            setLikedList((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            {!isLoading ? (
                <section className={styles.like_section}>
                    <div className={styles.like_tit}>
                        <h1 className="h1_tit">관심 목록</h1>
                    </div>
                    {likeList.length !== 0 ? (
                        <div className={styles.item_container}>
                            <ul className={styles.item_li}>
                                {likeList.map((chocolate) => (
                                    <li
                                        className={styles.item}
                                        key={chocolate.id}
                                    >
                                        <LikeItemCard
                                            chocolate={chocolate}
                                            styles={styles}
                                            handleOnClick={handleDeleteClick}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.txt_wrapper}>
                            <p className={styles.like_empty_msg}>
                                아직 관심 목록이 없어요.
                            </p>
                        </div>
                    )}
                </section>
            ) : (
                <Loading style={"data_f"} />
            )}
        </main>
    );
}
