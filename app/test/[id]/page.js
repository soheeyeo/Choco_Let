"use client";
import styles from "../test.module.css";
import testData from "../../../util/testData";
import useTestQna from "@/hooks/useTestQna";
import { IoChevronBackOutline } from "react-icons/io5";

export default function TestContent({ params: { id } }) {
    const { qna, disabled, handleSaveType, handleBack } = useTestQna();

    const giftQna = testData.QNA_G;
    const tasteQna = testData.QNA;
    const findQna =
        id === "1"
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
