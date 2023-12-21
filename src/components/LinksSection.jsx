import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa6";

function LinksSection() {

    return (
        <>
            <section className="LS fc g1">
                <h2 className={"s-font"}>Liens</h2>
                <div className={"fr g1"}>
                    <a href={"https://www.linkedin.com/in/arthur-mondon-25147b21b/"} className={"button linkedin"}>
                        <FaLinkedin style={{fontSize:'1.2rem'}}/>
                        LinkedIn
                    </a>
                    <a href={"https://github.com/arthur-mdn"} className={"button github"}>
                        <FaGithub style={{fontSize:'1.2rem'}}/>
                        Github
                    </a>
                </div>
            </section>
        </>
    );
}

export default LinksSection;
