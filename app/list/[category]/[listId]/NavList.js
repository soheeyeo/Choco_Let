import Link from "next/link";
import { useState } from "react";

export default function NavList({ styles, category }) {
    const [selecte, setSelected] = useState("");

    return (
        <div className={styles.nav_container}>
            <nav className={styles.nav_li}>
                <Link
                    href={`/list/${category}/1`}
                    className={`${styles.nav_btn} ${styles.active}`}
                ></Link>
                <Link
                    href={`/list/${category}/2`}
                    className={styles.nav_btn}
                ></Link>
                <Link
                    href={`/list/${category}/3`}
                    className={styles.nav_btn}
                ></Link>
                <Link
                    href={`/list/${category}/4`}
                    className={styles.nav_btn}
                ></Link>
                <Link
                    href={`/list/${category}/5`}
                    className={styles.nav_btn}
                ></Link>
            </nav>
        </div>
    );
}
