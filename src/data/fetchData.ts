import { Method } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchData(
    method: Method,
    dataCategory: string,
    body?: Record<string, any> | string | number
) {
    // fetch 요청 옵션 객체
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    // POST 메서드에서 body를 포함하고 있을 경우 추가
    if ((method == "POST" || "DELETE") && body) {
        options.body = JSON.stringify(body);
    }

    try {
        const res = await fetch(`${BASE_URL}/api/${dataCategory}`, options);

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }

        const resData = await res.json();
        return resData;
    } catch (error) {
        console.error("Fetch Error", error);
        throw error;
    }
}
