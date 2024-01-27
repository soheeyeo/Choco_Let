"use client";
import styles from "../test.module.css";
import testData from "../../../util/testData";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestContent({ params: { id } }) {
    const [qna, setQna] = useState(1);
    const [prevType, setPrevType] = useState("");
    const [currentType, setCurrentType] = useState("");
    const [finished, setFinished] = useState(false);

    const router = useRouter();

    const giftQna = testData.QNA_G;
    const tasteQna = testData.QNA;
    const findQna =
        id === "1"
            ? giftQna.filter((data) => data.id === qna)[0]
            : tasteQna.filter((data) => data.id === qna)[0];

    const handleSaveType = (type) => {
        setCurrentType(type);
        setPrevType(prevType + type);
    };

    useEffect(() => {
        if (id === "1") {
            switch (true) {
                case prevType.startsWith("A"):
                    if (currentType === "A") {
                        setQna(2.1);
                    } else if (currentType === "E" || currentType === "F") {
                        setQna(3.1);
                    } else if (currentType === "K") {
                        setQna(4.1);
                    } else if (
                        currentType === "J" ||
                        currentType === "O" ||
                        currentType === "P"
                    ) {
                        setFinished(true);
                    }
                    break;
                case prevType.startsWith("B") || prevType.startsWith("C"):
                    if (currentType === "B" || currentType === "C") {
                        setQna(2.2);
                    } else if (
                        currentType === "G" ||
                        currentType === "H" ||
                        currentType === "I"
                    ) {
                        setQna(3.2);
                    } else if (
                        currentType === "L" ||
                        currentType === "M" ||
                        currentType === "N"
                    ) {
                        setQna(4.2);
                    } else if (
                        prevType.includes("G") &&
                        (currentType === "Q" || currentType === "R")
                    ) {
                        setQna(5.1);
                    } else if (
                        prevType.includes("H") &&
                        (currentType === "Q" || currentType === "R")
                    ) {
                        setQna(5.2);
                    } else if (
                        prevType.includes("I") &&
                        (currentType === "Q" || currentType === "R")
                    ) {
                        setQna(5.3);
                    } else if (
                        currentType === "S" ||
                        currentType === "T" ||
                        currentType === "U" ||
                        currentType === "V" ||
                        currentType === "W" ||
                        currentType === "Y"
                    ) {
                        setFinished(true);
                    }
                    break;
                case prevType.startsWith("D"):
                    if (currentType === "D") {
                        setQna(2.3);
                    } else if (currentType === "G" || currentType === "I") {
                        setQna(3.2);
                    } else if (
                        currentType === "L" ||
                        currentType === "M" ||
                        currentType === "N"
                    ) {
                        setQna(4.2);
                    } else if (
                        prevType.includes("G") &&
                        (currentType === "Q" || currentType === "R")
                    ) {
                        setQna(5.1);
                    } else if (
                        prevType.includes("I") &&
                        (currentType === "Q" || currentType === "R")
                    ) {
                        setQna(5.3);
                    } else if (
                        currentType === "S" ||
                        currentType === "T" ||
                        currentType === "U" ||
                        currentType === "V" ||
                        currentType === "W" ||
                        currentType === "Y"
                    ) {
                        setFinished(true);
                    }
                    break;
                default:
                    break;
            }
        }
    }, [currentType, prevType]);

    useEffect(() => {
        if (id === "2") {
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
        }
    }, [currentType, prevType]);

    useEffect(() => {
        if (finished) {
            router.push(`/test/result/${prevType}`);
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
