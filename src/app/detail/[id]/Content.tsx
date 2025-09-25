"use client";
import { useEffect } from "react";
import { Chocolate } from "@prisma/client";
import useGetLike from "@/hooks/useGetLike";
import Link from "next/link";
import LikeBtn from "@/components/button/LikeBtn";
import styles from "./detail.module.css";
import Image from "next/image";

export default function Content({ item }: { item: Chocolate }) {
    const { likedItemList = [], isError, error } = useGetLike();

    useEffect(() => {
        sessionStorage?.removeItem("prevPath");
    }, []);

    const liked = likedItemList.includes(item.id);

    const price = item.price.toLocaleString();

    if (isError) {
        console.log("좋아요 조회 실패", error?.message);
        alert("데이터 조회 중 문제가 발생했습니다. 다시 시도해주세요.");
    }

    return (
        <section className={styles.detail_section}>
            <div className={styles.info_container}>
                <div className={styles.img_wrapper}>
                    <Image
                        src={item.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                        alt={`${item.name} 이미지`}
                        priority
                    />
                </div>
                <div>
                    <div className={styles.feature_container}>
                        <div>
                            <div className={styles.feature_box}>
                                <p>{item.country}</p>
                            </div>
                            <div className={styles.feature_box}>
                                <p>{item.type}</p>
                            </div>
                        </div>
                        <LikeBtn styles={styles} liked={liked} id={item.id} />
                    </div>
                    <h4 className={styles.info_brand}>{item.brand}</h4>
                    <span className={styles.info_name}>{item.name}</span>

                    <div className={styles.price}>
                        <span className={styles.info_price}>{price}</span>
                        <span className={styles.info_price_won}>원</span>
                        <span className={styles.info_price_s}>정가</span>
                    </div>
                    <p className={styles.info_txt}>{item.description}</p>
                    <Link
                        className={styles.info_store}
                        href={`${item.url}`}
                        target="_blank"
                    >
                        판매처 바로가기
                    </Link>
                </div>
            </div>
        </section>
    );
}
