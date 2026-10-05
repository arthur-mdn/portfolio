import Head from "next/head";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { SERVICES } from "../../data/services";

export default function ServicesHub() {
  const title = "Services de développement web | Arthur Mondon";
  const description =
    "Création de sites internet, applications web sur mesure, refonte et déploiement. Services de développeur web freelance dans le Vaucluse.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://mondon.pro/services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://mondon.pro/services" />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container">
          <div className="page-hero">
            <p className="section-label">Services</p>
            <h1>Ce que je peux réaliser pour vous</h1>
            <p>
              Sites vitrines, applications métier, refonte ou déploiement : je
              vous accompagne de l&apos;idée à la mise en production.
            </p>
          </div>

          <div className="service-cards">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card"
              >
                <span className="num">{service.num}</span>
                <h2>{service.shortTitle}</h2>
                <p>{service.intro}</p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Parler de votre projet
              <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
