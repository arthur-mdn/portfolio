// /pages/index.jsx
import SkillsSection from '../components/HomePage/SkillsSection';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import LinksSection from "@/components/HomePage/LinksSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import Head from "next/head";

export default function Competences() {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/others/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Portfolio</title>
                <meta name="description"
                      content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta name="keywords"
                      content="Arthur Mondon, développeur web, portfolio, solutions web, innovation numérique, auto-entrepreneur, freelance, Eradion, projets numériques, création web, compétences techniques, créativité, expérience en ligne, BUT MMI, Toulon, services informatiques, Provence-Alpes-Côte-d'Azur, Vaucluse, Var"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                <meta property="og:url" content="https://mondon.pro"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Arthur Mondon : Portfolio"/>
                <meta property="og:description"
                      content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro"/>
                <meta name="twitter:title" content="Arthur Mondon : Portfolio"/>
                <meta name="twitter:description"
                      content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <LinksSection/>
        </>
    );
}
