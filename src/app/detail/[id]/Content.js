"use client";
import useGetLike from "@/hooks/useGetLike";
import Link from "next/link";
import { useEffect } from "react";
import LikeBtn from "@/components/button/LikeBtn";
import styles from "./detail.module.css";

export default function Content({ item }) {
    const { likedItemList } = useGetLike();

    const data = item;

    useEffect(() => {
        sessionStorage?.removeItem("prevPath");
    }, []);

    const liked = likedItemList.includes(data.id);

    const price = data.price.toLocaleString();
    data.price = price;

    return (
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
                        <LikeBtn styles={styles} liked={liked} id={data.id} />
                    </div>
                    <h4 className={styles.info_brand}>{data.brand}</h4>
                    <span className={styles.info_name}>{data.name}</span>

                    <div className={styles.price}>
                        <span className={styles.info_price}>{data.price}</span>
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
    );
}
