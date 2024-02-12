import Content from "./content";

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
