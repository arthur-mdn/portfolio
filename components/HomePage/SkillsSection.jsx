import {useState} from "react";
import skillsData from "../data/skills.json";
import projects from "../data/projects.json";

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
            <section className={"SS fc g1"}>
                <h2 className={"s-font"}>Compétences</h2>
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
