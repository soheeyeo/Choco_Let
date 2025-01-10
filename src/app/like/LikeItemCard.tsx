import { Chocolate } from "@prisma/client";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";

interface LikeItemCardProps {
    chocolate: Chocolate;
    styles: Record<string, string>;
    id: number;
}

export default function LikeItemCard({
    chocolate,
    styles,
    id,
}: LikeItemCardProps) {
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

    const formattedPrice = chocolate.price.toLocaleString();

    return (
        <>
            <Link href={"/detail/" + chocolate.id}>
                <div className={styles.item_card}>
                    <div className={styles.img_wrapper}>
                        <img
                            className={styles.item_img}
                            src={chocolate.image}
                        />
                    </div>
                    <div className={styles.info_container}>
                        <div className={styles.btn_container}>
                            <div className={styles.feature_box}>
                                <p>{chocolate.country}</p>
                            </div>
                        </div>
                        <div className={styles.info_contents}>
                            <div>
                                <h4 className={styles.info_brand_name}>
                                    {chocolate.brand}
                                </h4>
                                <p className={styles.info_item_name}>
                                    {chocolate.name}
                                </p>
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
