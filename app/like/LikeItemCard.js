import Link from "next/link";
import { HiXMark } from "react-icons/hi2";

export default function LikeItemCard({
    styles,
    link,
    img,
    country,
    brand,
    name,
    price,
    id,
}) {
    const handleOnClick = async () => {
        try {
            const res = await fetch("/api/like/likeList", {
                method: "DELETE",
                body: JSON.stringify(id),
            });
        } catch (err) {
            console.log(err);
        }
    };

    const formattedPrice = price.toLocaleString();

    return (
        <>
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
                        </div>
                        <div className={styles.info_contents}>
                            <div>
                                <h4 className={styles.info_brand_name}>
                                    {brand}
                                </h4>
                                <p className={styles.info_item_name}>{name}</p>
                            </div>
                            <div>
                                <span className={styles.info_price}>
                                    {formattedPrice}원
                                </span>
                                <span className={styles.info_price_s}>
                                    정가
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <button onClick={handleOnClick} className={styles.delete_btn}>
                <HiXMark color="#EB7EA2" size="18px" />
            </button>
        </>
    );
}
