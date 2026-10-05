import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";

const FEATURED_SLUGS = [
  "private-events-dj-mika",
  "buzzer-app",
  "studer-tinder-mmi",
  "glucide-check-app-ios",
];

const skillMap = Object.fromEntries(
  skillsData.flatMap((category) =>
    category.skills.map((skill) => [skill.id, skill.name])
  )
);

function getShortDescription(text = "") {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 140) return clean;
  return `${clean.slice(0, 137).trim()}...`;
}

function getTechLabels(technos = []) {
  return technos
    .map((id) => skillMap[id])
    .filter(Boolean)
    .slice(0, 3);
}

function ProjectsSection() {
  const projects = FEATURED_SLUGS.map((slug) =>
    projectsData.find((project) => project.slug === slug)
  ).filter(Boolean);

  return (
    <section className="projects" id="realisations">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Mes réalisations</p>
            <h2 className="section-title">Des projets concrets et variés</h2>
            <p className="section-lead">
              Sites vitrines, applications métier, outils événementiels ou
              logiciels : quelques projets que j&apos;ai conçus et développés.
            </p>
          </div>
          <Link href="/projets" className="projects-link">
            Voir tous les projets
            <FaArrowRight size={13} />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const tags = getTechLabels(project.technos);
            return (
              <Link
                key={project.id}
                href={`/projet/${project.slug}`}
                className="project-card"
              >
                <div className="project-card-media">
                  <img src={`/${project.image}`} alt={project.name} />
                  <span className="project-card-cat">{project.type}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.name}</h3>
                  <p>{getShortDescription(project.description)}</p>
                  <div className="project-card-footer">
                    <div className="project-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="project-arrow" aria-hidden="true">
                      <FaArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
