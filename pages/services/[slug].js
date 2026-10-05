import Head from "next/head";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import { getServiceBySlug, SERVICES } from "../../data/services";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceFaq from "@/components/Services/ServiceFaq";
import ServiceRelated from "@/components/Services/ServiceRelated";

export async function getStaticPaths() {
  return {
    paths: SERVICES.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { notFound: true };

  const related = (service.related || [])
    .map(({ slug, proof }) => {
      const project = projectsData.find((item) => item.slug === slug);
      if (!project) return null;
      return {
        slug: project.slug,
        name: project.name,
        type: project.type,
        image: project.image,
        proof,
      };
    })
    .filter(Boolean);

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

      <main className="svc-page">
        <ServiceHero service={service} />

        <section className="svc-section">
          <div className="container">
            <div className="svc-section-intro">
              <p className="section-label">Audiences</p>
              <h2>Pour qui ?</h2>
            </div>
            <div className="svc-audience-grid">
              {service.audiences.map((item) => (
                <div key={item.title} className="svc-audience-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-section svc-section-alt">
          <div className="container">
            <div className="svc-section-intro">
              <p className="section-label">Offre</p>
              <h2>Ce que je propose</h2>
            </div>
            <ul className="svc-chip-list">
              {service.offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="svc-section">
          <div className="container">
            <div className="svc-section-intro">
              <p className="section-label">Inclus</p>
              <h2>Ce qui est compris</h2>
            </div>
            <ul className="svc-check-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="svc-section svc-section-alt">
          <div className="container">
            <div className="svc-section-intro">
              <p className="section-label">Process</p>
              <h2>Comment on avance</h2>
            </div>
            <ol className="svc-process">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <span className="svc-process-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ServiceRelated
          related={related}
          experienceProof={service.experienceProof || null}
        />

        <ServiceFaq items={service.faq} />

        <section className="svc-cta">
          <div className="container svc-cta-inner">
            <h2>Un projet de ce type en tête ?</h2>
            <p>
              Site, app web ou application native : décrivez votre besoin et
              voyons ensemble la meilleure façon de le réaliser.
            </p>
            <div className="hero-actions" style={{ marginBottom: 0, justifyContent: "center" }}>
              <Link href="/contact" className="btn btn-primary">
                Parler de mon projet
                <FaArrowRight size={14} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Voir tous les services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
