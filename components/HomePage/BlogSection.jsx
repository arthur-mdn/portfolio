import Link from "next/link";
import { FaArrowRight, FaRegCalendar } from "react-icons/fa6";
import articlesData from "../../data/articles.json";

export default function BlogSection({ limit = 3 }) {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const articles = [...articlesData]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);

  return (
    <section className="projects blog-preview">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Mes articles</p>
            <h2 className="section-title">Je partage aussi ce que j&apos;apprends</h2>
          </div>
          <Link href="/blog" className="projects-link">
            Découvrir tous les articles
            <FaArrowRight size={13} />
          </Link>
        </div>

        <div className={`projects-grid${articles.length === 3 ? " projects-grid-3" : ""}`}>
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="project-card project-card-compact"
            >
              <div className="project-card-media project-card-media-sm">
                <img src={`/${article.cover_image}`} alt={article.title} />
                <span className="project-card-cat">{article.category}</span>
              </div>
              <div className="project-card-body">
                <h3>{article.title}</h3>
                <div className="project-card-footer">
                  <span
                    className="project-tag"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <FaRegCalendar size={11} />
                    {formatDate(article.date)}
                  </span>
                  <span className="project-arrow" aria-hidden="true">
                    <FaArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
