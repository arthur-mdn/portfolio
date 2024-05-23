import {FaDownload, FaEye} from "react-icons/fa6";
import Link from "next/link";
import projectsData from "../../data/projects.json";
import {useEffect} from "react";
import Image from "next/image";
function HeroSection() {

    useEffect(() => {
        const parallax = (e) => {
            const elem = document.querySelector(".HS_container");
            const _w = window.innerWidth / 2;
            const _h = window.innerHeight / 2;
            const _mouseX = e.clientX;
            const _mouseY = e.clientY;
            const _depth = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
            elem.style.backgroundPosition = _depth;
        };

        document.addEventListener("mousemove", parallax);

        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []);

    return (
        <>
            <section className={"HS"}>
                <div className={"HS_container"}>
                    <div className={"HS_content"}>
                        <h1 className={"HS_title"}>Portfolio d&apos;Arthur Mondon.</h1>
                        <Image src={"/illustrations/memoji2.png"} alt={"avatar"} className={"hide_desktop"} width={200} height={260} style={{margin: "auto", objectFit:"contain"}}/>
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
                    <Image src={"/illustrations/memoji2.png"} alt={"avatar"} className={"hide_mobile"} width={200} height={260} style={{margin: "auto", objectFit:"contain"}}/>
                    <ul className={"HS_extra"}>
                        <div className="HS_extra_blur"></div>
                        <li>
                            <p>Projets terminés</p>
                            <h4>{Object.keys(projectsData).length + 1}</h4>
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
