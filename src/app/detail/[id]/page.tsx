import { fetchData } from "@/data/fetchData";
import Content from "./Content";
import { notFound } from "next/navigation";

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

    if (!item) {
        notFound();
    }

    return (
        <main>
            <Content item={item} />
        </main>
    );
}
