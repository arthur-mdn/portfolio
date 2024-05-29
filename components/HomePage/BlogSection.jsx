import articlesData from "../../data/articles.json";
import Link from "next/link";
import {FaArrowRightLong, FaEye, FaRegCalendar, FaTriangleExclamation} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";

export default function BlogSection() {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const sortedArticles = articlesData.sort((b, a) => a.date.localeCompare(b.date));

    const featuredArticle = sortedArticles[0];

    const otherArticles = sortedArticles.slice(1);

    return (
        <>
            <section className=" fc g1">
                <h2 className={"s-font"}>Articles récents</h2>

                {featuredArticle && (
                    <div className="featured-article">
                        <div style={{ width: '100%' }} className="BS_card featured" key={featuredArticle.id}>
                            <img src={`/${featuredArticle.cover_image}`} alt={featuredArticle.title} />
                            <div className="content">
                                {featuredArticle.disclaimer && (
                                    <div className={"PP_disclaimer fr g1 ai-c"} style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        margin: '1rem',
                                        padding: '0.5rem 0.5rem',
                                        borderRadius: '0.5rem'
                                    }} title={"Une attention particulière est requise pour ce projet"}>
                                        <FaTriangleExclamation size={"2rem"}/>
                                    </div>
                                )}
                                <div className="article-meta BP_card">
                                    <div className={"fr g0-5 ai-c"}>
                                        <img src={`/${featuredArticle.author.profile_image}`}
                                             alt={featuredArticle.author.name}
                                             className="author-image" style={{width: "40px", height: "40px"}}/>
                                        <div className={"fc"}>
                                            <h4>{featuredArticle.author.name}</h4>
                                            <p>{featuredArticle.author.bio}</p>
                                        </div>
                                    </div>
                                </div>
                                <h2>{featuredArticle.title}</h2>
                                <div>
                                    <p className={"category"}>{featuredArticle.category}</p>
                                    <span
                                        className={"fr g0-5 ai-c o0-5"}><FaRegCalendar/>{formatDate(featuredArticle.date)}</span>
                                </div>
                                <p>{featuredArticle.excerpt}</p>
                                <Link className={"button"} href={`/blog/${featuredArticle.slug}`}>Lire la
                                    suite<FaArrowRightLong/></Link>
                            </div>
                        </div>
                    </div>
                )}

                <div className={"fr fw-w"}>
                    {otherArticles.map(article => (
                        <Link href={`/blog/${article.slug}`} style={{width: '100%'}} className="PS_card"
                              key={article.id}>
                        <img src={`/${article.cover_image}`} alt={article.title}/>
                            <div className="content">
                                {article.disclaimer && (
                                    <div className={"PP_disclaimer fr g1 ai-c"} style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        margin: '1rem',
                                        padding: '0.5rem 0.5rem',
                                        borderRadius: '0.5rem'
                                    }} title={"Une attention particulière est requise pour ce projet"}>
                                        <FaTriangleExclamation size={"2rem"} />
                                    </div>
                                )}
                                <p>{article.category}</p>
                                <span>{formatDate(article.date)}</span>
                                <h3>{article.title}</h3>
                                <button type="button" className="button"><FaArrowRightLong /></button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
