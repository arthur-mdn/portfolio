import Link from "next/link";

const items = [
  {
    num: "01",
    title: "Sites vitrines & WordPress",
    text: "Sites modernes, rapides et adaptés aux mobiles pour présenter votre activité et générer des contacts.",
    href: "/services/creation-site-internet",
  },
  {
    num: "02",
    title: "Applications web sur mesure",
    text: "Outils métier, plateformes web, interfaces d'administration et applications adaptées à vos besoins.",
    href: "/services/application-web-sur-mesure",
  },
  {
    num: "03",
    title: "Refonte & amélioration",
    text: "Modernisation d'un site existant, amélioration de l'expérience utilisateur, des performances et du référencement.",
    href: "/services/refonte-site-web",
  },
  {
    num: "04",
    title: "Déploiement & maintenance",
    text: "Hébergement, Docker, serveurs, supervision, mises à jour et accompagnement après la mise en ligne.",
    href: "/services/deploiement-maintenance",
  },
];

function ExpertiseSection() {
  return (
    <section className="expertise" id="services">
      <div className="container">
        <div className="expertise-divider" />
        <div className="section-intro">
          <p className="section-label">Services</p>
          <h2 className="section-title">
            Sites internet et applications web sur mesure
          </h2>
        </div>
        <div className="expertise-grid">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="expertise-item">
              <span className="expertise-icon" aria-hidden="true">
                {item.num}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
