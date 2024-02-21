// /pages/projet/[slug].js
import React, {useEffect, useRef, useState} from "react";
import Head from "next/head";
import {useRouter} from 'next/router';
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";
import {FaBan, FaGithub, FaLink, FaArrowUp, FaArrowDown, FaExclamation, FaTriangleExclamation} from "react-icons/fa6";
import Link from "next/link";

export async function getStaticPaths() {
    const paths = projectsData.map(project => ({
        params: {slug: project.slug.toString()},
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const project = projectsData.find(p => p.slug === params.slug);
    if (!project) {
        return {notFound: true};
    }
    return {props: {project}};
}

function ProjectPage({project}) {
    const [showToggleButton, setShowToggleButton] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const descriptionRef = useRef(null);

    const checkDescriptionHeight = () => {
        if (descriptionRef.current && descriptionRef.current.scrollHeight > 145) {
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

    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const projectSkills = project.technos.map(techId =>
        skillsData.flatMap(category => category.skills).find(skill => skill.id === techId)
    ).filter(Boolean); // Filtrer les undefined

    const hasLinks = project.github || project.link || project.youtube;
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "CreativeWork",
        "name": project.name,
        "description": project.description,
        "url": `https://mondon.pro/projet/${project.slug}`,
        "image": `https://mondon.pro/${project.image}`,
        "dateCreated": project.date,
        "author": {
            "@type": "Person",
            "name": "Arthur Mondon",
            "url": "https://www.linkedin.com/in/arthur-mondon-25147b21b/",
            "image": "https://mondon.pro/others/profile.jpg"
        },
        "keywords": project.tags.join(", "),
        "genre": project.type,
        "inLanguage": "fr-FR",
        "isAccessibleForFree": "True",
        "hasPart": project.technos.map(techId => {
            const skill = skillsData.flatMap(category => category.skills).find(skill => skill.id === techId);
            return {
                "@type": "CreativeWork",
                "name": skill.name,
                "description": skill.description,
                "image": `https://mondon.pro/${skill.links[0].url}`
            };
        }),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mondon.pro/projet/${project.slug}`
        },
    };
    return (
        <>
            <Head>
                
                <link rel="icon" href="/others/favicon.ico"/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{project.name.trim()} - Arthur Mondon</title>
                {/*// meta description slice to 300 character max*/}
                <meta name="description" content={project.description.slice(0, 300)}/>
                <link rel={"canonical"} href={`https://mondon.pro/projet/${project.slug}`}/>
                {/* Facebook Meta Tags */}
                <meta property="og:url" content={`https://mondon.pro/${project.slug}`}/>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${project.name.trim()} - Arthur Mondon`}/>
                <meta property="og:description" content={project.description.slice(0, 300)}/>
                <meta property="og:image" content={`https://mondon.pro/ogs/${project.image}`}/>

                {/* Twitter Meta Tags */}
                <meta property="twitter:url" content={`https://mondon.pro/${project.slug}`}/>
                <meta name="twitter:title" content={`${project.name.trim()} - Arthur Mondon`}/>
                <meta property="twitter:type" content="article" />
                <meta name="twitter:description" content={project.description.slice(0, 300)}/>
                <meta name="twitter:image" content={`https://mondon.pro/ogs/${project.image}`}/>

            </Head>
            <section className="PP fc g2">
                <div className={"PP_img"}>

                    <img src={`/${project.image}`} alt={project.name} onClick={handleImageClick}
                         className={isImageExpanded ? " expanded" : "PP_img"}/>
                    <div className={"indicator"}>
                        {isImageExpanded ? <FaArrowUp/> : <FaArrowDown/>}
                    </div>
                </div>
                <div className={"PP_content"}>
                    <div className={"PP_title_date_type"}>
                        <h1>{project.name}</h1>
                        <span style={{color: "green", fontWeight: "bold"}}>{formatDate(project.date)}</span>
                        <h3>{project.type}</h3>
                    </div>


                    <div>
                        {
                            project.disclaimer && (
                                <div className={"PP_disclaimer fr g1 ai-c"}>
                                    <FaTriangleExclamation size={"6rem"}/>
                                    <p dangerouslySetInnerHTML={{__html: project.disclaimer}}></p>
                                </div>
                            )
                        }
                        <h4>Description</h4>
                        <p ref={descriptionRef}
                           className={showFullDescription ? "full-description" : "truncated-description"}>
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
                        <div className={"fr g0-5 PP_technos"}>
                            {projectSkills.map((skill, index) => (
                                <div key={index}>
                                    <img src={`/${skill.links[0].url}`} alt={skill.name}/>
                                    <span key={index}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4>Liens associés</h4>
                        <div className={"fr g0-5"}>
                            {project.github && (
                                <Link href={project.github} target="_blank" rel="noopener noreferrer"
                                      className={"button github"}>
                                    <FaGithub/>
                                    Github
                                </Link>
                            )}
                            {project.link && (
                                <Link href={project.link} target="_blank" rel="noopener noreferrer"
                                      className={"button linkedin"}>
                                    <FaLink/>
                                    Lien
                                </Link>
                            )}
                            {!hasLinks &&
                                <p className={"fr ai-c g0-5"} style={{color: "red", fontWeight: "bold"}}><FaBan/> Aucun
                                    lien public disponible.</p>}
                        </div>
                    </div>

                    {project.youtube.length > 0 && (
                        <div>
                            <h4>Vidéos associés</h4>
                            <div className={"fc g1 fw-w"}>
                                {project.youtube.map((video, index) => (
                                    <div key={index} className={"PP_video fc"}>
                                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                                            <p>{video.title}</p>
                                            <img src={video.image} alt={video.title} style={{
                                                width: '300px',
                                                aspectRatio: '16/9',
                                                objectFit: "cover",
                                                borderRadius: '0.5rem'
                                            }}/>
                                        </a>
                                    </div>
                                ))
                                }
                                {!hasLinks && <p className={"fr ai-c g0-5"} style={{color: "red", fontWeight: "bold"}}>
                                    <FaBan/> Aucun lien public disponible.</p>}
                            </div>
                        </div>
                    )}
                </div>

            </section>
        </>

    );
}

export default ProjectPage;
