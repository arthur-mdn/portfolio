export default function ServiceFaq({ items }) {
  if (!items?.length) return null;

  return (
    <section className="svc-section">
      <div className="container">
        <div className="svc-section-intro">
          <p className="section-label">FAQ</p>
          <h2>Questions fréquentes</h2>
        </div>
        <div className="svc-faq">
          {items.map((item) => (
            <details key={item.q} className="svc-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
