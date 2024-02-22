import {FaDownload, FaEye} from "react-icons/fa6";
import Link from "next/link";

function HeroSection() {
    return (
        <>
            <section className={"HS"}>
                <div className={"HS_container"}>
                    <div className={"HS_content"}>
                        <h1 className={"HS_title"}>Portfolio d&apos;Arthur Mondon.</h1>
                        <img src={"/illustrations/memoji2.png"} alt={"avatar"} className={"hide_desktop"}
                             style={{margin: "auto"}}/>
                        <p className={"HS_txt"}>
                            Transformez vos idées en solutions web.
                            Exploitez le plein potentiel du web avec des solutions sur mesure, conçues pour réussir.
                        </p>
                        <div className={'HS_btns'}>
                            <Link
                                href="/others/CV_Arthur_Mondon_2024.pdf"
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                download
                                className={"button special_button s-font lh1"}
                                style={{color: 'white'}}
                            >
                                <FaDownload/>
                                Télécharger le CV
                            </Link>
                            <Link className={"button contact s-font lh1"} href="/projets">
                                <FaEye/>
                                Projets réalisés
                            </Link>
                        </div>
                    </div>
                    <img src={"/illustrations/memoji2.png"} alt={"avatar"} className={"hide_mobile"}/>
                    <ul className={"HS_extra"}>
                        <div className="HS_extra_blur"></div>
                        <li>
                            <p>Projets terminés</p>
                            <h4>28</h4>
                        </li>
                        <li>
                            <p>Taux de satisfaction</p>
                            <h4>100%</h4>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
}

export default HeroSection;
