import React from "react";
import projectsData from "/data/projects.json";

function ProjectsSection() {
    // Trier les projets par date dans l'ordre décroissant
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
            <section className="PS fc g1">
                <h2>Projets</h2>
                <ul>
                    {sortedProjects.map(project => (
                        // on click, redirect to page /projects/:id
                        <li key={project.id} className="PS_card" >
                            <a href={`/projects/${project.id}`}>
                                <img src={project.image} alt={project.name} />
                                <div className={"content"}>
                                    <h3>{project.name}</h3>
                                    <span>{project.date}</span>
                                    <p>{project.description}</p>
                                </div>
                            </a>

                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default ProjectsSection;
