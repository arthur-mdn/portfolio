import React from "react";
import projectsData from "/data/projects.json";
import {FaExternalLinkAlt} from "react-icons/fa";
import {FaArrowRightLong, FaEye} from "react-icons/fa6";
import Carousel from 'better-react-carousel'

function ProjectsSection() {
    // Trier les projets par date dans l'ordre décroissant
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
            <section className="PS fc g1">
                <h2>Projets</h2>
                <Carousel showDots scrollSnap gap={10} rows={1} autoplay={3000} loop responsiveLayout={[
                    {
                        breakpoint: 2000,
                        cols: 5
                    },
                    {
                        breakpoint: 1000,
                        cols: 4
                    },
                    {
                        breakpoint: 800,
                        cols: 3
                    },
                    {
                        breakpoint: 500,
                        cols: 4
                    },
                    {
                        breakpoint: 150,
                        cols: 4
                    }

                ]} >
                    {sortedProjects.map(project => (
                        // on click, redirect to page /projects/:id
                        <Carousel.Item key={project.id} >
                            <a href={`/projects/${project.id}`} className="PS_card">
                                <img src={project.image} alt={project.name} />
                                <div className={"content"}>
                                    <p>{project.type}</p>
                                    <span>{project.date}</span>
                                    <h3>{project.name}</h3>
                                    <button type={"button"} className={"button"}><FaArrowRightLong/></button>
                                </div>
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <button type={"button"} className={"button"} style={{width:'fit-content',margin:'0.8rem auto 0'}} onClick={
                    () => window.location.href = '/projects'
                }><FaEye/>Voir tous les projets</button>
            </section>
        </>
    );
}

export default ProjectsSection;
