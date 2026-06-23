import { Prisma } from "@prisma/client";
import { getItems } from "./getItems";

const priceRanges: Prisma.IntFilter[] = [
    { lte: 10000 },
    { gte: 10000, lt: 20000 },
    { gte: 20000, lt: 40000 },
    { gte: 40000, lt: 60000 },
    { gte: 60000 },
];

const countryGroups: (string | string[])[] = [
    ["벨기에", "이탈리아"],
    ["독일", "스위스"],
    ["미국", "영국"],
    "대한민국",
    ["벨기에", "이탈리아", "독일", "스위스", "미국", "영국", "대한민국"],
];

const typeList = ["밀크", "다크", "화이트", "프랄린"];

const flavorGroups: (string | string[])[] = [
    ["아몬드", "헤이즐넛", "마카다미아", "피넛", "피스타치오", "견과"],
    ["카라멜", "토피넛", "누가"],
    ["딸기", "배", "요거트", "비스킷", "콘플레이크", "쿠키", "오레오"],
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

// '5'번 인덱스는 마지막 그룹을 "그 외(notIn)"로 해석하는 규칙
const buildGroupFilter = (
    group: string | string[],
    listId: string
): Prisma.StringFilter | string => {
    if (!Array.isArray(group)) return group;
    return listId === "5" ? { notIn: group } : { in: group };
};

export async function getListItems(category: string, listId: string) {
    const listIndex = Number(listId) - 1;
    if (Number.isNaN(listIndex) || listIndex < 0) return null;

    switch (category) {
        case "price": {
            if (listIndex >= priceRanges.length) return null;
            return getItems({ price: priceRanges[listIndex] });
        }
        case "country": {
            if (listIndex >= countryGroups.length) return null;
            return getItems({
                country: buildGroupFilter(countryGroups[listIndex], listId),
            });
        }
        case "type": {
            if (listIndex > typeList.length) return null;
            return getItems({
                type:
                    listId === "5"
                        ? { notIn: typeList }
                        : typeList[listIndex],
            });
        }
        case "flavor": {
            if (listIndex >= flavorGroups.length) return null;
            return getItems({
                flavor: buildGroupFilter(flavorGroups[listIndex], listId),
            });
        }
        default:
            return null;
    }
}
