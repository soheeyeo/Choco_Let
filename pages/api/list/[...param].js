import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const params = req.query.param;
    if (params[0] === "price") {
        if (params[1] === "1") {
            const result = await prisma.chocolate.findMany({
                where: {
                    price: {
                        lte: 10000,
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "2") {
            const result = await prisma.chocolate.findMany({
                where: {
                    price: {
                        gte: 10000,
                        lt: 20000,
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "3") {
            const result = await prisma.chocolate.findMany({
                where: {
                    price: {
                        gte: 20000,
                        lt: 40000,
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "4") {
            const result = await prisma.chocolate.findMany({
                where: {
                    price: {
                        gte: 40000,
                        lt: 60000,
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "5") {
            const result = await prisma.chocolate.findMany({
                where: {
                    price: {
                        gte: 60000,
                    },
                },
            });
            return res.status(200).json(result);
        }
    } else if (params[0] === "country") {
        if (params[1] === "1") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["벨기에", "이탈리아"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "2") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["독일", "스위스"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "3") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["미국", "영국"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "4") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: "대한민국",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "5") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        notIn: [
                            "벨기에",
                            "이탈리아",
                            "독일",
                            "스위스",
                            "미국",
                            "영국",
                            "대한민국",
                        ],
                    },
                },
            });
            return res.status(200).json(result);
        }
    } else if (params[0] === "type") {
        if (params[1] === "1") {
            const result = await prisma.chocolate.findMany({
                where: {
                    type: "밀크",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "2") {
            const result = await prisma.chocolate.findMany({
                where: {
                    type: "다크",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "3") {
            const result = await prisma.chocolate.findMany({
                where: {
                    type: "화이트",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "4") {
            const result = await prisma.chocolate.findMany({
                where: {
                    type: "프랄린",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "5") {
            const result = await prisma.chocolate.findMany({
                where: {
                    type: {
                        notIn: ["밀크", "다크", "화이트", "프랄린"],
                    },
                },
            });
            return res.status(200).json(result);
        }
    } else if (params[0] === "country") {
        if (params[1] === "1") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["벨기에", "이탈리아"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "2") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["독일", "스위스"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "3") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        in: ["미국", "영국"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "4") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: "대한민국",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "5") {
            const result = await prisma.chocolate.findMany({
                where: {
                    country: {
                        notIn: [
                            "벨기에",
                            "이탈리아",
                            "독일",
                            "스위스",
                            "미국",
                            "영국",
                            "대한민국",
                        ],
                    },
                },
            });
            return res.status(200).json(result);
        }
    } else if (params[0] === "flavor") {
        if (params[1] === "1") {
            const result = await prisma.chocolate.findMany({
                where: {
                    flavor: {
                        in: [
                            "아몬드",
                            "헤이즐넛",
                            "마카다미아",
                            "피넛",
                            "피스타치오",
                            "견과",
                        ],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "2") {
            const result = await prisma.chocolate.findMany({
                where: {
                    flavor: {
                        in: ["카라멜", "토피넛", "누가"],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "3") {
            const result = await prisma.chocolate.findMany({
                where: {
                    flavor: {
                        in: [
                            "딸기",
                            "배",
                            "요거트",
                            "비스킷",
                            "콘플레이크",
                            "쿠키",
                            "오레오",
                        ],
                    },
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "4") {
            const result = await prisma.chocolate.findMany({
                where: {
                    flavor: "믹스",
                },
            });
            return res.status(200).json(result);
        } else if (params[1] === "5") {
            const result = await prisma.chocolate.findMany({
                where: {
                    flavor: {
                        notIn: [
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
                    },
                },
            });
            return res.status(200).json(result);
        }
    }
}
