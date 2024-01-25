"use client";
import styles from "../../test.module.css";
import testData from "@/util/testData";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Result({ params: { type } }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const testResult = testData.result;
    const result = testResult.filter((data) => data.type === type)[0];

    useEffect(() => {
        fetch(`/api/result?name=${result.name}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setIsLoading(true);
            });
    }, []);

    console.log(data);

    if (isLoading) {
        const price = data.price.toLocaleString();
        data.price = price;
    }

    return (
        <main className={styles.result_main}>
            <section className={styles.result_section}>
                {isLoading ? (
                    <>
                        <h1 className={styles.result_tit}>
                            이 초콜릿을 추천드려요.
                        </h1>
                        <p className={styles.result_msg}>
                            제품을 클릭하면 상세 페이지로 이동합니다.
                        </p>
                        <div className={styles.result_item_container}>
                            <Link href={"/detail/" + data.id}>
                                <div
                                    className={styles.result_feature_container}
                                >
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
                                    <div
                                        className={styles.result_info_contents}
                                    >
                                        <div>
                                            <h4
                                                className={
                                                    styles.result_brand_name
                                                }
                                            >
                                                {data.brand}
                                            </h4>
                                            <p
                                                className={
                                                    styles.result_item_name
                                                }
                                            >
                                                {data.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </section>
        </main>
    );
}
