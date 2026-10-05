import Head from "next/head";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import { getServiceBySlug, SERVICES } from "../../data/services";

export async function getStaticPaths() {
  return {
    paths: SERVICES.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { notFound: true };

  const related = service.relatedProjects
    .map((slug) => projectsData.find((project) => project.slug === slug))
    .filter(Boolean)
    .map(({ slug, name, type, image }) => ({ slug, name, type, image }));

  return { props: { service, related } };
}

export default function ServicePage({ service, related }) {
  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link
          rel="canonical"
          href={`https://mondon.pro/services/${service.slug}`}
        />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta
          property="og:url"
          content={`https://mondon.pro/services/${service.slug}`}
        />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container">
          <div className="page-hero">
            <p className="section-label">Service {service.num}</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
          </div>

          <div className="content-block">
            <h2>Pour qui ?</h2>
            <ul>
              {service.forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Ce que je livre</h2>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {related.length > 0 && (
            <div className="content-block">
              <h2>Réalisations liées</h2>
              <div className="projects-grid" style={{ marginTop: "1.25rem" }}>
                {related.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projet/${project.slug}`}
                    className="project-card"
                  >
                    <div className="project-card-media project-card-media-sm">
                      <img src={`/${project.image}`} alt={project.name} />
                      <span className="project-card-cat">{project.type}</span>
                    </div>
                    <div className="project-card-body">
                      <h3>{project.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Demander un devis
              <FaArrowRight size={14} />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Tous les services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
