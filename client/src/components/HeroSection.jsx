import React from "react";
import {FaDownload, FaEye} from "react-icons/fa6";

function HeroSection() {
    return (
        <>
            <section className={"HS"}>
                <div className={"HS_content"}>
                    <h1 className={"HS_title"}>Transformez vos idées en solutions web.</h1>
                    <p className={"HS_txt"}>
                        Exploitez le plein potentiel du web avec des solutions sur mesure, conçues pour réussir.
                    </p>
                    <div className={'HS_btns'}>
                        <button className={"button special_button"}>
                            <FaDownload/>
                            Télécharger le CV
                        </button>
                        <button className={"button contact"}>
                            <FaEye/>
                            Projets récents
                        </button>
                    </div>
                </div>
                <img src={"illustrations/memoji2.png"} alt={"avatar"}/>
                <ul className={"HS_extra"}>
                    <li>
                        <p>Projets terminés</p>
                        <h4>62 </h4>
                    </li>
                    <li>
                        <p>Taux de satisfaction</p>
                        <h4>100%</h4>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default HeroSection;
