"use client";
import styles from "../test.module.css";
import testData from "@/util/testData.json";
import useTestQna from "@/hooks/useTestQna";
import { IoChevronBackOutline } from "react-icons/io5";
import { useEffect } from "react";

interface TestContentParams {
    id: string;
}

export default function TestContent({ params }: { params: TestContentParams }) {
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
    const findQna =
        params.id === "1"
            ? giftQna.filter((data) => data.id === qna)[0]
            : tasteQna.filter((data) => data.id === qna)[0];

    return (
        <main className={styles.test_qna_main}>
            <section className={styles.test_qna_section}>
                <h1 className="ir">추천 테스트</h1>
                <div className={styles.test_content}>
                    <span className={styles.test_question}>{findQna.q}</span>
                    <div className={styles.test_options}>
                        {findQna.a.map((option, i) => {
                            return (
                                <button
                                    className={styles.test_option}
                                    key={i}
                                    onClick={() => handleSaveType(option.type)}
                                >
                                    {option.content}
                                </button>
                            );
                        })}
                    </div>
                    {disabled ? (
                        ""
                    ) : (
                        <div className={styles.btn_container}>
                            <button
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
                </div>
            </section>
        </main>
    );
}
