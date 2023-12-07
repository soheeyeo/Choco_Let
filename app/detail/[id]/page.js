import styles from "./detail.module.css";
import Link from "next/link";
import chocolates from "@/util/data";

export default function Detail() {
    return (
        <main>
            <section className={styles.detail_section}>
                <div className={styles.info_container}>
                    <div className={styles.img_wrapper}>
                        <img
                            className={styles.info_img}
                            src={chocolates[0].image}
                        />
                    </div>
                    <div className={styles.info_contaner}>
                        <div className={styles.feature_container}>
                            <div className={styles.feature_box}>
                                <p>{chocolates[0].country}</p>
                            </div>
                            <div className={styles.feature_box}>
                                <p>{chocolates[0].type}</p>
                            </div>
                        </div>
                        <h4 className={styles.info_brand}>
                            {chocolates[0].brand}
                        </h4>
                        <span className={styles.info_name}>
                            {chocolates[0].name}
                        </span>

                        <div className={styles.price}>
                            <span className={styles.info_price}>
                                {chocolates[0].price}
                            </span>
                            <span className={styles.info_price_won}>원</span>
                            <span className={styles.info_price_s}>정가</span>
                        </div>
                        <p className={styles.info_txt}>
                            {chocolates[0].description}
                        </p>
                        <Link
                            className={styles.info_store}
                            href={chocolates[0].url}
                        >
                            판매처 바로가기
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
