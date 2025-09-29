"use client";
import React, { useEffect } from "react";
import styles from "../test.module.css";
import testData from "@/util/testData.json";
import useTestQna from "@/hooks/useTestQna";
import { IoChevronBackOutline } from "react-icons/io5";

interface TestContentParams {
    id: string;
}

export default function TestContent({
    params,
}: {
    params: Promise<TestContentParams>;
}) {
    const routeParams = React.use(params);
    const { qna, disabled, handleSaveType, handleBack } = useTestQna();

    useEffect(() => {
        document.documentElement.classList.add(styles.height);
        document.body.classList.add(styles.height);
        return () => {
            document.documentElement.classList.remove(styles.height);
            document.body.classList.remove(styles.height);
        };
    }, []);

    const giftQna = testData.QNA_G;
    const tasteQna = testData.QNA;
    const findQna = (routeParams.id === "1" ? giftQna : tasteQna).find(
        (data) => data.id === qna
    );

    return (
        <main className={styles.test_qna_main}>
            <section className={styles.test_qna_section}>
                <h1 className="ir">추천 테스트</h1>
                <div className={styles.test_content}>
                    {!findQna ? (
                        <p className={styles.error_msg}>
                            질문을 찾을 수 없습니다.
                        </p>
                    ) : (
                        <>
                            <span className={styles.test_question}>
                                {findQna.q}
                            </span>
                            <div className={styles.test_options}>
                                {findQna.a.map((option, i) => (
                                    <button
                                        type="button"
                                        className={styles.test_option}
                                        key={i}
                                        onClick={() =>
                                            handleSaveType(option.type)
                                        }
                                    >
                                        {option.content}
                                    </button>
                                ))}
                            </div>
                            {!disabled && (
                                <div className={styles.btn_container}>
                                    <button
                                        type="button"
                                        className={styles.test_back_btn}
                                        onClick={handleBack}
                                    >
                                        <IoChevronBackOutline
                                            className={styles.test_back_icon}
                                        />
                                        이전
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
