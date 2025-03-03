import { useState, useRef, useEffect, useCallback } from "react";

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

    // 버튼 외부 클릭 시 드롭다운 닫기
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
    }, []);

    // 버튼 클릭 시 열림/닫힘 상태 토글
    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    // 옵션 선택 시 상태 업데이트 후 드롭다운 닫기
    const handleSelect = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            setSelected((e.target as HTMLButtonElement).textContent || "");
            setIsOpen(false);
        },
        [selected]
    );

    const sortOption = ["추천순", "브랜드명순", "낮은가격순", "높은가격순"];

    return (
        <div className={styles.dropdown} ref={dropDownRef}>
            <button className={styles.dropdown_btn} onClick={handleToggle}>
                {selected}
                <span className={styles.icon}></span>
            </button>
            <ul
                className={`${styles.dropdown_li} ${
                    isOpen ? "" : styles.close
                }`}
            >
                {sortOption.map((option) => {
                    return (
                        <li key={option}>
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
