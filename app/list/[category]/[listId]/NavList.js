import Link from "next/link";

export default function NavList({ styles }) {
    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav_li}>
                <Link
                    href={"/list/price/1"}
                    className={`${styles.nav_btn} ${styles.active}`}
                >
                    ~1만원
                </Link>
                <Link href={"/list/price/2"} className={styles.nav_btn}>
                    1만원대
                </Link>
                <Link href={"/list/price/3"} className={styles.nav_btn}>
                    2만원대
                </Link>
                <Link href={"/list/price/4"} className={styles.nav_btn}>
                    3만원대
                </Link>
                <Link href={"/list/price/5"} className={styles.nav_btn}>
                    4만원~
                </Link>
            </nav>
        </div>
    );
}
