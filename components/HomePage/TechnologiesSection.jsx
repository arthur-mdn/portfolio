import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const TECHS = [
  "React",
  "Angular",
  "Node.js",
  "PHP",
  "Python",
  "WordPress",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Linux",
];

function TechnologiesSection() {
  return (
    <section className="tech-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Technologies</p>
            <h2 className="section-title">Les bons outils selon le projet</h2>
            <p className="section-lead">
              Je choisis la stack adaptée à votre besoin, sans suringénierie.
            </p>
          </div>
          <Link href="/competences" className="projects-link">
            Voir toutes mes compétences
            <FaArrowRight size={13} />
          </Link>
        </div>
        <div className="tech-chips">
          {TECHS.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
