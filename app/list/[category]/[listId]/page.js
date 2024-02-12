import styles from "./list.module.css";
import NavList from "./NavList";
import Content from "./content";

async function getData(category, listId) {
    const param1 = category;
    const param2 = listId;

    const res = await fetch(`${process.env.URL}/api/list/${param1}/${param2}`, {
        cache: "no-store",
    });
    const result = await res.json();
    return result;
}

export default async function List({ params: { category, listId } }) {
    const itemList = await getData(category, listId);

    return (
        <main>
            <section className={styles.list_section}>
                <NavList styles={styles} category={category} listId={listId} />
                <Content itemList={itemList} styles={styles} />
            </section>
        </main>
    );
}
