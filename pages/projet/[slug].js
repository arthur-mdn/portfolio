import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";
import {
  FaBan,
  FaGithub,
  FaLink,
  FaArrowUp,
  FaArrowDown,
  FaTriangleExclamation,
} from "react-icons/fa6";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

function ProjectPage({ project }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const projectSkills = project.technos
    .map((techId) =>
      skillsData
        .flatMap((category) => category.skills)
        .find((skill) => skill.id === techId)
    )
    .filter(Boolean);

  const hasLinks = project.github || project.link || project.youtube?.length;
  const hasCaseStudy = Boolean(
    project.context || project.need || project.solution || project.result
  );

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const metaDescription = (
    project.context ||
    project.description ||
    ""
  ).slice(0, 160);
  const pageTitle = `${project.name.trim()} | Réalisation — Arthur Mondon`;
  const canonical = `https://mondon.pro/projet/${project.slug}`;

  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: metaDescription,
    url: canonical,
    image: `https://mondon.pro/${project.image}`,
    dateCreated: project.date,
    author: {
      "@type": "Person",
      name: "Arthur Mondon",
      url: "https://mondon.pro",
    },
    keywords: (project.tags || []).join(", "),
    genre: project.type,
    inLanguage: "fr-FR",
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/others/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`https://mondon.pro/ogs/${project.image.replace(/\.webp$/i, ".png")}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content={`https://mondon.pro/ogs/${project.image.replace(/\.webp$/i, ".png")}`}
        />
      </Head>

      <main className="page-shell">
        <div className="container" style={{ maxWidth: "960px" }}>
          <div className="PP_img" style={{ maxWidth: "100%", marginBottom: "1.5rem" }}>
            <img
              src={`/${project.image}`}
              alt={project.name}
              onClick={() => setIsImageExpanded(!isImageExpanded)}
              className={isImageExpanded ? "expanded" : ""}
            />
            <div className="indicator">
              {isImageExpanded ? <FaArrowUp /> : <FaArrowDown />}
            </div>
          </div>

          <p className="section-label">{project.type}</p>
          <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
            {project.name}
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            {formatDate(project.date)} · Arthur Mondon
          </p>

          {project.disclaimer && (
            <div className="PP_disclaimer fr g1 ai-c">
              <FaTriangleExclamation size="2rem" />
              <p dangerouslySetInnerHTML={{ __html: project.disclaimer }} />
            </div>
          )}

          {hasCaseStudy ? (
            <div className="case-grid">
              {project.context && (
                <div className="case-block">
                  <h2>Contexte</h2>
                  {String(project.context)
                    .split(/\n+/)
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
              )}
              {project.need && (
                <div className="case-block">
                  <h2>Besoin</h2>
                  {String(project.need)
                    .split(/\n+/)
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
              )}
              {project.solution && (
                <div className="case-block">
                  <h2>Solution</h2>
                  {String(project.solution)
                    .split(/\n+/)
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
              )}
              {project.features?.length > 0 && (
                <div className="case-block">
                  <h2>Fonctionnalités</h2>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.result && (
                <div className="case-block">
                  <h2>Résultat</h2>
                  {String(project.result)
                    .split(/\n+/)
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div className="case-block">
              <h2>Description</h2>
              {String(project.description)
                .split(/\n+/)
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
            </div>
          )}

          <div className="case-block" style={{ marginTop: "1.5rem" }}>
            <h2>Technologies</h2>
            <div className="fr g0-5 PP_technos" style={{ marginTop: "0.75rem" }}>
              {projectSkills.map((skill) => (
                <div key={skill.id}>
                  <Image
                    src={`/${skill.links[0].url}`}
                    alt={skill.name}
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="case-block" style={{ marginTop: "1.5rem" }}>
            <h2>Liens</h2>
            <div className="fr g0-5" style={{ marginTop: "0.75rem", flexWrap: "wrap" }}>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button github"
                >
                  <FaGithub />
                  GitHub
                </Link>
              )}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button linkedin"
                >
                  <FaLink />
                  Voir le projet
                </Link>
              )}
              {!hasLinks && (
                <p className="fr ai-c g0-5" style={{ color: "red", fontWeight: "bold" }}>
                  <FaBan /> Aucun lien public disponible.
                </p>
              )}
            </div>
          </div>

          {project.youtube?.length > 0 && (
            <div className="case-block" style={{ marginTop: "1.5rem" }}>
              <h2>Vidéos</h2>
              <div className="fc g1 fw-w" style={{ marginTop: "0.75rem" }}>
                {project.youtube.map((video) => (
                  <a
                    key={video.link}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{video.title}</p>
                    <img
                      src={video.image}
                      alt={video.title}
                      style={{
                        width: "300px",
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Un projet similaire ? Parlons-en
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectPage;
