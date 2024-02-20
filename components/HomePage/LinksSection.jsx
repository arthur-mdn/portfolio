import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa6";
import Link from "next/link";

function LinksSection() {

    return (
        <>
            <br/>
            <section className="LS fc g1">
                <h2 className={"s-font"}>Liens</h2>
                <div className={"AS_card grey"}>
                    <p>
                        Vous êtes curieux d&apos;en savoir plus sur mon parcours et mes réalisations ? Je vous invite à me suivre et à vous connecter avec moi sur LinkedIn, où je partage des anecdotes sur mes projets et les tendances du développement web. Découvrez également mes contributions et projets open-source sur GitHub, témoignant de ma passion pour la collaboration et le partage de connaissances dans la communauté des développeurs. Et pour un aperçu plus visuel et interactif de mon travail, n&apos;hésitez pas à consulter ma chaîne YouTube, où je publie des vidéos démontrant mes compétences en action. Rejoignez-moi dans cette aventure numérique et ensemble, explorons les possibilités infinies de la technologie.
                    </p>
                </div>
                        <div className={"fr g1"}>
                    <Link href={"https://www.linkedin.com/in/arthur-mondon-25147b21b/"} target={"_blank"}
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
                </div>
            </section>
        </>
    );
}

export default LinksSection;
