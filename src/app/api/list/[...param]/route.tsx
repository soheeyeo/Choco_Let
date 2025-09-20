import { getItems } from "@/lib/getItems";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    param: string;
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<RouteParams> }
) {
    const { param } = await params;
    try {
        // params.param 값이 잘못된 경우 에러 반환
        if (!param || param.length < 2) {
            return NextResponse.json(
                { error: "잘못된 요청 형식입니다." },
                { status: 400 }
            );
        }

        // 파라미터를 category와 listId로 분리
        const [category, listId] = param;
        const listIndex = Number(listId) - 1;

        let result;

        switch (category) {
            // category가 price인 경우
            case "price":
                const priceList = [
                    { lte: 10000 },
                    {
                        gte: 10000,
                        lt: 20000,
                    },
                    {
                        gte: 20000,
                        lt: 40000,
                    },
                    {
                        gte: 40000,
                        lt: 60000,
                    },
                    {
                        gte: 60000,
                    },
                ];

                // 유효한 인덱스인 경우 해당 가격 조건으로 초콜릿 데이터 조회
                if (listIndex >= 0 && listIndex < priceList.length) {
                    const where = {
                        price: priceList[listIndex],
                    };
                    result = await getItems(where);
                }
                break;

            // category가 country인 경우
            case "country":
                const countryList = [
                    ["벨기에", "이탈리아"],
                    ["독일", "스위스"],
                    ["미국", "영국"],
                    "대한민국",
                    [
                        "벨기에",
                        "이탈리아",
                        "독일",
                        "스위스",
                        "미국",
                        "영국",
                        "대한민국",
                    ],
                ];

                // 유효한 인덱스인 경우 해당 국가명 조건으로 초콜릿 데이터 조회
                if (listIndex >= 0 && listIndex < countryList.length) {
                    const where = {
                        country: Array.isArray(countryList[listIndex])
                            ? listId === "5"
                                ? {
                                      notIn: countryList[listIndex],
                                  }
                                : { in: countryList[listIndex] }
                            : countryList[listIndex],
                    };
                    result = await getItems(where);
                }
                break;

            // category가 type인 경우
            case "type":
                const typeList = ["밀크", "다크", "화이트", "프랄린"];

                // 유효한 인덱스인 경우 해당 종류 조건으로 초콜릿 데이터 조회
                if (listIndex >= 0 && listIndex <= typeList.length) {
                    const where = {
                        type:
                            listId === "5"
                                ? { notIn: typeList }
                                : typeList[listIndex],
                    };
                    result = await getItems(where);
                }
                break;

            // category가 flavor인 경우
            case "flavor":
                const flavorList = [
                    [
                        "아몬드",
                        "헤이즐넛",
                        "마카다미아",
                        "피넛",
                        "피스타치오",
                        "견과",
                    ],
                    ["카라멜", "토피넛", "누가"],
                    [
                        "딸기",
                        "배",
                        "요거트",
                        "비스킷",
                        "콘플레이크",
                        "쿠키",
                        "오레오",
                    ],
                    "믹스",
                    [
                        "아몬드",
                        "헤이즐넛",
                        "마카다미아",
                        "피넛",
                        "피스타치오",
                        "견과",
                        "카라멜",
                        "토피넛",
                        "누가",
                        "딸기",
                        "배",
                        "요거트",
                        "비스킷",
                        "콘플레이크",
                        "쿠키",
                        "오레오",
                        "믹스",
                    ],
                ];

                // 유효한 인덱스인 경우 해당 맛 조건으로 초콜릿 데이터 조회
                if (listIndex >= 0 && listIndex < flavorList.length) {
                    const where = {
                        flavor: Array.isArray(flavorList[listIndex])
                            ? listId === "5"
                                ? {
                                      notIn: flavorList[listIndex],
                                  }
                                : { in: flavorList[listIndex] }
                            : flavorList[listIndex],
                    };
                    result = await getItems(where);
                }
                break;
        }

        // result가 없는 경우 예외처리
        if (!result) {
            return NextResponse.json(
                { error: "잘못된 값입니다." },
                { status: 400 }
            );
        }
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("error", error);
        throw new Error(
            "데이터 조회 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
    }
}
