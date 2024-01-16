import React from "react";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {FaArrowRightLong, FaEye, FaTriangleExclamation} from "react-icons/fa6";

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
                                {
                                    project.disclaimer && (
                                        <div className={"PP_disclaimer fr g1 ai-c"}  style={{position:"absolute",left:0,top:0, margin:'1rem',padding:'0.5rem 0.5rem', borderRadius:'0.5rem'}} title={"Une attention particulière est requise pour ce projet"}>
                                            <FaTriangleExclamation size={"2rem"}/>
                                        </div>
                                    )
                                }
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
