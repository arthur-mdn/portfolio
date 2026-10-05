const places = [
  "Carpentras",
  "Avignon",
  "Orange",
  "Vaucluse",
  "Provence",
  "À distance",
];

function LocationSection() {
  return (
    <section className="location-section">
      <div className="container">
        <p className="section-label">Dans le Vaucluse et au-delà</p>
        <h2 className="section-title">
          Un développeur web proche de votre entreprise
        </h2>
        <p className="section-lead">
          Basé dans le Vaucluse, près de Carpentras et d&apos;Avignon, je
          travaille avec des entreprises, associations et indépendants en
          Provence comme à distance partout en France.
        </p>
        <div className="location-chips">
          {places.map((place) => (
            <span key={place} className="location-chip">
              {place}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
