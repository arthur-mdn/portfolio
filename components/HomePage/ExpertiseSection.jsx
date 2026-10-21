import Link from "next/link";
import { SERVICES } from "../../data/services";

const DESCRIPTIONS = {
  site: "Une présence en ligne claire qui inspire confiance et facilite le contact.",
  architecture: "Des outils adaptés à votre métier pour simplifier le quotidien.",
  beforeAfter: "Un site plus clair, plus rapide et adapté à vos objectifs actuels.",
  pipeline: "Votre application en ligne, avec une infrastructure maîtrisée.",
  native: "Des applications iPhone et Mac pensées pour leurs utilisateurs.",
};

function ExpertiseSection() {
  return (
    <section className="expertise" id="services">
      <div className="container">
        <div className="expertise-divider" />
        <div className="section-intro">
          <p className="section-label">Services</p>
          <h2 className="section-title">
            Sites, applications web et apps natives
          </h2>
        </div>
        <div className="expertise-grid expertise-grid-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="expertise-item"
            >
              <span className="expertise-icon" aria-hidden="true">
                {service.num}
              </span>
              <h3>{service.shortTitle}</h3>
              <p>{DESCRIPTIONS[service.visualType] || service.intro}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
