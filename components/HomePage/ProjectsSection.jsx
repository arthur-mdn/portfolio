import projectsData from "../../data/projects.json";
import {FaArrowLeft, FaArrowRight, FaArrowRightLong, FaEye, FaTriangleExclamation} from "react-icons/fa6";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProjectsSection() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

// Composants pour les boutons personnalisés
    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style}}
                onClick={onClick}
            >
                <FaArrowLeft/>
            </div>
        );
    }

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style}}
                onClick={onClick}
            >
                <FaArrowRight/>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const interestingProjects = projectsData.filter(project => project.interesting);
    const otherProjects = projectsData.filter(project => !project.interesting);

    return (
        <>
            <br/>
            <section className="PS fc g1">
                <h2 className={"s-font"}>Projets Récents</h2>
                <div className={"AS_card grey"}>
                    <p className={"s-font"}>Bienvenue dans le coin où je range tous mes projets ! C&apos;est ici que je partage les projets publics sur lesquels j&apos;ai travaillé, que ça soit des sites web, des applis, des extensions ou même des jeux. C&apos;est un peu comme mon petit musée personnel. Jetez un œil, il y a de tout et pour tous les goûts !</p>
                </div>
                <Slider {...settings}>
                    {interestingProjects.sort((b, a) => a.date.localeCompare(b.date)).slice(0, 8).map(project => (
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
                                <div className="button"><FaArrowRightLong/></div>
                            </div>
                        </Link>
                    ))}
                </Slider>
                <Link href="/projets" className="button c-white" style={{width: "fit-content", margin: '1.5rem auto'}}>
                    <FaEye/> Voir plus de projets
                </Link>
            </section>
        </>
    );
}

export default ProjectsSection;
