import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <Helmet>
                <title>Arthur Mondon : Portfolio</title>
                <meta name="description" content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta name="keywords" content="Arthur Mondon, développeur web, portfolio, solutions web, innovation numérique, auto-entrepreneur, freelance, Eradion, projets numériques, création web, compétences techniques, créativité, expérience en ligne, BUT MMI, Toulon, services informatiques, Provence-Alpes-Côte-d'Azur, Vaucluse, Var"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Arthur Mondon : Portfolio"/>
                <meta property="og:description" content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro"/>
                <meta name="twitter:title" content="Arthur Mondon : Portfolio"/>
                <meta name="twitter:description" content="Je suis Arthur Mondon, développeur web passionné. À travers mon portfolio, découvrez ma passion pour la création de solutions web innovantes. En tant qu'auto-entrepreneur et freelance, j'ai créé 'Eradion' pour réaliser des projets numériques captivants. Ma spécialité réside dans le mélange de compétences techniques et de créativité, visant à offrir des expériences en ligne inoubliables. Actuellement étudiant en BUT MMI à Toulon. Je propose mes services en Provence-Alpes-Côte-d'Azur dans le Vaucluse et le Var."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>


            </Helmet>
            <ScrollToTop />
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/competences" element={<SkillsSection />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/projet/:slug" element={<ProjectPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
