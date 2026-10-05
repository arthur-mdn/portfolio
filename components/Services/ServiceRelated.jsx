import Link from "next/link";

export default function ServiceRelated({ related, experienceProof }) {
  if (!related?.length && !experienceProof) return null;

  return (
    <section className="svc-section svc-section-alt">
      <div className="container">
        <div className="svc-section-intro">
          <p className="section-label">Preuves</p>
          <h2>Réalisations liées</h2>
        </div>

        {related?.length > 0 && (
          <div className="svc-related-grid">
            {related.map((project) => (
              <Link
                key={project.slug}
                href={`/projet/${project.slug}`}
                className="svc-related-card"
              >
                <div className="svc-related-media">
                  <img src={`/${project.image}`} alt={project.name} />
                  <span>{project.type}</span>
                </div>
                <div className="svc-related-body">
                  <h3>{project.name}</h3>
                  {project.proof && <p>{project.proof}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}

        {experienceProof && (
          <div className="svc-experience">
            <h3>{experienceProof.title}</h3>
            <p>{experienceProof.text}</p>
            {experienceProof.points?.length > 0 && (
              <ul>
                {experienceProof.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
