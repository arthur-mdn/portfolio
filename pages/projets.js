// /pages/projets.js
import Head from 'next/head';
import projectsData from "../data/projects.json";
import Link from "next/link";
import {FaArrowRightLong, FaEye, FaTriangleExclamation} from "react-icons/fa6";

export default function Projets() {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel={"canonical"} href={"https://mondon.pro/projets"}/>
                <link rel="icon" href="/others/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Mes Projets</title>
                <meta name="description"
                      content="Découvrez mes projets, où je fusionne créativité et technologie pour développer des solutions web innovantes. Chaque projet est une fenêtre sur mon univers professionnel et mes compétences en développement web."/>
                <meta name="keywords"
                      content="Arthur Mondon, Projets, Développement Web, Solutions Innovantes, Technologie, Créativité, Portfolio"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro/projets"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Plongez dans Mes Projets : Arthur Mondon"/>
                <meta property="og:description"
                      content="Je vous invite à explorer mes projets, une combinaison de technologie et de créativité, reflétant ma passion pour le développement de solutions web uniques."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro/projets"/>
                <meta name="twitter:title" content="Arthur Mondon : Explorez Mes Projets"/>
                <meta name="twitter:description"
                      content="Je vous présente mes projets, où innovation et créativité se rencontrent pour créer des expériences web enrichissantes et mémorables."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>
            <section className="PsP fc g1">
                <h1 className={"s-font"}>Projets</h1>
                <div className={"fr fw-w"}>
                    {projectsData.sort((b, a) => a.date.localeCompare(b.date)).map(project => (
                        <Link href={`/projet/${project.slug}`} style={{width: '100%'}} className="PS_card"
                              key={project.id}>
                            <img src={`/${project.image}`} alt={project.name}/>
                            <div className="content">
                                {
                                    project.disclaimer && (
                                        <div className={"PP_disclaimer fr g1 ai-c"} style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            margin: '1rem',
                                            padding: '0.5rem 0.5rem',
                                            borderRadius: '0.5rem'
                                        }} title={"Une attention particulière est requise pour ce projet"}>
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
