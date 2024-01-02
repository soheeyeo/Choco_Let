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
                            <div>
                                <div className={styles.feature_box}>
                                    <p>{chocolates[0].country}</p>
                                </div>
                                <div className={styles.feature_box}>
                                    <p>{chocolates[0].type}</p>
                                </div>
                            </div>
                            <button className={styles.like_btn}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                >
                                    <path
                                        className={styles.like_icon}
                                        d="M19.2497 5.25C21.8233 5.25 23.9163 7.343 23.9163 9.91667C23.9163 15.3638 17.4495 20.3478 13.9997 22.7768C10.5498 20.3478 4.08301 15.3638 4.08301 9.91667C4.08301 7.343 6.17601 5.25 8.74967 5.25C9.49903 5.25169 10.237 5.43336 10.9015 5.77972C11.566 6.12609 12.1376 6.62701 12.5682 7.24033L13.9997 9.2785L15.4312 7.2415C15.8615 6.62782 16.433 6.12657 17.0975 5.77998C17.7621 5.43339 18.5002 5.25163 19.2497 5.25ZM19.2497 3.5C18.2191 3.49985 17.2038 3.74836 16.2898 4.22444C15.3758 4.70053 14.5902 5.39011 13.9997 6.23467C13.4091 5.39011 12.6235 4.70053 11.7095 4.22444C10.7956 3.74836 9.78021 3.49985 8.74967 3.5C7.04787 3.5 5.41576 4.17604 4.21241 5.3794C3.00905 6.58276 2.33301 8.21486 2.33301 9.91667C2.33301 16.5888 9.91634 22.0943 13.9997 24.9083C18.083 22.0943 25.6663 16.5888 25.6663 9.91667C25.6663 9.07402 25.5004 8.23962 25.1779 7.46111C24.8554 6.68261 24.3828 5.97524 23.7869 5.3794C23.1911 4.78356 22.4837 4.31091 21.7052 3.98844C20.9267 3.66597 20.0923 3.5 19.2497 3.5Z"
                                        fill="#EB7EA2"
                                    />
                                </svg>
                            </button>
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
