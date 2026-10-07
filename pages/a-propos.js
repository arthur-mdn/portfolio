import Head from "next/head";
import Link from "next/link";
import { FaArrowRight, FaDownload } from "react-icons/fa6";

const TIMELINE = [
  {
    year: "2021",
    title: "Premiers pas professionnels",
    text: "Début de mon parcours en alternance : développement de sites et premières applications concrètes.",
  },
  {
    year: "2021 → 2026",
    title: "5 ans en développement full-stack",
    text: "Chez Edissyum : applications métier, frontend, backend, bases de données et intégrations au quotidien.",
  },
  {
    year: "2023 → 2026",
    title: "De plus en plus proche de la production",
    text: "Docker, Linux, déploiements, migrations, support et supervision d'applications en conditions réelles.",
  },
  {
    year: "2024 → 2026",
    title: "Mastère Développeur Full-Stack",
    text: "Approfondissement de l'architecture applicative et réalisation de projets complets de bout en bout.",
  },
  {
    year: "2026 → aujourd'hui",
    title: "Freelance & produits personnels",
    text: "Sites clients, applications web et développement natif avec SwiftUI, en parallèle de l'expérience pro.",
  },
];

const DIMENSIONS = [
  {
    title: "Développement",
    text: "Sites, applications web et apps natives iOS/macOS. Du frontend clair au backend solide.",
  },
  {
    title: "Infrastructure",
    text: "Docker, Linux, reverse proxy, HTTPS, monitoring et mises en production contrôlées.",
  },
  {
    title: "Produit & interface",
    text: "Parcours simples, interfaces soignées et décisions techniques au service de l'usage réel.",
  },
];

const OUTSIDE = [
  {
    title: "Photo",
    text: "Composition, image et attention aux détails. Une sensibilité qui influence directement le rendu des interfaces.",
  },
  {
    title: "Musique & événementiel",
    text: (
      <>
        Des projets qui m&apos;ont poussé à créer mes propres outils, comme{" "}
        <Link href="/projet/blindset-studio">BlindSet Studio</Link>,{" "}
        <Link href="/projet/karaoke-and-propositions">Karaoké &amp; Propositions</Link>{" "}
        ou <Link href="/projet/private-events-dj-mika">Private Events</Link>.
      </>
    ),
  },
  {
    title: "Créer pour résoudre",
    text: (
      <>
        J&apos;aime transformer un problème quotidien en outil concret :{" "}
        <Link href="/projet/fidelity-wallet">FidelityWallet</Link>,{" "}
        <Link href="/projet/logiciel-de-facturation">logiciel de facturation</Link>, et
        d&apos;autres produits personnels.
      </>
    ),
  },
];

const TECHS = [
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "PHP",
  "Python",
  "Swift",
  "SwiftUI",
  "WordPress",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Linux",
];

export default function AboutPage() {
  const title = "À propos | Arthur Mondon — Web & apps natives";
  const description =
    "Parcours de développeur full-stack freelance : web, apps natives iOS/macOS, infrastructure et produit. Basé dans le Vaucluse.";

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
          <div className="about-page-hero">
            <p className="section-label">À propos</p>
            <h1>Un parcours produit, du web au native</h1>
            <p>
              Je suis Arthur Mondon, développeur full-stack freelance basé dans
              le Vaucluse. Je construis des sites, des applications web et des
              apps natives iOS/macOS, avec la mise en production et le suivi
              dans la durée.
            </p>
          </div>

          <section className="svc-section" style={{ paddingTop: 0 }}>
            <div className="svc-section-intro">
              <p className="section-label">Approche</p>
              <h2>Du besoin à l&apos;outil en production</h2>
            </div>
            <p className="about-outside">
              Mon travail ne s&apos;arrête pas au code. Je cadre le besoin,
              conçois l&apos;interface, développe l&apos;outil (web ou native),
              le déploie et l&apos;accompagne ensuite. L&apos;idée est de livrer
              quelque chose d&apos;utilisable, stable et évolutif.
            </p>
          </section>

          <section
            className="svc-section svc-section-alt"
            style={{
              margin: "0 -1.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div className="container" style={{ padding: 0 }}>
              <div className="svc-section-intro">
                <p className="section-label">Parcours</p>
                <h2>2021 → aujourd&apos;hui</h2>
              </div>
              <div className="about-timeline">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="about-timeline-item">
                    <strong>{item.year}</strong>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="svc-section">
            <div className="svc-section-intro">
              <p className="section-label">Profil</p>
              <h2>Trois dimensions</h2>
            </div>
            <div className="about-dims">
              {DIMENSIONS.map((item) => (
                <div key={item.title} className="about-dim">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="svc-section" style={{ paddingTop: 0 }}>
            <div className="svc-section-intro">
              <p className="section-label">Stack</p>
              <h2>Technologies principales</h2>
            </div>
            <div className="tech-chips">
              {TECHS.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="svc-section" style={{ paddingTop: 0 }}>
            <div className="svc-section-intro">
              <p className="section-label">Hors code</p>
              <h2>Ce qui nourrit le reste</h2>
            </div>
            <div className="about-outside-grid">
              {OUTSIDE.map((item) => (
                <div key={item.title} className="about-outside-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="svc-cta" style={{ paddingTop: "1rem" }}>
            <div className="svc-cta-panel" style={{ gridTemplateColumns: "1fr" }}>
              <div className="svc-cta-copy" style={{ textAlign: "center" }}>
                <h2>Envie d&apos;échanger ?</h2>
                <p style={{ marginLeft: "auto", marginRight: "auto" }}>
                  Site, app web ou application native : parlez-moi de votre
                  projet, ou téléchargez mon CV pour en savoir plus.
                </p>
                <div
                  className="hero-actions"
                  style={{ marginBottom: 0, justifyContent: "center" }}
                >
                  <Link href="/contact" className="btn btn-final">
                    Me contacter
                    <FaArrowRight size={14} />
                  </Link>
                  <Link
                    href="/others/CV_Arthur_Mondon_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="btn btn-secondary svc-cta-secondary"
                  >
                    <FaDownload size={14} />
                    Télécharger le CV
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
