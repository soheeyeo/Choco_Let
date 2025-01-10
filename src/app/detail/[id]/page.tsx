import Content from "./Content";

interface DetailParams {
    id: string | number;
}

export async function generateMetadata({ params }: { params: DetailParams }) {
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

export default async function Detail({ params }: { params: DetailParams }) {
    const item = await getData(params.id as number);

    return (
        <main>
            <Content item={item} />
        </main>
    );
}
