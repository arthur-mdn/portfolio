// pages/rgpd.js
export default function Rgpd() {
    const goBack = () => {
        window.history.back();
    };
    return (
        <section>
            <div className={"fc f-c g2"}>
                <h2>Politique de Confidentialité et Protection des Données Personnelles</h2>
                Cette politique explique comment je traite les informations personnelles que je collecte via ce site web.

                <h3>Collecte des Données Personnelles</h3>

                La seule collecte de données sur le site se fait à travers le formulaire de contact. Les informations que je recueille comprennent :

                <ul>
                    <li>Votre nom</li>
                    <li>Votre adresse email</li>
                    <li>Votre message</li>
                </ul>

                Ces données sont exclusivement utilisées pour répondre à vos demandes et ne sont en aucun cas partagées avec des tiers ou utilisées à des fins de marketing sans votre consentement explicite.

                <h3>Utilisation des Données</h3>

                Les informations que vous fournissez via le formulaire de contact sont utilisées dans le seul but de vous contacter en retour pour répondre à votre demande. Elles ne sont conservées que le temps nécessaire pour la finalité pour laquelle elles ont été collectées.

                <h3>Sécurité des Données</h3>

                Je prends la sécurité de vos données très au sérieux. Des mesures techniques appropriées ont été mises en place pour protéger vos données contre la perte, la manipulation ou l&apos;accès non autorisé.

                <h3>Vos Droits</h3>

                Conformément au RGPD, vous avez le droit de :

                Accéder aux données personnelles que je détiens à votre sujet
                Demander la correction de vos données personnelles si elles sont inexactes
                Demander la suppression de vos données personnelles
                Vous opposer à certaines formes de traitement
                Pour exercer ces droits, veuillez me contacter à <a href={"mailto:contact@mondon.pro"}>contact@mondon.pro</a>

                <h3>Modifications de la Politique de Confidentialité</h3>

                Je peux occasionnellement mettre à jour cette politique pour refléter des changements dans les pratiques ou pour d&apos;autres raisons opérationnelles, légales ou réglementaires. Je vous encourage à consulter régulièrement cette page pour être informé des mises à jour.

                <h3>Contactez-Nous</h3>

                Si vous avez des questions ou des préoccupations concernant cette politique ou le traitement de vos données personnelles, n&apos;hésitez pas à me contacter à l&apos;adresse suivante : <a href={"mailto:contact@mondon.pro"}>contact@mondon.pro</a>
            </div>
            <br/>
            <br/>
        </section>
    );
}
