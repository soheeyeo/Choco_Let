import styles from "./list.module.css";
import NavList from "./NavList";
import Content from "./Content";
import { fetchData } from "@/data/fetchData";
import { notFound } from "next/navigation";

interface ListParams {
    category: string;
    listId: string;
}

export function generateMetadata({ params }: { params: ListParams }) {
    const category = params.category;

    if (category === "price") {
        return {
            description: "가격대별 초콜릿 조회",
            openGraph: {
                description: "가격대별 초콜릿 조회",
            },
        };
    } else if (category === "country") {
        return {
            description: "나라별 초콜릿 조회",
            openGraph: {
                description: "나라별 초콜릿 조회",
            },
        };
    } else if (category === "type") {
        return {
            description: "종류별 초콜릿 조회",
            openGraph: {
                description: "종류별 초콜릿 조회",
            },
        };
    } else if (category === "flavor") {
        return {
            description: "맛별 초콜릿 조회",
            openGraph: {
                description: "맛별 초콜릿 조회",
            },
        };
    }

    return {
        description: "초콜릿 목록",
        openGraph: {
            description: "초콜릿 목록 조회",
        },
    };
}

export default async function List({ params }: { params: ListParams }) {
    // 초콜릿 데이터 조회
    let itemList;
    try {
        itemList = await fetchData(
            "GET",
            `list/${params.category}/${params.listId}`
        );
    } catch (error) {
        console.error("리스트 데이터 요청 실패:", error);
        itemList = null;
    }

    if (!itemList) {
        notFound();
    }

    return (
        <main>
            <section className={styles.list_section}>
                <NavList
                    styles={styles}
                    category={params.category}
                    listId={params.listId}
                />
                <Content itemList={itemList} styles={styles} />
            </section>
        </main>
    );
}
