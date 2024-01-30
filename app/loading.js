export default function Loading({ style }) {
    return (
        <section className={`loading_section ${style ? style : "common"}`}>
            <div className="loading_container">
                <div className="loading_drop"></div>
                <div className="loading_drop"></div>
                <div className="loading_drop"></div>
            </div>
            <h2 className="loading_txt">Loading...</h2>
        </section>
    );
}
