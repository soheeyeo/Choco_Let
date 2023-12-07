export default function DropdownBtn({ styles }) {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdown_btn}>
                추천순
                <span className={styles.icon}></span>
            </button>
            <ul className={styles.dropdown_li}>
                <li>
                    <button className={styles.dropdown_item}>추천순</button>
                </li>
                <li>
                    <button className={styles.dropdown_item}>가나다순</button>
                </li>
                <li>
                    <button className={styles.dropdown_item}>낮은가격순</button>
                </li>
                <li>
                    <button className={styles.dropdown_item}>높은가격순</button>
                </li>
            </ul>
        </div>
    );
}
