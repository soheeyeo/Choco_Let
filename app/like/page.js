"use client";
import styles from "./like.module.css";
import LikeItemCard from "./LikeItemCard";
import { useState, useEffect } from "react";

export default function Like() {
    const [isLoading, setIsLoading] = useState(false);
    const [likeList, setLikedList] = useState([]);

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
            <section className={styles.like_section}>
                <div className={styles.like_tit}>
                    <h1 className="h1_tit">관심 목록</h1>
                </div>
                {isLoading ? (
                    likeList.length !== 0 ? (
                        <div className={styles.item_container}>
                            <ul className={styles.item_li}>
                                {likeList.map((chocolate, i) => (
                                    <li className={styles.item} key={i}>
                                        <LikeItemCard
                                            link={chocolate.id}
                                            styles={styles}
                                            img={chocolate.image}
                                            country={chocolate.country}
                                            brand={chocolate.brand}
                                            name={chocolate.name}
                                            price={chocolate.price}
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
                    )
                ) : (
                    ""
                )}
            </section>
        </main>
    );
}
