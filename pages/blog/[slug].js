import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import articlesData from "../../data/articles.json";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {FaRegCalendar} from "react-icons/fa6";

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
    const [likes, setLikes] = useState(article.likes);
    const [comments, setComments] = useState(article.comments);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const [newComment, setNewComment] = useState("");

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

    const handleLike = () => {
        setLikes(likes + 1);
    };
    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };
    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    id: comments.length + 1,
                    author: "Current User",
                    author_profile_image: "/path/to/current_user.jpg",
                    content: newComment,
                    date: new Date().toISOString().split("T")[0]
                }
            ]);
            setNewComment("");
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
                <title>{article.title} - Blog</title>
                <meta name="description" content={article.excerpt} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={`https://yourwebsite.com/${article.cover_image}`} />
                <meta property="og:type" content="article" />
            </Head>
            <div className={"blog-bg"}>
            </div>
            <article className={"fc g1"}>
                <header className={"fc g1"}>
                    <div className={"fc g0-5 fw-w jc-sb"} style={{maxWidth:"900px"}}>
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
                        <div className={"fr ai-c g0-5 o0-25"}>
                            <FaRegCalendar/>
                            <time dateTime={article.date}>{formatDate(article.date)}</time>
                        </div>
                    </div>
                </header>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} components={renderers}>{article.content.replace(/\[BASE_URL\]/g, "http://localhost:3000/")}</ReactMarkdown>
                <div className="article-interactions">
                    <button onClick={handleLike}>Like ({likes})</button>
                    <div className="comments">
                        <h3>Comments</h3>
                        {comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <img src={`/${comment.author_profile_image}`} alt={comment.author}/>
                                <div>
                                    <h4>{comment.author}</h4>
                                    <p>{comment.content}</p>
                                    <time dateTime={comment.date}>{formatDate(comment.date)}</time>
                                </div>
                            </div>
                        ))}
                        <div className="add-comment">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button onClick={handleAddComment}>Post Comment</button>
                        </div>
                    </div>
                </div>
                <footer>
                    <h3>Related Articles</h3>
                    <div className="related-articles">
                        {article.related_articles.map(id => {
                            const relatedArticle = articlesData.find(a => a.id === id);
                            return (
                                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                                    <img src={`/${relatedArticle.cover_image}`} alt={relatedArticle.title} />
                                    <h4>{relatedArticle.title}</h4>
                                </Link>
                            );
                        })}
                    </div>
                </footer>
            </article>
        </>
    );
}

export default ArticlePage;
