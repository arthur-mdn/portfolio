import {useState} from "react";
import skillsData from "../../data/skills.json";
import projects from "../../data/projects.json";

function SkillElement({skill, displayedPopup, setDisplayedPopup}) {
    const isPopupDisplayed = displayedPopup === skill.id;

    const togglePopup = () => {
        if (isPopupDisplayed) {
            setDisplayedPopup(null); // Ferme la popup si elle est déjà ouverte
        } else {
            setDisplayedPopup(skill.id); // Ouvre la popup pour cette compétence
        }
    };

    const projectCount = projects.filter(project =>
        project.technos.includes(skill.id)
    ).length;

    return (
        <button title={skill.description} onClick={togglePopup}>
            {isPopupDisplayed &&
                <div className={"popup"}>
                    <p>Projets publics utilisant {skill.description} : {projectCount}</p>
                </div>
            }

            <img src={"/" + skill.links[0].url} alt={skill.links[0].alt}/>
            <p className={"s-font fs0-8"}>{skill.name}</p>
            <p style={{fontSize: '0.8rem', opacity: '0.6'}}>{skill.id}</p>
        </button>
    );
}

function SkillsSection() {
    // État pour suivre la catégorie actuelle
    const [activeCategory, setActiveCategory] = useState('All');
    const [displayedPopup, setDisplayedPopup] = useState(null); // Nouvel état pour la popup affichée

    // Filtrer les compétences en fonction de la catégorie active
    const filteredSkills = activeCategory === 'All'
        ? skillsData
        : skillsData.filter(category => category.name === activeCategory);

    return (
        <>
            <br/><br/>
            <section className={"SS fc g1"}>
                <h2 className={"s-font"}>Compétences</h2>
                <div className={"AS_card grey"}>
                    <p className={"s-font"}>Au cœur de chaque projet que je réalise se trouve un ensemble de compétences techniques affinées au fil de nombreux défis relevés. Ma maîtrise s&apos;étend à travers un large éventail de domaines, allant du développement frontend et backend jusqu&apos;à la manipulation experte de bases de données et l&apos;utilisation d&apos;outils de développement modernes. Que ce soit en créant des interfaces utilisateur dynamiques avec HTML, CSS et JavaScript, en développant des applications complexes avec Angular, React ou NextJS, ou en gérant la logique serveur avec NodeJS et PHP, chaque compétence contribue à transformer des idées ambitieuses en réalités numériques tangibles. Mon expérience dans les bases de données avec MySQL, MongoDB et PostgreSQL assure que chaque projet repose sur des fondations solides et performantes. La connaissance approfondie d&apos;outils tels que Git, Docker et Unity me permet de mener à bien des projets avec efficacité et innovation. Plongez dans l&apos;univers de mes compétences et découvrez comment je peux apporter une valeur ajoutée à vos projets.</p>
                </div>
                    <div className="SS_btns fr g0-5">
                    <button
                        type={'button'}
                        className={activeCategory === 'All' ? 'active' : ''}
                        onClick={() => setActiveCategory('All')}>
                        All
                    </button>

                    {skillsData.map(category => (
                        <button
                            key={category.id}
                            className={activeCategory === category.name ? 'active' : ''}
                            onClick={() => setActiveCategory(category.name)}>
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className="skills-icons g0-5">
                    {filteredSkills.map(category =>
                        category.skills.map(skill => (
                            <SkillElement
                                key={skill.id}
                                skill={skill}
                                displayedPopup={displayedPopup}
                                setDisplayedPopup={setDisplayedPopup}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}

export default SkillsSection;
