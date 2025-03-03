import Link from "next/link";
import {
    priceCategory,
    countryCategory,
    typeCategory,
    flavorCategory,
} from "@/constants/constants";

interface NavListProps {
    styles: Record<string, string>;
    category: string;
    listId: string;
}

export default function NavList({ styles, category, listId }: NavListProps) {
    // 카테고리별 리스트 정의
    const categoryMap: Record<string, string[]> = {
        price: priceCategory,
        country: countryCategory,
        type: typeCategory,
        flavor: flavorCategory,
    };

    const listItemCategory = categoryMap[category] || [];

    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav_li}>
                {listItemCategory.map((a, i) => {
                    return (
                        <Link
                            href={`/list/${category}/${i + 1}`}
                            className={`${styles.nav_btn} ${
                                parseInt(listId) == i + 1 ? styles.active : ""
                            }`}
                            key={i}
                        >
                            {a}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
