import Head from "next/head";
import Link from "next/link";
import { FaArrowRight, FaChevronDown, FaTriangleExclamation } from "react-icons/fa6";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";

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

function ProjectCard({ project }) {
  const tags = getTechLabels(project.technos);

  return (
    <Link href={`/projet/${project.slug}`} className="library-card">
      <div className="library-card-media">
        <img src={`/${project.image}`} alt={project.name} />
        {project.disclaimer && (
          <span
            className="project-card-warning"
            title="Attention particulière requise"
          >
            <FaTriangleExclamation size={12} />
          </span>
        )}
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
}

export default function Projets() {
  const title = "Réalisations | Arthur Mondon — Développeur web freelance";
  const description =
    "Sites vitrines, applications web et outils sur mesure conçus par Arthur Mondon, développeur web freelance dans le Vaucluse.";

  const interestingProjects = [...projectsData]
    .filter((project) => project.interesting)
    .sort((a, b) => b.date.localeCompare(a.date));

  const otherProjects = [...projectsData]
    .filter((project) => !project.interesting)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Head>
        <link rel="canonical" href="https://mondon.pro/projets" />
        <link rel="icon" href="/others/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Arthur MONDON" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://mondon.pro/projets" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container">
          <div className="page-hero page-hero-compact">
            <p className="section-label">Bibliothèque</p>
            <h1>Tous les projets</h1>
            <p>
              Une vue compacte de mes réalisations publiques, du site vitrine à
              l&apos;outil métier.
            </p>
          </div>

          <section className="projects-page-section">
            <div className="projects-page-heading">
              <h2>Mis en avant</h2>
              <p>{interestingProjects.length}</p>
            </div>
            <div className="library-grid">
              {interestingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {otherProjects.length > 0 && (
            <details className="projects-accordion">
              <summary>
                <span>
                  Autres projets
                  <em>{otherProjects.length}</em>
                </span>
                <FaChevronDown className="projects-accordion-icon" size={14} />
              </summary>
              <div className="library-grid">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </details>
          )}

          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Discuter d&apos;un projet
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
