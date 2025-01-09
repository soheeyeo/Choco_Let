import { useState, useRef, useEffect } from "react";

export default function DropdownBtn({ styles, selected, setSelected }) {
    const dropDownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleOutside(e) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [dropDownRef]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (e) => {
        setSelected(e.target.innerText);
        setIsOpen(false);
    };

    const sortOption = ["추천순", "브랜드명순", "낮은가격순", "높은가격순"];

    return (
        <div className={styles.dropdown} ref={dropDownRef}>
            <button className={styles.dropdown_btn} onClick={handleToggle}>
                {selected}
                <span className={styles.icon}></span>
            </button>
            <ul
                className={`${styles.dropdown_li} ${isOpen ? styles.open : ""}`}
            >
                {sortOption.map((option, i) => {
                    return (
                        <li key={i}>
                            <button
                                className={styles.dropdown_item}
                                onClick={handleSelect}
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
