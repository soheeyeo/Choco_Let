import { fetchData } from "@/data/fetchData";
import Content from "./Content";
import styles from "./detail.module.css";

interface DetailParams {
    id: string | number;
}

export async function generateMetadata({ params }: { params: DetailParams }) {
    try {
        const item = await fetchData("GET", `detail?id=${params.id}`);

        return {
            description: `${item.brand}-${item.name} 상세 정보`,
            openGraph: {
                description: `${item.brand}-${item.name} 상세 정보`,
            },
        };
    } catch (error) {
        console.error("메타데이터 fetch 실패:", error);
        return {
            description: "초콜릿 상세 정보",
            openGraph: {
                description: "초콜릿 상세 정보",
            },
        };
    }
}

export default async function Detail({ params }: { params: DetailParams }) {
    // 초콜릿 상세 정보 데이터 조회
    let item;
    try {
        item = await fetchData("GET", `detail?id=${params.id}`);
    } catch (error) {
        console.error("상세 데이터 요청 실패:", error);
        item = null;
    }

    return (
        <main>
            {item ? (
                <Content item={item} />
            ) : (
                <div className={styles.not_found_container}>
                    <p className={styles.not_found_message}>
                        해당 상품을 찾을 수 없습니다.
                    </p>
                </div>
            )}
        </main>
    );
}
