import { useState } from "react";
import skillsData from "../data/skills.json"; // Chemin relatif à votre composant

function SkillsSection() {
    // État pour suivre la catégorie actuelle
    const [activeCategory, setActiveCategory] = useState('All');

    // Filtrer les compétences en fonction de la catégorie active
    const filteredSkills = activeCategory === 'All'
        ? skillsData
        : skillsData.filter(category => category.name === activeCategory);

    return (
        <>
            <section className={"SS fc g1"}>
                <h2>Compétences</h2>
                <div className="SS_btns fr g0-5">
                    {/* Bouton "All" avec la classe active si nécessaire */}
                    <button
                        type={'button'}
                        className={activeCategory === 'All' ? 'active' : ''}
                        onClick={() => setActiveCategory('All')}>
                        All
                    </button>

                    {/* Boutons des catégories avec la classe active si nécessaire */}
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
                            <div key={skill.name} title={skill.description}>
                                <img src={"/"+skill.links[0].url} alt={skill.links[0].alt} />
                                <p>{skill.name}</p>
                                {/*<p>{skill.id}</p>*/}
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}

export default SkillsSection;
