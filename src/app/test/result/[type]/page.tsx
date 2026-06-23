import styles from "../../test.module.css";
import testData from "@/util/testData.json";
import { getItemByName } from "@/lib/getItems";
import Content from "./Content";

interface ResultProps {
    type: string;
}

export const metadata = {
    description: "초콜릿 추천 테스트 결과",
    openGraph: {
        description: "초콜릿 추천 테스트 결과",
    },
};

export default async function Result({
    params,
}: {
    params: Promise<ResultProps>;
}) {
    // testData에서 결과 항목 가져온 후 URL 파라미터와 일치하는 결과 항목 가져오기
    const { type } = await params;
    const testResult = testData.result;
    const resultItem = testResult.find((data) => {
        if (Array.isArray(data.type)) {
            return data.type.includes(type);
        } else {
            return data.type === type;
        }
    });

    if (!resultItem) {
        console.error("결과 항목이 없습니다.");
        return null;
    }

    const item = await getItemByName(resultItem.name);

    if (!item) {
        return <p>결과 데이터를 불러오는 데 실패했습니다.</p>;
    }

    return (
        <main className={styles.result_main}>
            <Content styles={styles} item={item} />
        </main>
    );
}
