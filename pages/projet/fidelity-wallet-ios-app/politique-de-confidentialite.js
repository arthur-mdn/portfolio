import Head from "next/head";

export default function FidelityWalletPrivacyPolicy() {
  const title = "Politique de confidentialité — FidelityWallet";
  const description =
    "Politique de confidentialité de FidelityWallet : aucune donnée personnelle collectée, stockage entièrement local sur l'appareil.";
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
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              marginBottom: "1rem",
            }}
          >
            Politique de confidentialité
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Dernière mise à jour : 15 octobre 2026
          </p>

          <div className="content-block" style={{ marginTop: 0 }}>
            <h2>1. Présentation</h2>
            <p>
              FidelityWallet est une application mobile permettant de conserver
              et de gérer des cartes de fidélité directement sur un appareil
              Apple.
            </p>
            <p>
              L&apos;application a été conçue pour fonctionner entièrement hors
              ligne et respecter la vie privée de ses utilisateurs. Elle est
              éditée par Arthur Mondon.
            </p>

            <h2>2. Collecte des données personnelles</h2>
            <p>
              FidelityWallet ne collecte, ne transmet et ne revend aucune donnée
              personnelle.
            </p>
            <p>
              L&apos;utilisation de l&apos;application ne nécessite aucune
              inscription, aucun compte utilisateur et aucune connexion
              Internet.
            </p>
            <p>
              Aucun système de suivi publicitaire ou d&apos;analyse du
              comportement des utilisateurs n&apos;est intégré à
              l&apos;application. Aucun identifiant publicitaire n&apos;est
              utilisé.
            </p>

            <h2>3. Stockage des informations</h2>
            <p>
              Les informations enregistrées dans FidelityWallet sont conservées
              localement sur l&apos;appareil de l&apos;utilisateur.
            </p>
            <p>Elles peuvent notamment comprendre :</p>
            <ul>
              <li>Les cartes de fidélité ajoutées</li>
              <li>Les numéros et codes-barres associés aux cartes</li>
              <li>Les codes PIN éventuellement enregistrés</li>
              <li>Les préférences et paramètres de l&apos;application</li>
            </ul>
            <p>
              Ces informations ne sont pas transmises aux serveurs de
              l&apos;éditeur. Elles restent sous le seul contrôle de
              l&apos;utilisateur, sur son iPhone.
            </p>

            <h2>4. Utilisation de l&apos;appareil photo</h2>
            <p>
              FidelityWallet peut demander l&apos;autorisation d&apos;accéder à
              l&apos;appareil photo afin de scanner les codes-barres des cartes
              de fidélité.
            </p>
            <p>
              L&apos;appareil photo est utilisé uniquement pour cette
              fonctionnalité. Les images capturées lors du scan ne sont pas
              transmises à un serveur distant.
            </p>

            <h2>5. Sauvegarde et restauration</h2>
            <p>
              FidelityWallet permet d&apos;exporter et d&apos;importer des
              sauvegardes contenant les cartes enregistrées.
            </p>
            <p>
              L&apos;utilisateur choisit librement où conserver et partager les
              fichiers exportés.
            </p>
            <p>
              Si une sauvegarde est enregistrée auprès d&apos;un service tiers,
              notamment un service de stockage en ligne, son traitement dépend
              des conditions de confidentialité de ce service.
            </p>

            <h2>6. Partage des données</h2>
            <p>
              FidelityWallet ne partage aucune donnée personnelle avec des
              annonceurs, des partenaires commerciaux ou des services
              d&apos;analyse.
            </p>
            <p>
              Les informations enregistrées restent sous le contrôle de
              l&apos;utilisateur.
            </p>

            <h2>7. Conservation et suppression des données</h2>
            <p>
              Les données sont conservées localement tant que
              l&apos;utilisateur les maintient dans l&apos;application.
            </p>
            <p>
              L&apos;utilisateur peut supprimer ses cartes directement depuis
              FidelityWallet.
            </p>
            <p>
              La désinstallation de l&apos;application supprime normalement ses
              données locales, sous réserve des sauvegardes éventuellement
              conservées par l&apos;utilisateur ou par le système
              d&apos;exploitation.
            </p>

            <h2>8. Services tiers</h2>
            <p>
              FidelityWallet ne nécessite aucun service externe pour
              fonctionner.
            </p>
            <p>
              Les noms et logos des enseignes éventuellement présentés servent
              uniquement à identifier les cartes de fidélité correspondantes.
            </p>
            <p>
              FidelityWallet est une application indépendante et n&apos;est ni
              affiliée ni officiellement associée aux enseignes représentées.
            </p>

            <h2>9. Droits des utilisateurs</h2>
            <p>
              Puisqu&apos;aucune donnée personnelle n&apos;est collectée ni
              hébergée par l&apos;éditeur, il n&apos;existe pas de traitement
              de données personnelles côté serveur lié à l&apos;usage de
              l&apos;application.
            </p>
            <p>
              L&apos;utilisateur conserve à tout moment la maîtrise des
              informations stockées localement : consultation, modification,
              export, suppression ou désinstallation.
            </p>

            <h2>10. Modifications de cette politique</h2>
            <p>
              Cette politique de confidentialité pourra être mise à jour afin
              de refléter les évolutions de l&apos;application.
            </p>
            <p>
              La version en vigueur sera accessible depuis cette page.
            </p>

            <h2>11. Contact</h2>
            <p>
              Pour toute question concernant FidelityWallet ou la protection
              des données personnelles, vous pouvez contacter son éditeur :
            </p>
            <ul>
              <li>Arthur Mondon</li>
              <li>
                Email :{" "}
                <a href="mailto:contact@mondon.pro">contact@mondon.pro</a>
              </li>
              <li>
                Site :{" "}
                <a href="https://mondon.pro">https://mondon.pro</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
