import Link from "next/link";
import styles from "./page.module.css";
import { categories } from "@/constants/constants";
import TestBtn from "../components/button/TestBtn";

export default function Home() {
    return (
        <main>
            <section className={styles.banner_section}>
                <div className={styles.banner_wrapper}>
                    <div className={styles.banner_img}>
                        <div className={styles.txt_container}>
                            <h1 className={styles.banner_txt}>
                                Choco<span>Let</span>
                            </h1>
                            <p className={styles.banner_subtxt}>
                                당신을 위한 특별한 초콜릿 추천
                            </p>
                            <p className={styles.banner_subtxt}>
                                <span>초코</span>
                                <span>렛</span>과 함께 새로운 맛의 발견을
                                경험해보세요!
                            </p>
                            <TestBtn />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.category_section}>
                <h2 className="ir">카테고리</h2>
                <div className={styles.category_container}>
                    {categories.map((a, i) => {
                        return (
                            <Link
                                href={a.link}
                                className={styles[`category_card_0${i + 1}`]}
                                key={i}
                            >
                                <p className={styles.category_name}>
                                    {a.category}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
