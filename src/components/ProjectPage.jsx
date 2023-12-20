import React, {useState} from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import { FaBan, FaGithub, FaLink, FaArrowUp, FaArrowDown } from "react-icons/fa6";


function ProjectPage() {

    const { slug } = useParams();
    const project = projectsData.find(p => p.slug.toString() === slug);

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    const [showFullDescription, setShowFullDescription] = useState(false);
    const truncateDescription = (description) => {
        if (description.length > 300 && !showFullDescription) {
            return description.substring(0, 300) + '...';
        }
        return description;
    };

    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const projectSkills = project.technos.map(techId =>
        skillsData.flatMap(category => category.skills).find(skill => skill.id === techId)
    ).filter(Boolean); // Filtrer les undefined

    console.log(projectSkills)
    const hasLinks = project.github || project.link;
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };
    return (
        <section className="PP fc g2">
            <div className={"PP_img"}>

                <img src={`/${project.image}`} alt={project.name}  onClick={handleImageClick} className={isImageExpanded ? " expanded" : "PP_img"}/>
                <div className={"indicator"}>
                    {isImageExpanded ? <FaArrowUp /> : <FaArrowDown />}
                </div>
            </div>
            <div className={"PP_content"}>
                <div className={"PP_title_date_type"}>
                    <h1>{project.name}</h1>
                    <span style={{color:"green", fontWeight:"bold"}}>{formatDate(project.date)}</span>
                    <h3>{project.type}</h3>
                </div>


                <div>
                    <h4>Description</h4>
                    <p>{truncateDescription(project.description)}</p>
                    {project.description.length > 300 && (
                        <button onClick={() => setShowFullDescription(!showFullDescription)} className={"see_more"}>
                            {showFullDescription ? "Voir moins" : "Voir plus"}
                        </button>
                    )}
                </div>
                <div>
                    <h4>Technologies utilisées</h4>
                    <div className={"fr g0-5 PP_technos"} >
                        {projectSkills.map((skill, index) => (
                            <div key={index}>
                                <img src={`/${skill.links[0].url}`} alt={skill.name} />
                                <span key={index}>{skill.name}</span>
                            </div>
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
