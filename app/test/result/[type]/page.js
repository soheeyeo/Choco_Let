import styles from "../../test.module.css";
import testData from "@/util/testData";
import Content from "./Content";

export const metadata = {
    description: "초콜릿 추천 테스트 결과",
    openGraph: {
        description: "초콜릿 추천 테스트 결과",
    },
};

async function getData(resultItem) {
    const res = await fetch(`${process.env.URL}/api/result`, {
        method: "POST",
        body: JSON.stringify(resultItem.name),
    });
    const result = await res.json();
    return result;
}

export default async function Result({ params: { type } }) {
    const testResult = testData.result;
    const resultItem = testResult.find((data) => {
        if (Array.isArray(data.type)) {
            return data.type.includes(type);
        } else {
            return data.type === type;
        }
    });

    const item = await getData(resultItem);

    return (
        <main className={styles.result_main}>
            <Content styles={styles} item={item} />
        </main>
    );
}
