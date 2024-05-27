import Head from "next/head";
import Image from "next/image";
import {Fragment} from "react";


function Service() {

    return (
        <>
            <Head>

                <link rel="icon" href="/others/favicon.ico"/>
                <link rel={"canonical"} href={"https://mondon.pro/services"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Services</title>
                <meta name="description"
                      content="Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter. Je suis toujours à la recherche de collaborations passionnantes et de nouveaux défis."/>
                <meta name="keywords"
                      content="Arthur Mondon, Contact, Développeur Web, Collaboration, Projets Web, Opportunités"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro/contact"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Entrons en Contact : Arthur Mondon"/>
                <meta property="og:description"
                      content="Je suis ouvert à discuter de vos idées et de voir comment nous pouvons travailler ensemble. Contactez-moi pour toute question ou proposition."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro/contact"/>
                <meta name="twitter:title" content="Arthur Mondon : Discutons de Vos Projets"/>
                <meta name="twitter:description"
                      content="Je suis à votre disposition pour discuter de vos besoins en développement web et de la manière dont nous pouvons collaborer pour réaliser vos objectifs."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>
            <section className={"CP"}>
                <br/>
                <h1 className={"s-font"}>Services proposés</h1>
            </section>
            <section className={"services"}>
                <div className={"service"}>
                    <Image src={"/services/dev.png"} alt={"développement web"} width={200} height={200}/>
                    <h2 className={"s-font"}>Développement Web</h2>
                    <p>Je développe des sites web modernes, rapides et sécurisés, en utilisant les dernières
                        technologies web.
                        Que vous ayez besoin d&apos;un site vitrine, d&apos;un blog, d&apos;une boutique en ligne ou
                        d&apos;une application
                        web, je suis là pour vous aider.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/intranet.png"} alt={"intranet"} width={200} height={200}/>
                    <h2 className={"s-font"}>Intranet</h2>
                    <p>Je crée des intranets sur mesure pour vous aider à gérer vos données et vos processus
                        internes.
                        En utilisant des technologies web avancées, je peux vous aider à améliorer la productivité et
                        l&apos;efficacité de votre entreprise.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/ecommerce.png"} alt={"e-commerce"} width={200} height={200}/>
                    <h2 className={"s-font"}>E-commerce</h2>
                    <p>Je développe des boutiques en ligne performantes et sécurisées pour vous aider à vendre vos
                        produits et services en ligne.
                        En utilisant des solutions e-commerce avancées, je peux vous aider à atteindre vos objectifs de
                        vente en ligne.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/pwa.png"} alt={"PWA"} width={200} height={200}/>
                    <h2 className={"s-font"}>PWA</h2>
                    <p>Je crée des applications web progressives (PWA) pour offrir à vos utilisateurs une expérience
                        mobile optimale.
                        En utilisant les dernières technologies web, je peux vous aider à déployer
                        des applications web rapides, fiables et engageantes.
                    </p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/landing.png"} alt={"landing page"} width={200} height={200}/>
                    <h2 className={"s-font"}>Landing Pages</h2>
                    <p>Je crée des landing pages optimisées pour convertir vos visiteurs en clients.
                        En utilisant des techniques de marketing digital avancées, je peux vous aider à augmenter vos
                        taux de conversion et à atteindre vos objectifs de marketing.</p>
                </div>

                <div className={"service"}>
                    <Image src={"/services/mobile.png"} alt={"application mobile"} width={200} height={200}/>
                    <h2 className={"s-font"}>Applications Mobiles</h2>
                    <p>Je développe des applications mobiles réactives et performantes pour iOS et Android.
                        Que vous ayez besoin d&apos;une application native ou hybride, je peux vous aider à
                        réaliser votre projet.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/seo.png"} alt={"SEO"} width={200} height={200}/>
                    <h2 className={"s-font"}>SEO</h2>
                    <p>Je peux vous aider à améliorer le référencement naturel de votre site web pour augmenter sa
                        visibilité sur les moteurs de recherche.
                        Grâce à des techniques de SEO avancées, je peux vous aider à atteindre les premières positions
                        sur Google.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/services/ux.png"} alt={"UX/UI Design"} width={200} height={200}/>
                    <h2 className={"s-font"}>UX/UI Design</h2>
                    <p>Je crée des interfaces utilisateur intuitives et attrayantes pour offrir à vos utilisateurs une
                        expérience unique.
                        En utilisant les meilleures pratiques de design, je peux vous aider à améliorer la convivialité
                        et la satisfaction de vos utilisateurs.</p>
                </div>
                <div className={"service"}>
                    <Image src={"/logos/wordpress.svg"} alt={"wordpress"} width={200} height={200}/>
                    <h2 className={"s-font"}>WordPress</h2>
                    <p>Je crée des sites web sur mesure avec WordPress, le CMS le plus populaire au monde.
                        Que vous ayez besoin d&apos;un site vitrine, d&apos;un blog ou d&apos;une boutique en ligne, je
                        peux vous aider
                        à réaliser votre projet avec WordPress.</p>
                </div>


            </section>
            <section className={"CP"}>
                <br/>
                <h1 className={"s-font"}>Avantages</h1>
            </section>
            <section>
                <div className="fr fw-w g1 jc-c">
                    <div className="avantage">
                        <h3>Site Accessible et Responsive</h3>
                        <p>
                            Il est essentiel que votre site web soit accessible à tous les utilisateurs, quel que soit
                            leur appareil. Je crée des sites web accessibles et responsive pour offrir une expérience
                            utilisateur optimale.
                        </p>
                    </div>
                    <div className="avantage">
                        <h3>Hébergement gratuit</h3>
                        <p>
                            Pour vous permettre de lancer votre projet en toute tranquillité, je vous offre un
                            hébergement gratuit pour votre site web pendant un an.
                        </p>
                    </div>
                    <div className="avantage">
                        <h3>Interactivité et Personnalisation</h3>
                        <p>
                            Pour rendre votre site web unique et attractif, je crée des animations et des interactions
                            personnalisées pour offrir une expérience utilisateur innovante et engageante.
                        </p>
                    </div>
                    <div className="avantage">
                        <h3>Solutions web sur mesure pour tous secteurs</h3>
                        <p>
                            Je développe des solutions web sur mesure pour répondre aux besoins spécifiques de votre
                            entreprise, quel que soit votre secteur d&apos;activité. Commerce, industrie, services,
                            santé, éducation, culture, etc.
                        </p>
                    </div>
                    <div className="avantage">
                        <h3>Optimisation SEO pour une meilleure visibilité</h3>
                        <p>
                            Il est essentiel d&apos;optimiser le référencement naturel de votre site web pour augmenter
                            sa visibilité sur les moteurs de recherche et attirer plus de visiteurs.
                        </p>
                    </div>
                    <div className="avantage">
                        <h3>Assistance, maintenance et mises à jour</h3>
                        <p>
                            Même après la livraison de votre site web, je reste à votre disposition pour toute
                            assistance, maintenance ou mise à jour nécessaire pour garantir le bon fonctionnement de
                            votre site.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;
