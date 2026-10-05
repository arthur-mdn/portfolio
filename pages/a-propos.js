import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa6";

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

export default function AboutPage() {
  const title = "À propos | Arthur Mondon — Développeur web freelance Vaucluse";
  const description =
    "Développeur full-stack freelance basé dans le Vaucluse. Cinq années d'expérience en développement, déploiement et exploitation d'applications web.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://mondon.pro/a-propos" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://mondon.pro/a-propos" />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-visual-bg" aria-hidden="true" />
              <Image
                src="/illustrations/memoji.webp"
                alt="Arthur Mondon"
                width={320}
                height={412}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="about-copy">
              <p className="section-label">À propos</p>
              <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                Du développement à la mise en production
              </h1>
              <p>
                Je suis Arthur Mondon, développeur full-stack freelance basé dans
                le Vaucluse, près de Carpentras et d&apos;Avignon.
              </p>
              <p>
                Après cinq années d&apos;expérience en développement web,
                déploiement et exploitation d&apos;applications, j&apos;accompagne
                aujourd&apos;hui entreprises, indépendants et porteurs de projets
                dans la création de leurs outils numériques.
              </p>
              <p>
                Mon approche couvre le frontend, le backend et
                l&apos;infrastructure : interfaces claires, architecture solide,
                mise en production maîtrisée.
              </p>

              <div className="about-stats">
                <div className="about-stat">
                  <strong>5 ans</strong>
                  <span>d&apos;expérience</span>
                </div>
                <div className="about-stat">
                  <strong>Full-stack</strong>
                  <span>développement &amp; exploitation</span>
                </div>
                <div className="about-stat">
                  <strong>Vaucluse</strong>
                  <span>et à distance en France</span>
                </div>
              </div>

              <div className="tech-chips" style={{ marginTop: "1.75rem" }}>
                {TECHS.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="hero-actions"
                style={{ marginTop: "2rem", marginBottom: 0 }}
              >
                <Link href="/contact" className="btn btn-primary">
                  Me contacter
                  <FaArrowRight size={14} />
                </Link>
                <Link
                  href="/others/CV_Arthur_Mondon_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn btn-secondary"
                >
                  <FaDownload size={14} />
                  Télécharger le CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
