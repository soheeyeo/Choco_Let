"use client";
import styles from "./detail.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import LikeBtn from "@/app/LikeBtn";

export default function Detail({ params: { id } }) {
    const [data, setData] = useState([]);
    const [likedItem, setLikedItem] = useState([]);

    useEffect(() => {
        fetch(`/api/detail?id=${id}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    useEffect(() => {
        fetch("/api/like")
            .then((res) => res.json())
            .then((result) => {
                setLikedItem(result);
            });
    }, []);

    const likedItemList = likedItem.map((chocolate) => chocolate.chocolateId);

    const liked = likedItemList.includes(data.id);

    return (
        <main>
            <section className={styles.detail_section}>
                <div className={styles.info_container}>
                    <div className={styles.img_wrapper}>
                        <img className={styles.info_img} src={data.image} />
                    </div>
                    <div className={styles.info_contaner}>
                        <div className={styles.feature_container}>
                            <div>
                                <div className={styles.feature_box}>
                                    <p>{data.country}</p>
                                </div>
                                <div className={styles.feature_box}>
                                    <p>{data.type}</p>
                                </div>
                            </div>
                            <LikeBtn
                                styles={styles}
                                liked={liked}
                                id={data.id}
                                size={"28px"}
                            />
                        </div>
                        <h4 className={styles.info_brand}>{data.brand}</h4>
                        <span className={styles.info_name}>{data.name}</span>

                        <div className={styles.price}>
                            <span className={styles.info_price}>
                                {data.price}
                            </span>
                            <span className={styles.info_price_won}>원</span>
                            <span className={styles.info_price_s}>정가</span>
                        </div>
                        <p className={styles.info_txt}>{data.description}</p>
                        <Link
                            className={styles.info_store}
                            href={`${data.url}`}
                            target="_blank"
                        >
                            판매처 바로가기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
