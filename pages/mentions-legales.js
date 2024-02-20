// pages/mentions-legales.js
import Head from "next/head";

export default function MentionsLegales() {
    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/others/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Mentions Légales</title>
                <meta name="description" content="RGPD"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="noindex"/>
            </Head>
            <section>
                <div className={"fc f-c g2"}>
                    <h1>Mentions Légales</h1>
                    Bienvenue sur <a href={"https://mondon.pro"}>https://mondon.pro</a>
                    Le site est édité par Arthur Mondon, ci-après « l’Éditeur ».

                    <h3>Informations légales</h3>
                    L’Éditeur : Arthur Mondon
                    Contact : <a href={"mailto:contact@mondon.pro"}>contact@mondon.pro</a>
                    <a href={"https://eradion.fr"}> SIRET : Voir auto-entreprise </a>

                    <h3>Hébergement</h3>
                    Le site est hébergé par 1&1 IONOS, dont le siège est situé à Montabaur, Allemagne.

                    <h3>Propriété intellectuelle</h3>
                    Le contenu du site, incluant les textes, images, graphismes et logo, est la propriété de l’Éditeur,
                    sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission
                    ou publication, même partielle, de ces différents éléments est strictement interdite sans
                    l&apos;accord exprès par écrit de l’Éditeur.

                    <h3>Responsabilité</h3>
                    Les informations fournies sur le site sont à titre informatif. L’Éditeur ne saurait garantir
                    l&apos;exactitude, la complétude, l&apos;actualité des informations diffusées. L’Éditeur met tout en
                    œuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne
                    saurait être tenu pour responsable des erreurs ou d’une absence de disponibilité des informations
                    sur son site.

                    <h3>Loi applicable</h3>
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
                    français seront seuls compétents.

                    <h3>Modifications des mentions légales</h3>
                    L’Éditeur se réserve le droit de modifier, à tout moment et sans préavis, les présentes mentions
                    afin de les adapter aux évolutions du site et/ou de son exploitation.

                    <h3>Contactez-Nous</h3>
                    Pour toute question ou demande d&apos;information concernant le site, ou tout signalement de contenu
                    ou d’activités illicites, l&apos;utilisateur peut contacter l’Éditeur à l’adresse suivante : <a
                    href={"mailto:contact@mondon.pro"}>contact@mondon.pro</a>
                </div>
            </section>
        </>

    );
}
