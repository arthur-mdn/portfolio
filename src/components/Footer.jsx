import {FaArrowRightLong, FaDownload, FaEye, FaLinkedin} from "react-icons/fa6";
import projectsData from "../data/projects.json";
import {Link} from "react-router-dom";
import React from "react";

function Footer() {

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <br/>
            <br/>
            <footer  style={{backgroundColor:"#004500", color:"white"}}>
                <section className={"FS"}>
                    <div className={"FS_container"}>
                        <div className={"FS_content"}>
                            <h2 className={"FS_title"}>Portfolio d'Arthur Mondon.</h2>
                            <p style={{color:"lightgrey"}}>Développeur web FullStack dans le Vaucluse (à Carpentras, Monteux, Aubignan et ses alentours).</p>
                            <br/>
                            <br/>
                            <div className={"fr g3"}>
                                {/*<div>*/}
                                {/*    <h3>Projets récents</h3>*/}
                                {/*    <div className={"fc g2"}>*/}
                                {/*        {projectsData.sort((b, a) => a.date.localeCompare(b.date)).slice(0, 2).map(project => (*/}
                                {/*            <Link to={`/projet/${project.slug}`} style={{width:'100%'}}  key={project.id} >*/}
                                {/*                <img src={`/${project.image}`} alt={project.name} style={{width:'50px'}}/>*/}
                                {/*                <p>{project.type}</p>*/}
                                {/*                <span>{formatDate(project.date)}</span>*/}
                                {/*                <h3>{project.name}</h3>*/}
                                {/*                <button type="button" className="button"><FaArrowRightLong/></button>*/}
                                {/*            </Link>*/}
                                {/*        ))}*/}
                                {/*        <Link to={"/projets"} className={"button"}>*/}
                                {/*            <FaEye/>*/}
                                {/*            Voir tous les projets*/}
                                {/*        </Link>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div>
                                    <h3>Ressources</h3>
                                    <br/>
                                    <div className={"fc g0-5"}>
                                        <a href={"/rgpd"}>
                                            RGPD
                                        </a>
                                        <a href={"/mentions-legales"}>
                                            Mentions légales
                                        </a>
                                        <a href={"/sitemap.xml"}>
                                            Sitemap
                                        </a>

                                    </div>
                                </div>
                                <div>
                                    <h3>Liens</h3>
                                    <br/>
                                    <div className={"fc g0-5"}>
                                        <a href={"https://www.linkedin.com/in/arthur-mondon-25147b21b/"}>
                                            LinkedIn
                                        </a>

                                        <a href={"https://github.com/arthur-mdn"}>
                                            Github
                                        </a>

                                        <a href={"/contact"}>
                                            Formulaire de Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        Copyright 2023 - Arthur Mondon
                    </p>
                </section>


            </footer>
        </>
    );
}

export default Footer;
