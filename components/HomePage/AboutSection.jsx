import Image from "next/image";
import projectsData from "../../data/projects.json";

function AboutSection() {
  const projectCount = projectsData.length;

  return (
    <section className="about" id="a-propos">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-visual-bg" aria-hidden="true" />
          <Image
            src="/illustrations/memoji.png"
            alt="Arthur Mondon"
            width={320}
            height={412}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="about-copy">
          <p className="section-label">À propos</p>
          <h2 className="section-title">Développeur, mais pas seulement.</h2>
          <p>
            Je conçois des solutions web full-stack en partant du besoin métier :
            interfaces claires, architecture solide, déploiement maîtrisé.
          </p>
          <p>
            Au-delà du code, j&apos;interviens sur le design UI, l&apos;infrastructure
            (Docker, VPS, monitoring) et l&apos;accompagnement de A à Z, de
            l&apos;idée à la mise en ligne.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <strong>{projectCount}+</strong>
              <span>projets publics</span>
            </div>
            <div className="about-stat">
              <strong>Full-stack</strong>
              <span>front, back, infra</span>
            </div>
            <div className="about-stat">
              <strong>PACA</strong>
              <span>basé dans le Vaucluse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
