import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import articlesData from "../../data/articles.json";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {FaArrowRightLong, FaRegCalendar, FaTriangleExclamation} from "react-icons/fa6";

export async function getStaticPaths() {
    const paths = articlesData.map(article => ({
        params: { slug: article.slug.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log(params.slug)
    const article = articlesData.find(a => a.slug === params.slug);
    if (!article) {
        return { notFound: true };
    }
    return { props: { article } };
}

function ArticlePage({ article }) {
    const [comments, setComments] = useState(article.comments);
    const [newComment, setNewComment] = useState("");
    const [newCommentAuthor, setNewCommentAuthor] = useState("");

    useEffect(() => {
        if (article.js_to_inject) {
            const script = document.createElement("script");
            script.innerHTML = article.js_to_inject;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [article.js_to_inject]);


    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!newCommentAuthor.trim()) setNewCommentAuthor("Anonyme");

        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                author: newCommentAuthor,
                author_profile_image: "others/default.png",
                content: newComment,
                status: "pending",
                date: new Date().toISOString().split("T")[0]
            };

            setComments([...comments, comment]);

            try {
                const response = await fetch('/api/send-comment-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        author: comment.author,
                        content: comment.content,
                        article: article.title + " - " + article.slug
                    }),
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de l\'envoi de l\'email');
                }
            } catch (error) {
                console.error('Erreur:', error);
            }

            setNewComment("");
            setNewCommentAuthor("");
        }
    };


    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const renderers = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter style={okaidia} language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        }
    };

    return (
        <>
            <Head>
                <title>{article.title} - Blog - Arthur Mondon</title>
                <meta name="description" content={article.excerpt.slice(0, 300)}/>
                <link rel={"canonical"} href={`https://mondon.pro/blog/${article.slug}`}/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content={`https://mondon.pro/${article.slug}`}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={`${article.title.trim()} - Blog - Arthur Mondon`}/>
                <meta property="og:description" content={article.excerpt.slice(0, 300)}/>
                <meta property="og:image" content={`https://mondon.pro/ogs/blogs/${article.slug}.png`}/>

                {/* Twitter Meta Tags */}
                <meta property="twitter:url" content={`https://mondon.pro/${article.slug}`}/>
                <meta name="twitter:title" content={`${article.title.trim()} - Blog - Arthur Mondon`}/>
                <meta property="twitter:type" content="article"/>
                <meta name="twitter:description" content={article.excerpt.slice(0, 300)}/>
                <meta name="twitter:image" content={`https://mondon.pro/ogs/blogs/${article.slug}.png`}/>
            </Head>
            <div className={"blog-bg"}>
            </div>
            <article className={"fc g0-5 BP"}>
                <h1 className={"s-font"}>{article.title}</h1>
                <header className={"fc g1"}>
                    <div className={"fc g0-5 fw-w jc-sb"} style={{maxWidth: "900px"}}>
                        <div className="article-meta BP_card">
                            <div className={"fr g0-5 ai-c"}>
                                <img src={`/${article.author.profile_image}`} alt={article.author.name}
                                     className="author-image"/>
                                <div className={"fc"}>
                                    <h4>{article.author.name}</h4>
                                    <p>{article.author.bio}</p>
                                </div>
                            </div>
                        </div>
                        <p className={"category"}>{article.category}</p>
                        <div className={"fr ai-c g0-5 o0-5 c-primary"}>
                            <FaRegCalendar/>
                            <time dateTime={article.date}>{formatDate(article.date)}</time>
                        </div>
                    </div>
                </header>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}
                               components={renderers}>{article.content.replace(/\[BASE_URL\]/g, process.env.NEXT_PUBLIC_BASE_URL)}</ReactMarkdown>
                {article.related_links.length > 0 && (
                    <>
                        <h3>Liens externes</h3>
                        <div className="related-articles">
                            {article.related_links.map(link => {
                                return (
                                    <iframe key={"link"} src={`${link.iframe}`} frameBorder="0" allowFullScreen="" title="Post intégré"></iframe>
                                );
                            })}
                        </div>
                    </>
                )}
                <div className="article-interactions">
                    <div className="comments fc g0-5">
                        <h3>Commentaires</h3>
                        {comments.map(comment => (
                            <div key={comment.id} className="comment fc g0-5">
                                <div className={"fr g0-5"}>
                                    <img src={`/${comment.author_profile_image}`} alt={comment.author}/>
                                    <div className={"fc"}>
                                        <h4>{comment.author}</h4>
                                        <time dateTime={comment.date} className={"o0-5 fs0-8"}>{formatDate(comment.date)}</time>
                                    </div>
                                </div>
                                {comment.status === "pending" &&
                                    <p className={"fr g0-5 ai-c"} style={{color:"#ff6200"}}><FaTriangleExclamation/>En attente de modération.</p>
                                }
                                <div>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                        {comments.length === 0 && <p className={"o0-5"}>Aucun commentaire pour l&apos;instant.</p>}
                        <form className="add-comment" onSubmit={handleAddComment}>
                            <h3>Ajouter un Commentaire</h3>
                            <div className={"fc g0-25"}>
                                <label htmlFor="comment-author" className={"o0-5"}>Votre nom</label>
                                <input
                                    type="text"
                                    id="comment-author"
                                    value={newCommentAuthor}
                                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className={"fc g0-25"}>
                                <label htmlFor="comment-content" className={"o0-5"}>Votre commentaire</label>
                                <textarea
                                    id="comment-content"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Merci pour cet article !"
                                    required
                                />
                            </div>
                            <button type={"submit"}>Ajouter un commentaire</button>
                        </form>
                    </div>
                </div>
                {article.related_articles.length > 0 && (
                    <>
                        <h3>Articles similaires</h3>
                        <div className="related-articles">
                            {article.related_articles.map(id => {
                                const relatedArticle = articlesData.find(a => a.id === id);
                                return (
                                    <div className={`BS_card featured`}
                                         key={relatedArticle.id}
                                         style={{width: '100%'}}>
                                        <img src={`/${relatedArticle.cover_image}`} alt={relatedArticle.title}/>
                                        <div className="content">
                                            <div className="article-meta BP_card">
                                                <div className={"fr g0-5 ai-c"}>
                                                    <img src={`/${relatedArticle.author.profile_image}`}
                                                         alt={relatedArticle.author.name}
                                                         className="author-image"
                                                         style={{width: "40px", height: "40px"}}/>
                                                    <div className={"fc"}>
                                                        <h4>{relatedArticle.author.name}</h4>
                                                        <p>{relatedArticle.author.bio}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2>{relatedArticle.title}</h2>
                                            <div>
                                                <p className={"category"}>{relatedArticle.category}</p>
                                                <span
                                                    className={"fr g0-5 ai-c o0-5"}><FaRegCalendar/>{formatDate(relatedArticle.date)}</span>
                                            </div>
                                            <p>{relatedArticle.excerpt}</p>
                                            <Link className={"button"} href={`/blog/${relatedArticle.slug}`}>Lire la
                                                suite<FaArrowRightLong/></Link>
                                        </div>
                                    </div>
                            )
                                ;
                            })}
                        </div>
                    </>
                )}
            </article>
        </>
    );
}

export default ArticlePage;
