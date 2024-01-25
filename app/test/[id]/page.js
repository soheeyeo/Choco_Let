"use client";
import styles from "../test.module.css";
import testData from "../../../util/testData";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestContent() {
    const [qna, setQna] = useState(1);
    const [prevType, setPrevType] = useState("");
    const [currentType, setCurrentType] = useState("");
    const [finished, setFinished] = useState(false);

    const router = useRouter();

    const testQna = testData.QNA;
    const findQna = testQna.filter((data) => data.id === qna)[0];

    const handleSaveType = (type) => {
        setCurrentType(type);
        setPrevType(prevType + type);
    };

    useEffect(() => {
        switch (true) {
            case prevType.startsWith("M") || prevType.startsWith("D"):
                if (currentType === "M" || currentType === "D") {
                    setQna(2.1);
                } else if (currentType === "I" || currentType === "E") {
                    setQna(3.1);
                } else if (currentType === "R" || currentType === "U") {
                    setQna(4);
                } else if (currentType === "B" || currentType === "G") {
                    setQna(5.1);
                } else if (
                    currentType === "S" ||
                    currentType === "K" ||
                    currentType === "A"
                ) {
                    setFinished(true);
                }
                break;
            case prevType.startsWith("W"):
                if (currentType === "W") {
                    setQna(2.1);
                } else if (currentType === "I") {
                    setQna(4);
                } else if (currentType === "E") {
                    setQna(3.2);
                } else if (
                    currentType === "T" ||
                    currentType === "B" ||
                    currentType === "G"
                ) {
                    setQna(5.1);
                } else if (
                    currentType === "S" ||
                    currentType === "K" ||
                    currentType === "A" ||
                    currentType === "O"
                ) {
                    setFinished(true);
                }
                break;
            case prevType.startsWith("V"):
                if (currentType === "V") {
                    setQna(2.2);
                } else if (
                    currentType === "N" ||
                    currentType === "F" ||
                    currentType === "C" ||
                    currentType === "J"
                ) {
                    setQna(4);
                } else if (currentType === "B" || currentType === "G") {
                    setQna(5.1);
                } else if (
                    currentType === "S" ||
                    currentType === "K" ||
                    currentType === "A"
                ) {
                    setFinished(true);
                }
                break;
            case prevType.startsWith("P"):
                if (currentType === "P") {
                    setQna(2.3);
                } else if (currentType === "H" || currentType === "L") {
                    setQna(4);
                } else if (currentType === "B" || currentType === "G") {
                    setQna(5.2);
                } else if (currentType === "X" || currentType === "Z") {
                    setFinished(true);
                }
                break;
            default:
                break;
        }
    }, [currentType, prevType]);

    useEffect(() => {
        if (finished) {
            router.push("/test/result");
        }
    }, [finished]);

    return (
        <main className={styles.test_main}>
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
                </div>
            </section>
        </main>
    );
}
