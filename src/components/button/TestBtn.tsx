"use client";
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";

export default function TestBtn() {
    const router = useRouter();

    const handleOnClick = () => {
        router.push("/test");
    };

    return (
        <button className={styles.test_btn} onClick={handleOnClick}>
            초콜릿 추천 테스트 바로가기
        </button>
    );
}
