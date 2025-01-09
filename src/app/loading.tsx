interface LoadingProps {
    style: string;
    result: string;
}

export default function Loading({ style, result }: LoadingProps) {
    return (
        <section className={`loading_section ${style ? style : "common"}`}>
            <div className="loading_container">
                <div className="loading_drop"></div>
                <div className="loading_drop"></div>
                <div className="loading_drop"></div>
            </div>
            <h2 className="loading_txt">Loading...</h2>
            {result ? (
                <p className="loading_txt_result">초콜릿을 찾고 있어요🍫</p>
            ) : (
                ""
            )}
        </section>
    );
}
