import Link from "next/link";
import chocolates from "@/util/data";

export default function ItemCard({ styles }) {
    return (
        <Link href="/detail">
            <div className={styles.item_card}>
                <div className={styles.img_wrapper}>
                    <img
                        className={styles.item_img}
                        src={chocolates[0].image}
                    />
                </div>
                <div className={styles.info_container}>
                    <div>
                        <h4 className={styles.info_brand_name}>
                            {chocolates[0].brand}
                        </h4>
                        <p className={styles.info_item_name}>
                            {chocolates[0].name}
                        </p>
                    </div>
                    <div>
                        <span className={styles.info_price}>
                            {chocolates[0].price}원
                        </span>
                        <span className={styles.info_price_s}>정가</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
