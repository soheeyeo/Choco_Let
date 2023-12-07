import Link from "next/link";

export default function ItemCard({ styles, link, img, brand, name, price }) {
    return (
        <Link href={"/detail/" + link}>
            <div className={styles.item_card}>
                <div className={styles.img_wrapper}>
                    <img className={styles.item_img} src={img} />
                </div>
                <div className={styles.info_container}>
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
        </Link>
    );
}
