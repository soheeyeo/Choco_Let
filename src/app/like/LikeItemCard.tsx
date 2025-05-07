import { Chocolate } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";

interface LikeItemCardProps {
    chocolate: Chocolate;
    styles: Record<string, string>;
    handleOnClick: (id: number) => Promise<void>;
}

export default function LikeItemCard({
    chocolate,
    styles,
    handleOnClick,
}: LikeItemCardProps) {
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

            <button
                onClick={() => handleOnClick(chocolate.id)}
                className={styles.delete_btn}
                aria-label="삭제 버튼"
            >
                <HiXMark color="#EB7EA2" size="18px" />
            </button>
        </>
    );
}
