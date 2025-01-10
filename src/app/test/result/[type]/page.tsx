import styles from "../../test.module.css";
import testData from "@/util/testData.json";
import Content from "./Content";

interface ResultProps {
    type: string;
}

interface ResultItem {
    type: string | string[];
    name: string;
}

export const metadata = {
    description: "초콜릿 추천 테스트 결과",
    openGraph: {
        description: "초콜릿 추천 테스트 결과",
    },
};

async function getData(resultItem: ResultItem) {
    const res = await fetch(`${process.env.URL}/api/result`, {
        method: "POST",
        body: JSON.stringify(resultItem.name),
    });
    const result = await res.json();
    return result;
}

export default async function Result({ params }: { params: ResultProps }) {
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

    console.log(resultItem);

    const item = await getData(resultItem);

    return (
        <main className={styles.result_main}>
            <Content styles={styles} item={item} />
        </main>
    );
}
