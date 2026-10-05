import Link from "next/link";
import { SERVICES } from "../../data/services";

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
              <p>{service.intro}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
