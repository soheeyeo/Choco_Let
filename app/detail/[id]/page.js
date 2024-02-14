import Content from "./Content";

export async function generateMetadata({ params }) {
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

async function getData(id) {
    const res = await fetch(`${process.env.URL}/api/detail?id=${id}`, {
        cache: "no-store",
    });
    const result = await res.json();
    return result;
}

export default async function Detail({ params: { id } }) {
    const item = await getData(id);

    return (
        <main>
            <Content item={item} />
        </main>
    );
}
