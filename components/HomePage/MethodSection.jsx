const steps = [
  {
    num: "01",
    title: "Échange",
    text: "Comprendre votre activité, vos besoins et vos objectifs.",
  },
  {
    num: "02",
    title: "Conception",
    text: "Définir l'interface, les fonctionnalités et la solution technique.",
  },
  {
    num: "03",
    title: "Développement",
    text: "Construire et tester votre site ou application.",
  },
  {
    num: "04",
    title: "Mise en ligne",
    text: "Déployer, accompagner et faire évoluer le projet.",
  },
];

function MethodSection() {
  return (
    <section className="method-section">
      <div className="container">
        <p className="section-label">Ma façon de travailler</p>
        <h2 className="section-title">De votre idée à la mise en ligne</h2>
        <p className="section-lead">
          Un processus clair, pensé pour les non-développeurs comme pour les
          équipes techniques.
        </p>
        <div className="method-grid">
          {steps.map((step) => (
            <div key={step.num} className="method-step">
              <span className="method-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodSection;
