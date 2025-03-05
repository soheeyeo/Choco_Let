import { Method } from "@/types/api";

const BASE_URL = process.env.URL;

export async function fetchData(
    method: Method,
    dataCategory: string,
    token?: string,
    body?: string
) {
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    // POST 메서드에서 body를 포함하고 있을 경우 추가
    if (method == "POST" && body) {
        options.body = JSON.stringify(body);
    }

    try {
        const res = await fetch(`${BASE_URL}/api/${dataCategory}`, options);

        const resData = await res.json();
        return resData;
    } catch (error) {
        console.error("Fetch Error", error);
        throw error;
    }
}
