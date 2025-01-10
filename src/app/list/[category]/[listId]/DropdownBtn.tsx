import { useState, useRef, useEffect } from "react";

interface ContentProps {
    styles: Record<string, string>;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropdownBtn({
    styles,
    selected,
    setSelected,
}: ContentProps) {
    const dropDownRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target as Node)
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
    const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSelected((e.target as HTMLButtonElement).textContent || "");
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
