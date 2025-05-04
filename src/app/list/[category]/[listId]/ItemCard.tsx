import Link from "next/link";
import LikeBtn from "@/components/button/LikeBtn";
import { Chocolate } from "@prisma/client";
import Image from "next/image";

interface ItemCardProps {
    styles: Record<string, string>;
    chocolate: Chocolate;
    liked: boolean;
}

export default function ItemCard({ styles, chocolate, liked }: ItemCardProps) {
    const formattedPrice = chocolate.price.toLocaleString();

    return (
        <>
            <Link href={"/detail/" + chocolate.id}>
                <div className={styles.item_card}>
                    <Image
                        width={190}
                        height={190}
                        src={chocolate.image}
                        className={styles.item_img}
                        alt={`${chocolate.name} 이미지`}
                    />
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
            <LikeBtn id={chocolate.id} styles={styles} liked={liked} />
        </>
    );
}
