import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa6";
import Link from "next/link";
function LinksSection() {

    return (
        <>
            <section className="LS fc g1">
                <h2 className={"s-font"}>Liens</h2>
                <div className={"fr g1"}>
                    <Link href={"https://www.linkedin.com/in/arthur-mondon-25147b21b/"} target={"_blank"} className={"button linkedin"}>
                        <FaLinkedin style={{fontSize:'1.2rem'}}/>
                        LinkedIn
                    </Link>
                    <Link href={"https://github.com/arthur-mdn"} target={"_blank"} className={"button github"}>
                        <FaGithub style={{fontSize:'1.2rem'}}/>
                        Github
                    </Link>
                    <Link href={"https://www.youtube.com/@arthurmdn"} target={"_blank"} className={"button youtube"}>
                        <FaYoutube style={{fontSize:'1.2rem'}}/>
                        YouTube
                    </Link>
                </div>
            </section>
        </>
    );
}

export default LinksSection;
