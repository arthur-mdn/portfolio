// /pages/blog.jsx
import Head from 'next/head';
import BlogSection from "@/components/HomePage/BlogSection";

export default function Blog() {

    return (
        <>
            <Head>
                <link rel={"canonical"} href={"https://mondon.pro/blog"} />
                <link rel="icon" href="/others/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Arthur Mondon : Blog</title>
                <meta name="description"
                      content="Bienvenue sur le blog d'Arthur Mondon. Explorez des articles sur le développement web, les technologies innovantes, et des conseils pour booster votre carrière de développeur." />
                <meta name="keywords"
                      content="Arthur Mondon, Blog, Développement Web, Technologies, Carrière, Conseils, Innovation, Articles" />
                <meta name="author" content="Arthur MONDON" />
                <meta name="robots" content="index, follow" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Arthur Mondon : Blog" />
                <meta property="og:description"
                      content="Découvrez des articles passionnants sur le développement web, les dernières technologies et des conseils pratiques pour les développeurs. Suivez le blog d'Arthur Mondon." />
                <meta property="og:image" content="https://mondon.pro/others/preview.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="mondon.pro" />
                <meta property="twitter:url" content="https://mondon.pro/blog" />
                <meta name="twitter:title" content="Arthur Mondon : Blog" />
                <meta name="twitter:description"
                      content="Plongez dans le blog d'Arthur Mondon pour des articles sur le développement web, des technologies innovantes et des conseils de carrière pour développeurs." />
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png" />
            </Head>
            <BlogSection limit={false}/>
        </>
    );
}
