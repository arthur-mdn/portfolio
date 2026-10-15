import Head from "next/head";
import Link from "next/link";

export default function FidelityWalletPrivacyPolicy() {
  const title = "Politique de confidentialité — FidelityWallet";
  const description =
    "Politique de confidentialité de l'application iOS FidelityWallet. Aucune donnée n'est collectée.";
  const canonical =
    "https://mondon.pro/projet/fidelity-wallet-ios-app/politique-de-confidentialite";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="page-shell">
        <div className="container" style={{ maxWidth: "46rem" }}>
          <p className="section-label">FidelityWallet</p>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", marginBottom: "1rem" }}
          >
            Politique de confidentialité
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Dernière mise à jour : 15 octobre 2026
          </p>

          <div className="content-block" style={{ marginTop: 0 }}>
            <h2>À propos de l&apos;application</h2>
            <p>
              FidelityWallet est une application iOS développée par Arthur
              Mondon. Elle permet de regrouper ses cartes de fidélité
              directement sur l&apos;iPhone.
            </p>

            <h2>Collecte des données</h2>
            <p>
              <strong>Aucune donnée personnelle n&apos;est collectée.</strong>{" "}
              L&apos;application ne recueille, n&apos;envoie et ne partage
              aucune information avec des serveurs externes, des services tiers
              ou le développeur.
            </p>

            <h2>Stockage local</h2>
            <p>
              Toutes les informations saisies dans l&apos;application (cartes
              de fidélité, préférences, paramètres) sont stockées uniquement en
              local sur votre iPhone. Ces données restent sous votre contrôle et
              ne quittent pas votre appareil.
            </p>

            <h2>Connexion réseau</h2>
            <p>
              FidelityWallet n&apos;établit aucune connexion réseau à des fins
              de collecte, d&apos;analyse ou de publicité. Aucun compte
              utilisateur n&apos;est requis.
            </p>

            <h2>Publicité et suivi</h2>
            <p>
              L&apos;application ne contient pas de publicité, ne fait pas de
              suivi publicitaire et n&apos;utilise pas d&apos;identifiants
              publicitaires.
            </p>

            <h2>Vos droits</h2>
            <p>
              Puisqu&apos;aucune donnée n&apos;est collectée ni transmise, il
              n&apos;existe pas de traitement de données personnelles côté
              serveur. Vous pouvez supprimer à tout moment les informations
              stockées localement en les effaçant dans l&apos;application ou en
              désinstallant FidelityWallet.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant cette politique, vous pouvez
              écrire à{" "}
              <a href="mailto:contact@mondon.pro">contact@mondon.pro</a>.
            </p>

            <p style={{ marginTop: "2rem" }}>
              <Link href="/projet/fidelity-wallet-ios-app" className="projects-link">
                Retour à la fiche FidelityWallet
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
