// pages/not-found.js
export default function Custom404() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <section>
            <div className={"fc f-c ai-c g2"}>
                <h1 style={{textAlign: "center"}}>
                    404 - Page introuvable
                </h1>
                <img src="/others/404.svg" alt="404" style={{width: "80%", maxWidth: "300px"}}/>
                <button type={"button"} onClick={goBack} className={"button skew"}>Retour</button>
            </div>
            <br/>
            <br/>
        </section>
    );
}
