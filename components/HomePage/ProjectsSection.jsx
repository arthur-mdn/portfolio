import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";

const FEATURED_SLUGS = [
  "private-events-dj-mika",
  "blindset-studio",
  "reseau-mistral",
  "displayhub",
];

const skillMap = Object.fromEntries(
  skillsData.flatMap((category) =>
    category.skills.map((skill) => [skill.id, skill.name])
  )
);

function getTechLabels(technos = []) {
  return technos
    .map((id) => skillMap[id])
    .filter(Boolean)
    .slice(0, 2);
}

function formatCardDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
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

        <div className="library-grid">
          {projects.map((project) => {
            const tags = getTechLabels(project.technos);
            return (
              <Link
                key={project.id}
                href={`/projet/${project.slug}`}
                className="library-card"
              >
                <div className="library-card-media">
                  <img src={`/${project.image}`} alt={project.name} />
                </div>
                <div className="library-card-body">
                  <div className="library-card-top">
                    <span className="library-card-type">{project.type}</span>
                    <time className="library-card-date" dateTime={project.date}>
                      {formatCardDate(project.date)}
                    </time>
                  </div>
                  <h3>{project.name}</h3>
                  <div className="library-card-meta">
                    <div className="project-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="project-arrow" aria-hidden="true">
                      <FaArrowRight size={11} />
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
