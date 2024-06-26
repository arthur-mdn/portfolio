import {FaDownload, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa6";
import Link from "next/link";

function LinksSection() {

    return (
        <>
            <br/>
            <section className="LS fc g1">
                <h2 className={"s-font"}>Liens</h2>
                <div className={"AS_card grey"}>
                    <p>
                        Envie de creuser un peu plus qui je suis et ce que je fais ? Suivez-moi sur LinkedIn pour des insights de mes projets, jetez un œil à mes projets sur GitHub, et plongez dans mon univers créatif sur YouTube. Vous pouvez également télécharger mon CV pour le consulter plus tard.
                    </p>
                </div>
                <div className={"fr g1 fw-w"}>
                    <Link href={"https://www.linkedin.com/in/arthurmondon/"} target={"_blank"}
                          className={"button linkedin"}>
                        <FaLinkedin style={{fontSize: '1.2rem'}}/>
                        LinkedIn
                    </Link>
                    <Link href={"https://github.com/arthur-mdn"} target={"_blank"} className={"button github"}>
                        <FaGithub style={{fontSize: '1.2rem'}}/>
                        Github
                    </Link>
                    <Link href={"https://www.youtube.com/@arthurmdn"} target={"_blank"} className={"button youtube"}>
                        <FaYoutube style={{fontSize: '1.2rem'}}/>
                        YouTube
                    </Link>
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
                </div>
            </section>
        </>
    );
}

export default LinksSection;
