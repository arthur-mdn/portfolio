// pages/not-found.js
import Image from "next/image";
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
                <Image src={"/others/404.svg"} alt={"404"} width={300} height={300} style={{width:"100%"}}/>
                <button type={"button"} onClick={goBack} className={"button skew"}>Retour</button>
            </div>
            <br/>
            <br/>
        </section>
    );
}
