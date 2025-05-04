import styles from "../../test.module.css";
import testData from "@/util/testData.json";
import Content from "./Content";
import { fetchData } from "@/data/fetchData";

interface ResultProps {
    type: string;
}

export const metadata = {
    description: "초콜릿 추천 테스트 결과",
    openGraph: {
        description: "초콜릿 추천 테스트 결과",
    },
};

export default async function Result({ params }: { params: ResultProps }) {
    // testData에서 결과 항목 가져온 후 URL 파라미터와 일치하는 결과 항목 가져오기
    const testResult = testData.result;
    const resultItem = testResult.find((data) => {
        if (Array.isArray(data.type)) {
            return data.type.includes(params.type);
        } else {
            return data.type === params.type;
        }
    });

    if (!resultItem) {
        console.error("결과 항목이 없습니다.");
        return null;
    }

    // 테스트 결과 데이터 조회
    let item;
    try {
        item = await fetchData("POST", "result", resultItem.name);
    } catch (error) {
        console.error("fetchData 요청 실패:", error);
        return <p>결과 데이터를 불러오는 데 실패했습니다.</p>;
    }

    return (
        <main className={styles.result_main}>
            <Content styles={styles} item={item} />
        </main>
    );
}
