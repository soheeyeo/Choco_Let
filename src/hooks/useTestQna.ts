"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function useTestQna() {
    const [qna, setQna] = useState<number>(1);
    const [prevType, setPrevType] = useState<string>("");
    const [currentType, setCurrentType] = useState<string>("");
    const [finished, setFinished] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    const router = useRouter();

    const params = useParams();
    const id = params.id;

    const handleSaveType = (type: string) => {
        setCurrentType(type);
        setPrevType(prevType + type);
    };

    const handleBack = () => {
        if (prevType.length > 0) {
            const backPrevType = prevType.slice(0, -1);
            setPrevType(backPrevType);
            const backCurrentType = backPrevType.slice(-1);
            setCurrentType(backCurrentType);
        }
    };

    useEffect(() => {
        if (id === "1") {
            switch (true) {
                case prevType === "" || currentType === "":
                    setQna(1);
                    break;
                case prevType.startsWith("A"):
                    if (currentType === "A") {
                        setQna(2.1);
                    } else if (currentType === "E" || currentType === "F") {
                        setQna(3.1);
                    } else if (
                        (prevType.includes("F") && currentType === "J") ||
                        currentType === "K"
                    ) {
                        setQna(4.1);
                    } else if (
                        (prevType.includes("E") && currentType === "J") ||
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
                case prevType === "" || currentType === "":
                    setQna(1);
                    break;
                case prevType.startsWith("M"):
                    if (currentType === "M") {
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
                case prevType.startsWith("D"):
                    if (currentType === "D") {
                        setQna(2.1);
                    } else if (currentType === "I" || currentType === "E") {
                        setQna(3.1);
                    } else if (
                        (prevType.includes("I") && currentType === "R") ||
                        currentType === "U"
                    ) {
                        setQna(4);
                    } else if (
                        (prevType.includes("IU") || prevType.includes("EU")) &&
                        (currentType === "B" || currentType === "G")
                    ) {
                        setQna(5.1);
                    } else if (
                        (prevType.includes("E") && currentType === "R") ||
                        (prevType.includes("IR") &&
                            (currentType === "B" || currentType === "G")) ||
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
        if (qna === 1) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    });

    useEffect(() => {
        if (finished) {
            router.push(`/test/result/${prevType}`);
        }
    }, [finished]);

    return {
        qna,
        disabled,
        handleSaveType,
        handleBack,
    };
}
