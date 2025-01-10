import Content from "./Content";

interface Params {
    id: string | number;
}

export async function generateMetadata({ params }: { params: Params }) {
    const id = params.id;
    const item = await fetch(`${process.env.URL}/api/detail?id=${id}`).then(
        (res) => res.json()
    );

    return {
        description: `${item.brand}-${item.name} 상세 정보`,
        openGraph: {
            description: `${item.brand}-${item.name} 상세 정보`,
        },
    };
}

async function getData(id: number) {
    const res = await fetch(`${process.env.URL}/api/detail?id=${id}`, {
        cache: "no-store",
    });
    const result = await res.json();
    return result;
}

export default async function Detail({ params }: { params: Params }) {
    const item = await getData(params.id as number);

    return (
        <main>
            <Content item={item} />
        </main>
    );
}
