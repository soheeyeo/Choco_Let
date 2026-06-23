import { getItemById } from "@/lib/getItems";
import { notFound } from "next/navigation";
import Content from "./Content";

interface DetailParams {
    id: string;
}

const parseId = (raw: string) => {
    const n = Number(raw);
    return Number.isInteger(n) ? n : null;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<DetailParams>;
}) {
    const { id } = await params;
    const parsed = parseId(id);
    const item = parsed === null ? null : await getItemById(parsed);

    if (!item) {
        return {
            description: "초콜릿 상세 정보",
            openGraph: { description: "초콜릿 상세 정보" },
        };
    }

    return {
        description: `${item.brand}-${item.name} 상세 정보`,
        openGraph: {
            description: `${item.brand}-${item.name} 상세 정보`,
        },
    };
}

export default async function Detail({
    params,
}: {
    params: Promise<DetailParams>;
}) {
    const { id } = await params;
    const parsed = parseId(id);
    const item = parsed === null ? null : await getItemById(parsed);

    if (!item) {
        notFound();
    }

    return (
        <main>
            <Content item={item} />
        </main>
    );
}
