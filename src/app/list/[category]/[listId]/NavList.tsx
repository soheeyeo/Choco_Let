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
    let list_item_category = [];

    if (category === "price") {
        list_item_category = priceCategory;
    } else if (category === "country") {
        list_item_category = countryCategory;
    } else if (category === "type") {
        list_item_category = typeCategory;
    } else {
        list_item_category = flavorCategory;
    }

    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav_li}>
                {list_item_category.map((a, i) => {
                    return (
                        <Link
                            href={`/list/${category}/${i + 1}`}
                            className={`${styles.nav_btn} ${
                                Number(listId) == i + 1 ? styles.active : ""
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
