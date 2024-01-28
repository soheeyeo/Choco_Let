"use client";
import styles from "../../test.module.css";
import testData from "@/util/testData";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Result({ params: { type } }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const testResult = testData.result;
    const result = testResult.find((data) => {
        if (Array.isArray(data.type)) {
            return data.type.includes(type);
        } else {
            return data.type === type;
        }
    });

    useEffect(() => {
        fetch(`/api/result/${result.name}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setIsLoading(true);
            });
    }, []);

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
                                    <h4 className={styles.result_brand_name}>
                                        {data.brand}
                                    </h4>
                                    <p className={styles.result_item_name}>
                                        {data.name}
                                    </p>
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
