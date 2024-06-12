import articlesData from "../../data/articles.json";
import Link from "next/link";
import { FaArrowRightLong, FaRegCalendar } from "react-icons/fa6";

export default function BlogSection() {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const sortedArticles = articlesData.sort((b, a) => a.date.localeCompare(b.date));
    const featuredArticleId = sortedArticles[0]?.id;

    return (
        <>
            <section className="fc g1">
                <h2 className={"s-font"}>Articles récents</h2>

                <div className={"fr fw-w g1 ai-fs"}>
                    {sortedArticles.map(article => (
                        <div className={`BS_card ${article.id === featuredArticleId ? "featured" : ""}`} key={article.id} style={{ width: article.id === featuredArticleId ? '100%' : 'auto' }}>
                            <img src={`/${article.cover_image}`} alt={article.title} />
                            <div className="content">
                                <div className="article-meta BP_card">
                                    <div className={"fr g0-5 ai-c"}>
                                        <img src={`/${article.author.profile_image}`}
                                             alt={article.author.name}
                                             className="author-image" style={{ width: "40px", height: "40px" }} />
                                        <div className={"fc"}>
                                            <h4>{article.author.name}</h4>
                                            <p>{article.author.bio}</p>
                                        </div>
                                    </div>
                                </div>
                                <h2>{article.title}</h2>
                                <div>
                                    <p className={"category"}>{article.category}</p>
                                    <span className={"fr g0-5 ai-c o0-5"}><FaRegCalendar />{formatDate(article.date)}</span>
                                </div>
                                <p>{article.excerpt}</p>
                                <Link className={"button"} href={`/blog/${article.slug}`}>Lire la suite<FaArrowRightLong /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
