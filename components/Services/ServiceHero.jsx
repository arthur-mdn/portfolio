import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ArchitectureDiagram from "./ArchitectureDiagram";
import BeforeAfter from "./BeforeAfter";
import DeployPipeline from "./DeployPipeline";
import NativeStack from "./NativeStack";
import SiteMockup from "./SiteMockup";

const VISUALS = {
  site: SiteMockup,
  architecture: ArchitectureDiagram,
  beforeAfter: BeforeAfter,
  pipeline: DeployPipeline,
  native: NativeStack,
};

export default function ServiceHero({ service }) {
  const Visual = VISUALS[service.visualType] || SiteMockup;

  return (
    <section className="svc-hero">
      <div className="container svc-hero-grid">
        <div className="svc-hero-copy">
          <p className="section-label">Service {service.num}</p>
          <h1>{service.title}</h1>
          <p className="svc-hero-lead">{service.intro}</p>
          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <Link href="/contact" className="btn btn-primary">
              Demander un devis
              <FaArrowRight size={14} />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Tous les services
            </Link>
          </div>
        </div>
        <div className="svc-hero-visual">
          <div className="svc-hero-halo" aria-hidden="true" />
          {service.glyph && (
            <span className="svc-glyph" aria-hidden="true">
              {service.glyph}
            </span>
          )}
          <Visual />
        </div>
      </div>
    </section>
  );
}
