import styles from "./test.module.css";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const metadata = {
    description: "초콜릿 추천 테스트",
    openGraph: {
        description: "초콜릿 추천 테스트",
    },
};

export default function Test() {
    return (
        <main className={styles.test_main}>
            <section className={styles.test_section}>
                <h1 className="ir">추천 테스트</h1>
                <ul className={styles.test_li}>
                    <li className={styles.test_tit}>
                        <Link href={"/test/1"} className={styles.test_link}>
                            <span className={styles.test_txt}>
                                선물 추천 테스트
                            </span>
                            <HiArrowNarrowRight className={styles.test_arrow} />
                        </Link>
                    </li>
                    <li className={styles.test_tit}>
                        <Link href={"/test/2"} className={styles.test_link}>
                            <span className={styles.test_txt}>
                                초콜릿 취향 테스트
                            </span>
                            <HiArrowNarrowRight className={styles.test_arrow} />
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}
