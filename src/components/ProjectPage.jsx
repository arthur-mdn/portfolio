import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import {FaBan, FaGithub, FaLink, FaArrowUp, FaArrowDown, FaExclamation, FaTriangleExclamation} from "react-icons/fa6";
import {Helmet} from "react-helmet";


function ProjectPage() {

    const { slug } = useParams();
    const project = projectsData.find(p => p.slug.toString() === slug);

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showToggleButton, setShowToggleButton] = useState(false);
    const descriptionRef = useRef(null);

    const checkDescriptionHeight = () => {
        if (descriptionRef.current.scrollHeight > 145) {
            setShowToggleButton(true);
        } else {
            setShowToggleButton(false);
        }
    };

    useEffect(() => {
        // Vérifie si la hauteur du contenu dépasse la hauteur maximale
        checkDescriptionHeight();
        const handleResize = () => {
            checkDescriptionHeight();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const projectSkills = project.technos.map(techId =>
        skillsData.flatMap(category => category.skills).find(skill => skill.id === techId)
    ).filter(Boolean); // Filtrer les undefined

    const hasLinks = project.github || project.link;
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };
    return (
        <section className="PP fc g2">
            <Helmet>
                <title>{project.name} - Arthur Mondon</title>
                {/*// meta description slice to 300 character max*/}
                <meta name="description" content={project.description.slice(0, 300)}/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={`https://mondon.pro/${project.slug}`}/>
                <meta property="og:title" content={`${project.name} - Arthur Mondon`}/>
                <meta property="og:description" content={project.description.slice(0, 300)}/>
                <meta property="og:image" content={`https://mondon.pro/ogs/${project.image}`}/>

                {/* Twitter Meta Tags */}
                <meta property="twitter:url" content={`https://mondon.pro/${project.slug}`}/>
                <meta name="twitter:title" content={`${project.name} - Arthur Mondon`}/>
                <meta name="twitter:description" content={project.description.slice(0, 300)}/>
                <meta name="twitter:image" content={`https://mondon.pro/ogs/${project.image}`}/>

            </Helmet>
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
                    {
                        project.disclaimer && (
                            <div className={"PP_disclaimer fr g1 ai-c"}>
                                <FaTriangleExclamation size={"6rem"}/>
                                <p dangerouslySetInnerHTML={{ __html: project.disclaimer }}></p>
                            </div>
                        )
                    }
                    <h4>Description</h4>
                    <p ref={descriptionRef} className={showFullDescription ? "full-description" : "truncated-description"}>
                        {project.description}
                    </p>

                    {showToggleButton && (
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
