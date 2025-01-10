"use client";
import styles from "./like.module.css";
import LikeItemCard from "./LikeItemCard";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { Chocolate } from "@prisma/client";

export default function Like() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [likeList, setLikedList] = useState<Chocolate[]>([]);

    useEffect(() => {
        fetch("/api/like/likeList")
            .then((res) => res.json())
            .then((result) => {
                setLikedList(result);
                setIsLoading(true);
            });
    }, [likeList]);

    return (
        <main>
            {isLoading ? (
                <section className={styles.like_section}>
                    <div className={styles.like_tit}>
                        <h1 className="h1_tit">관심 목록</h1>
                    </div>
                    {likeList.length !== 0 ? (
                        <div className={styles.item_container}>
                            <ul className={styles.item_li}>
                                {likeList.map((chocolate, i) => (
                                    <li className={styles.item} key={i}>
                                        <LikeItemCard
                                            chocolate={chocolate}
                                            styles={styles}
                                            id={chocolate.id}
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
