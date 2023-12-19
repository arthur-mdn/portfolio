import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "/data/projects.json";
import {FaBan, FaGithub, FaLink} from "react-icons/fa6";

function ProjectPage() {

    const { slug } = useParams();
    const project = projectsData.find(p => p.slug.toString() === slug);

    if (!project) {
        return <div>Projet introuvable</div>;
    }


    const hasLinks = project.github || project.link;

    return (
        <section className="PP fr g2">

            <img src={`/${project.image}`} alt={project.name} />
            <div className={"PP_content"}>
                <div className={"PP_title_date_type"}>
                    <h1>{project.name}</h1>
                    <span style={{color:"green", fontWeight:"bold"}}>{project.date}</span>
                    <h3>{project.type}</h3>
                </div>


                <div>
                    <h4>Description</h4>
                    <p>{project.description}</p>
                </div>
                <div>
                    <h4>Technologies utilisées</h4>
                    <div className={"fr g0-5"}>
                        {project.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4>Liens associés</h4>
                    <div className={"fr g0-5"}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={"button github"}>
                                <FaGithub />
                                Github
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={"button linkedin"}>
                                <FaLink />
                                Lien
                            </a>
                        )}
                        {!hasLinks && <p className={"fr ai-c g0-5"} style={{color:"red", fontWeight:"bold"}}><FaBan/> Aucun lien public disponible.</p>}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ProjectPage;
