export const SERVICES = [
  {
    slug: "creation-site-internet",
    num: "01",
    shortTitle: "Sites vitrines & WordPress",
    title: "Création de sites internet",
    metaTitle: "Création de site internet Vaucluse | Arthur Mondon",
    metaDescription:
      "Création de sites vitrines et WordPress pour entreprises et indépendants dans le Vaucluse. Sites modernes, rapides et pensés pour générer des contacts.",
    intro:
      "Un site clair, rapide et mobile-first pour présenter votre activité et convertir vos visiteurs en contacts.",
    forWho: [
      "Indépendants et TPE qui ont besoin d'une présence en ligne crédible",
      "Associations et commerces locaux qui veulent être trouvés facilement",
      "Porteurs de projet qui lancent une activité",
    ],
    deliverables: [
      "Site vitrine responsive",
      "Pages de présentation et formulaires de contact",
      "Intégration WordPress si besoin d'autonomie éditoriale",
      "Mise en ligne et formation de base",
    ],
    relatedProjects: ["private-events-dj-mika", "studer-tinder-mmi"],
  },
  {
    slug: "application-web-sur-mesure",
    num: "02",
    shortTitle: "Applications web sur mesure",
    title: "Développement d'applications web sur mesure",
    metaTitle: "Application web sur mesure | Arthur Mondon",
    metaDescription:
      "Développement d'applications web et outils métier sur mesure : interfaces d'administration, plateformes et workflows adaptés à votre activité.",
    intro:
      "Quand un site vitrine ne suffit plus, je construis l'outil web adapté à vos process.",
    forWho: [
      "Entreprises qui ont besoin d'un outil métier interne",
      "Projets qui demandent des comptes utilisateurs ou une admin",
      "Équipes qui veulent automatiser une partie de leur activité",
    ],
    deliverables: [
      "Application web responsive",
      "Back-office ou espace membre",
      "API et base de données",
      "Déploiement et documentation",
    ],
    relatedProjects: ["buzzer-app", "studer-tinder-mmi"],
  },
  {
    slug: "refonte-site-web",
    num: "03",
    shortTitle: "Refonte & amélioration",
    title: "Refonte et modernisation de site web",
    metaTitle: "Refonte de site web | Arthur Mondon",
    metaDescription:
      "Refonte de site internet : modernisation du design, amélioration des performances, de l'expérience utilisateur et du référencement.",
    intro:
      "Votre site existe déjà, mais il est lent, daté ou peu clair. On le modernise sans tout casser inutilement.",
    forWho: [
      "Entreprises dont le site ne reflète plus l'activité",
      "Sites lents ou difficiles à mettre à jour",
      "Projets qui veulent améliorer conversion et SEO",
    ],
    deliverables: [
      "Audit rapide UX / technique",
      "Nouvelle interface plus claire",
      "Optimisations performance",
      "Améliorations SEO de base",
    ],
    relatedProjects: ["private-events-dj-mika"],
  },
  {
    slug: "deploiement-maintenance",
    num: "04",
    shortTitle: "Déploiement & maintenance",
    title: "Déploiement, hébergement et maintenance",
    metaTitle: "Déploiement et maintenance web | Arthur Mondon",
    metaDescription:
      "Déploiement Docker, hébergement VPS, monitoring et maintenance de sites et applications web. Accompagnement après la mise en ligne.",
    intro:
      "Mettre en ligne ne suffit pas. Je m'occupe aussi du serveur, de la supervision et des évolutions.",
    forWho: [
      "Projets qui ont besoin d'un déploiement maîtrisé",
      "Équipes sans admin système en interne",
      "Sites qui doivent rester stables et à jour",
    ],
    deliverables: [
      "Mise en production Docker / VPS",
      "Configuration HTTPS et domaines",
      "Monitoring et sauvegardes",
      "Maintenance corrective et évolutive",
    ],
    relatedProjects: ["buzzer-app"],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
