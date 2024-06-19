"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/app/loading";

export default function Content({ styles, item }) {
    const data = item;

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3000);
    });

    return (
        <>
            {isLoading ? (
                <section className={styles.result_section}>
                    <h1 className={styles.result_tit}>
                        이 초콜릿을 추천드려요.
                    </h1>
                    <p className={styles.result_msg}>
                        제품을 클릭하면 상세 페이지로 이동합니다.
                    </p>
                    <div className={styles.result_item_container}>
                        <Link href={"/detail/" + data.id}>
                            <div className={styles.result_feature_container}>
                                <div className={styles.result_feature_box}>
                                    <p>{data.country}</p>
                                </div>
                                <div className={styles.result_feature_box}>
                                    <p>{data.type}</p>
                                </div>
                            </div>
                            <div className={styles.result_img_wrapper}>
                                <img
                                    className={styles.result_img}
                                    src={data.image}
                                />
                            </div>
                            <div className={styles.result_info_container}>
                                <h4 className={styles.result_brand_name}>
                                    {data.brand}
                                </h4>
                                <p className={styles.result_item_name}>
                                    {data.name}
                                </p>
                            </div>
                        </Link>
                    </div>
                </section>
            ) : (
                <Loading result={"result"} style={"loading_test"} />
            )}
        </>
    );
}
