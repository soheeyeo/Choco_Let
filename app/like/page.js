"use client";
import styles from "./like.module.css";
import LikeItemCard from "./LikeItemCard";
import { useState, useEffect } from "react";

export default function Like() {
    const [likeList, setLikedList] = useState([]);

    useEffect(() => {
        fetch("/api/like/likeList")
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setLikedList(result);
            });
    }, [likeList]);

    return (
        <main>
            <section className={styles.like_section}>
                <div className={styles.like_tit}>
                    <h1 className="h1_tit">관심 목록</h1>
                </div>
                <div className={styles.item_container}>
                    <ul className={styles.item_li}>
                        {likeList.map((chocolate, i) => {
                            return (
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
                            );
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
}
