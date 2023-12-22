import React from "react";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {FaArrowRightLong, FaEye} from "react-icons/fa6";

function ProjectsPage() {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };
    return (
        <>
            <section className="PsP fc g1">
                <h2 className={"s-font"}>Projets</h2>
                <div className={"fr fw-w"}>
                    {projectsData.sort((b, a) => a.date.localeCompare(b.date)).map(project => (
                        <Link to={`/projet/${project.slug}`} style={{width:'100%'}} className="PS_card" key={project.id} >
                            <img src={`/${project.image}`} alt={project.name} />
                            <div className="content">
                                <p>{project.type}</p>
                                <span>{formatDate(project.date)}</span>
                                <h3>{project.name}</h3>
                                <button type="button" className="button"><FaArrowRightLong/></button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectsPage;
