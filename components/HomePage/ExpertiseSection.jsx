const items = [
  {
    icon: "</>",
    title: "Applications web sur mesure",
    text: "Sites vitrines, outils métier, PWA",
  },
  {
    icon: "✦",
    title: "Design moderne",
    text: "Interfaces soignées et efficaces",
  },
  {
    icon: "▣",
    title: "Déploiement & infrastructure",
    text: "Docker, VPS, monitoring",
  },
  {
    icon: "▥",
    title: "Accompagnement",
    text: "De l'idée à la mise en ligne",
  },
];

function ExpertiseSection() {
  return (
    <section className="expertise">
      <div className="container">
        <div className="expertise-divider" />
        <div className="expertise-grid">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`expertise-item fade-up fade-up-delay-${Math.min(index + 1, 3)}`}
            >
              <span className="expertise-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
