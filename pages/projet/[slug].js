import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import projectsData from "../../data/projects.json";
import skillsData from "../../data/skills.json";
import { getServiceBySlug } from "../../data/services";
import {
  FaApple,
  FaGithub,
  FaLink,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaChevronUp,
  FaChevronDown,
  FaTriangleExclamation,
} from "react-icons/fa6";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function ProjectInlineLink({ href, children }) {
  const isExternal = /^https?:\/\//.test(href || "");
  return (
    <Link
      href={href || "#"}
      className="project-inline-link"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      title={isExternal ? "S’ouvre dans un nouvel onglet" : undefined}
    >
      {isExternal ? <FaArrowUpRightFromSquare aria-hidden="true" /> : <FaLink aria-hidden="true" />}
      {children}
    </Link>
  );
}

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

  const relatedProjects = (project.relatedProjects || [])
    .map(({ slug, reason }) => {
      const related = projectsData.find((item) => item.slug === slug);
      return related && related.slug !== project.slug ? { ...related, reason } : null;
    })
    .filter(Boolean);
  const relatedServices = (project.relatedServices || [])
    .map(getServiceBySlug)
    .filter(Boolean);
  const hasLinks = project.github || project.link || project.accessOnRequest;
  const hasCaseStudy = Boolean(
    project.context || project.need || project.solution || project.result
  );

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const metaDescription = (
    project.summary ||
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
              {isImageExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          <p className="section-label">{project.type}</p>
          <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
            {project.name}
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            {formatDate(project.date)} · Arthur Mondon
          </p>

          {project.summary && <p className="project-summary">{project.summary}</p>}

          {project.facts?.length > 0 && (
            <dl className="project-facts">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.disclaimer && (
            <div className="PP_disclaimer fr g1 ai-c">
              <FaTriangleExclamation size="2rem" />
              <p dangerouslySetInnerHTML={{ __html: project.disclaimer }} />
            </div>
          )}

          {hasCaseStudy ? (
            <div className="case-grid">
              {[
                { key: "context", title: "Le point de départ", content: project.context },
                { key: "need", title: "Les objectifs", content: project.need },
                { key: "role", title: "Mon intervention", content: project.role },
                { key: "solution", title: "La solution", content: project.solution, image: project.solutionImage },
                { key: "features", title: "Les fonctionnalités", items: project.features },
                { key: "controls", title: "Comment jouer", table: project.controlsTable },
                { key: "progression", title: "La progression", table: project.progressionTable },
                { key: "challenges", title: "Les enjeux et les choix", content: project.challenges },
                { key: "result", title: "Les résultats et l’usage actuel", content: project.result },
                { key: "credits", title: "Crédits", content: project.credits },
                { key: "roadmap", title: "Les évolutions envisagées", items: project.roadmap },
              ]
                .filter((section) => section.content || section.items?.length || section.table?.rows?.length)
                .map((section) => (
                  <section className="case-block" key={section.key}>
                    <h2>{section.title}</h2>
                    {section.content && String(section.content)
                      .split(/\n+/)
                      .filter(Boolean)
                      .map((paragraph, index) => (
                        <ReactMarkdown
                          key={`${section.key}-${index}`}
                          allowedElements={["p", "a"]}
                          components={{ a: ProjectInlineLink }}
                          unwrapDisallowed
                        >
                          {paragraph}
                        </ReactMarkdown>
                      ))}
                    {section.image && (
                      <figure className="project-figure">
                        <Image
                          src={`/${section.image.src}`}
                          alt={section.image.alt}
                          width={section.image.width}
                          height={section.image.height}
                          sizes="(max-width: 600px) calc(100vw - 3rem), 560px"
                        />
                        {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
                      </figure>
                    )}
                    {section.items?.length > 0 && (
                      <ul>
                        {section.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {section.table?.rows?.length > 0 && (
                      <div className="project-table-wrapper" role="region" aria-label={section.title} tabIndex={0}>
                        <table className="project-table" aria-label={section.title}>
                          <thead>
                            <tr>
                              {section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row[0]}>
                                <th scope="row">{row[0]}</th>
                                {row.slice(1).map((cell, index) => <td key={index}>{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}
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

          {hasLinks && <div className="case-block" style={{ marginTop: "1.5rem" }}>
            <h2>Découvrir le projet</h2>
            <div className="fr g0-5" style={{ marginTop: "0.75rem", flexWrap: "wrap" }}>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button github"
                >
                  <FaGithub />
                  Consulter le code sur GitHub
                </Link>
              )}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button linkedin"
                >
                  {/^https:\/\/apps\.apple\.com\//i.test(project.link)
                    ? <FaApple aria-hidden="true" />
                    : <FaArrowUpRightFromSquare aria-hidden="true" />}
                  {project.linkLabel || "Voir le projet"}
                </Link>
              )}
              {project.accessOnRequest && (
                <Link href="/contact" className="btn btn-secondary">
                  <FaLink aria-hidden="true" /> Demander un accès
                </Link>
              )}
            </div>
          </div>}

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

          {relatedProjects.length > 0 && (
            <section className="case-block" style={{ marginTop: "2rem" }}>
              <h2>Projets liés</h2>
              <div className="project-related-grid">
                {relatedProjects.map((related) => (
                  <Link key={related.slug} href={`/projet/${related.slug}`} className="project-related-card">
                    <div className="project-related-thumbnail">
                      <Image
                        src={`/${related.image}`}
                        alt=""
                        fill
                        sizes="(max-width: 600px) calc(100vw - 3rem), 280px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="project-related-body">
                      <span className="project-related-type">{related.type}</span>
                      <h3>{related.name}</h3>
                      <p>{related.reason}</p>
                      <span className="project-related-action">Découvrir le projet <FaArrowRight aria-hidden="true" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="case-block project-services" style={{ marginTop: "2.5rem" }}>
            {relatedServices.length > 0 && (
              <>
                <h2>Pour un projet similaire</h2>
                <p>Retrouvez les prestations correspondant à ce type de réalisation.</p>
                <ul className="project-service-links">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <ProjectInlineLink href={`/services/${service.slug}`}>{service.title}</ProjectInlineLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
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
