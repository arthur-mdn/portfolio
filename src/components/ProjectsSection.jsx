import React from "react";
import projectsData from "../data/projects.json";
import {FaExternalLinkAlt} from "react-icons/fa";
import {FaArrowRightLong, FaEye, FaListCheck} from "react-icons/fa6";
import {Link} from "react-router-dom";

function ProjectsSection() {
    // Trier les projets par date dans l'ordre décroissant
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
            <section className="PS fc g1">
                <h2>Projets</h2>

                    {sortedProjects.map(project => (
                        // on click, redirect to page /projects/:id
                        <div key={project.id} >
                            <Link to={`/projects/${project.slug}`} className="PS_card">
                                <img src={`/${project.image}`} alt={project.name} />
                                <div className={"content"}>
                                    <p>{project.type}</p>
                                    <span>{project.date}</span>
                                    <h3>{project.name}</h3>
                                    <button type={"button"} className={"button"}><FaArrowRightLong/></button>
                                </div>
                            </Link>
                        </div>
                    ))}
                <Link to="/projets" className={"button c-white"} style={{width:"fit-content",margin:'0.8rem auto'}}>
                    <FaEye/>Voir tous les projets
                </Link>

            </section>
        </>
    );
}

export default ProjectsSection;
