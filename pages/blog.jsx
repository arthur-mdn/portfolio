import Head from "next/head";
import BlogSection from "@/components/HomePage/BlogSection";

export default function Blog() {
  const title = "Blog | Arthur Mondon — Développement web";
  const description =
    "Articles sur le développement web, les performances, le SEO et les outils techniques. Blog d'Arthur Mondon, développeur web freelance.";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://mondon.pro/blog" />
        <link rel="icon" href="/others/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Arthur MONDON" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://mondon.pro/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container">
          <div className="page-hero">
            <p className="section-label">Blog</p>
            <h1>Articles et notes techniques</h1>
            <p>
              Développement web, outils, performances et retours d&apos;expérience.
            </p>
          </div>
        </div>
        <BlogSection showIntro={false} />
      </main>
    </>
  );
}
