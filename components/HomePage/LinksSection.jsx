import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

function LinksSection() {
  return (
    <section className="about" style={{ background: "#fff", paddingTop: "2rem" }}>
      <div className="container">
        <p className="section-label">Liens</p>
        <h2 className="section-title">Retrouvez-moi ailleurs</h2>
        <p className="section-lead">
          LinkedIn pour le parcours, GitHub pour le code, YouTube pour les coulisses.
        </p>
        <div
          className="hero-actions"
          style={{ marginTop: "1.75rem", marginBottom: "1rem" }}
        >
          <Link
            href="https://www.linkedin.com/in/arthurmondon/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/arthur-mdn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub />
            GitHub
          </Link>
          <Link
            href="https://www.youtube.com/@arthurmdn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaYoutube />
            YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LinksSection;
