// /pages/index.jsx
import SkillsSection from '../components/HomePage/SkillsSection';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import LinksSection from "@/components/HomePage/LinksSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import Head from "next/head";
import BlogSection from "@/components/HomePage/BlogSection";

export default function Competences() {
    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Arthur Mondon",
        "url": "https://mondon.pro",
        "logo": "https://mondon.pro/others/favicon.ico",
        "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+33783520757",
            "contactType": "service client"
        }],
        "sameAs": [
            "https://www.linkedin.com/in/arthurmondon/",
            "https://github.com/arthur-mdn",
            "https://www.youtube.com/@arthurmdn"
        ]
    };

    const schemaOrgJSONLDPerson = {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Arthur Mondon",
        "jobTitle": "Développeur Web Fullstack",
        "description": "Développeur web passionné, spécialisé dans la création de solutions web innovantes.",
        "url": "https://mondon.pro",
        "image": "https://mondon.pro/illustrations/memoji2.png",
        "sameAs": [
            "https://www.linkedin.com/in/arthurmondon/",
            "https://github.com/arthur-mdn",
            "https://www.youtube.com/@arthurmdn",
            "https://eradion.fr"
        ],
        "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Node.js", "NextJS", "MongoDB", "SQL", "Vite"]
    }

    return (
        <>
            <Head>
                <link rel="icon" href="/others/favicon.ico"/>
                <link rel={"canonical"} href={"https://mondon.pro"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Portfolio</title>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}></script>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLDPerson) }}></script>
                <meta name="description"
                      content="Arthur Mondon, développeur web fullstack freelance. Solutions web innovantes. Découvrez mon portfolio répertoriant mes projets publics. Originaire du Vaucluse."/>
                <meta name="keywords"
                      content="Arthur Mondon, développeur web, portfolio, solutions web, innovation numérique, auto-entrepreneur, freelance, Eradion, projets numériques, création web, compétences techniques, créativité, expérience en ligne, BUT MMI, Toulon, services informatiques, Provence-Alpes-Côte-d'Azur, Vaucluse, Var"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:url" content="https://mondon.pro"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Arthur Mondon : Portfolio"/>
                <meta property="og:description"
                      content="Arthur Mondon, développeur web fullstack freelance. Solutions web innovantes. Découvrez mon portfolio répertoriant mes projets publics. Originaire du Vaucluse."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro"/>
                <meta name="twitter:title" content="Arthur Mondon : Portfolio"/>
                <meta name="twitter:description"
                      content="Arthur Mondon, développeur web fullstack freelance. Solutions web innovantes. Découvrez mon portfolio répertoriant mes projets publics. Originaire du Vaucluse."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <BlogSection limit={2}/>
            <LinksSection/>
        </>
    );
}
