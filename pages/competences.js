// /pages/competences.js
import SkillsSection from '../components/HomePage/SkillsSection';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Head from "next/head";

export default function Competences() {
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/others/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel={"canonical"} href={"https://mondon.pro/competences"}/>
                <title>Arthur Mondon : Mes Compétences</title>
                <meta name="description"
                      content="Je vous invite à découvrir mes compétences en développement web, couvrant à la fois le frontend et le backend, ma maîtrise des bases de données et mon utilisation efficace des outils de développement."/>
                <meta name="keywords"
                      content="Arthur Mondon, Compétences, Développement Web, Frontend, Backend, Bases de données, Outils de développement, HTML, CSS, JavaScript, Angular, React, NodeJS, PHP, MySQL, MongoDB, Docker, Git"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro/competences"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Découvrez Mes Compétences : Arthur Mondon"/>
                <meta property="og:description"
                      content="Plongez dans mon univers de compétences en développement web. De la conception frontend à l'architecture backend, en passant par la gestion de bases de données et l'utilisation d'outils modernes de développement."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro/competences"/>
                <meta name="twitter:title" content="Arthur Mondon : Découvrez Mes Compétences"/>
                <meta name="twitter:description"
                      content="Je vous présente mon éventail de compétences en développement web. Découvrez comment je combine créativité et expertise technique pour créer des solutions web innovantes."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>

            <SkillsSection/>
        </>
    );
}
