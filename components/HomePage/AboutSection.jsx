import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "../../data/projects.json";

function AboutSection() {
  const projectCount = projectsData.length;

  return (
    <section className="about" id="a-propos">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-visual-bg" aria-hidden="true" />
          <Image
            src="/illustrations/memoji.webp"
            alt="Arthur Mondon, développeur web freelance dans le Vaucluse"
            width={320}
            height={412}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="about-copy">
          <p className="section-label">À propos</p>
          <h2 className="section-title">
            Du web aux apps natives, jusqu&apos;à la mise en production.
          </h2>
          <p>
            Je suis Arthur Mondon, développeur full-stack freelance dans le
            Vaucluse. Je crée des sites, des applications web et des apps
            natives iOS/macOS, avec le déploiement et le suivi dans la durée.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <strong>5 ans</strong>
              <span>d&apos;expérience</span>
            </div>
            <div className="about-stat">
              <strong>{projectCount}+</strong>
              <span>projets</span>
            </div>
            <div className="about-stat">
              <strong>Full-stack</strong>
              <span>web, native &amp; infra</span>
            </div>
            <div className="about-stat">
              <strong>Vaucluse</strong>
              <span>près de Carpentras</span>
            </div>
          </div>
          <Link href="/a-propos" className="projects-link" style={{ marginTop: "1.5rem" }}>
            Découvrir mon parcours
            <FaArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
