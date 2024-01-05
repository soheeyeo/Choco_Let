import Link from "next/link";

export default function ItemCard({
    styles,
    link,
    img,
    country,
    brand,
    name,
    price,
}) {
    return (
        <Link href={"/detail/" + link}>
            <div className={styles.item_card}>
                <div className={styles.img_wrapper}>
                    <img className={styles.item_img} src={img} />
                </div>
                <div className={styles.info_container}>
                    <div className={styles.btn_container}>
                        <div className={styles.feature_box}>
                            <p>{country}</p>
                        </div>
                        <button className={styles.like_btn}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className={styles.like_icon}
                                    d="M13.7503 3.75C15.5887 3.75 17.0837 5.245 17.0837 7.08333C17.0837 10.9742 12.4645 14.5342 10.0003 16.2692C7.53616 14.5342 2.91699 10.9742 2.91699 7.08333C2.91699 5.245 4.41199 3.75 6.25032 3.75C6.78558 3.75121 7.31271 3.88097 7.78736 4.12837C8.26201 4.37578 8.67029 4.73358 8.97782 5.17167L10.0003 6.6275L11.0228 5.1725C11.3302 4.73416 11.7384 4.37612 12.2131 4.12856C12.6877 3.88099 13.215 3.75116 13.7503 3.75ZM13.7503 2.5C13.0142 2.49989 12.289 2.6774 11.6361 3.01746C10.9833 3.35752 10.4221 3.85008 10.0003 4.45333C9.57851 3.85008 9.01736 3.35752 8.36452 3.01746C7.71168 2.6774 6.98642 2.49989 6.25032 2.5C5.03475 2.5 3.86896 2.98289 3.00942 3.84243C2.14988 4.70197 1.66699 5.86776 1.66699 7.08333C1.66699 11.8492 7.08366 15.7817 10.0003 17.7917C12.917 15.7817 18.3337 11.8492 18.3337 7.08333C18.3337 6.48144 18.2151 5.88544 17.9848 5.32937C17.7544 4.77329 17.4168 4.26803 16.9912 3.84243C16.5656 3.41683 16.0604 3.07922 15.5043 2.84889C14.9482 2.61855 14.3522 2.5 13.7503 2.5Z"
                                    fill="#EB7EA2"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={styles.info_contents}>
                        <div>
                            <h4 className={styles.info_brand_name}>{brand}</h4>
                            <p className={styles.info_item_name}>{name}</p>
                        </div>
                        <div>
                            <span className={styles.info_price}>{price}원</span>
                            <span className={styles.info_price_s}>정가</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
