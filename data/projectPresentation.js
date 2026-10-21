export const PROJECT_FILTERS = [
  { id: "all", label: "Tous" },
  { id: "websites", label: "Sites web" },
  { id: "webapps", label: "Applications web" },
  { id: "native", label: "iOS / macOS" },
  { id: "other", label: "Autres" },
];

export function getProjectCategory(project) {
  if (["Application macOS", "Application mobile"].includes(project.type)) return "native";
  if (project.type.toLowerCase() === "site web") return "websites";
  if (["WebApp", "Écran interactif"].includes(project.type)) return "webapps";
  return "other";
}

// Explicit context, independent of the project's platform or current availability.
const PROFESSIONAL = new Set([
  "karaoke-and-propositions", "elevage-hitch", "private-events-dj-mika",
  "displayhub", "mariage-videobooth", "askeo", "du-kart-a-la-f1",
  "visites-virtuelles", "eradion", "generateur-de-signatures-email",
  "calendry", "funkylike", "edissyum-wordpress",
]);
const ACADEMIC = new Set([
  "burger-maker", "callmemaybe", "studer-tinder-mmi", "save-the-turtles",
  "atmosphair-pwa-qualite-de-l-air",
]);

export function getProjectContext(project) {
  if (PROFESSIONAL.has(project.slug)) return "Projet professionnel";
  if (ACADEMIC.has(project.slug)) return "Projet scolaire";
  return "Projet personnel";
}

export const PROJECT_VISUALS = {
  "blindset-studio": {
    status: "Bêta publique gratuite",
    hero: {
      src: "/projects/blindset-studio/cockpit.webp",
      alt: "Cockpit de BlindSet Studio : programme du quiz, commandes d’animation et suivi de la question en cours sur Mac.",
      width: 2400, height: 1710,
    },
    gallery: [
      {
        src: "/projects/blindset-studio/editor.webp", width: 2600, height: 1690,
        title: "Préparer un quiz à votre image",
        alt: "Éditeur de quiz BlindSet Studio avec bibliothèque musicale, ordre des morceaux et réglage des extraits.",
        caption: "Importer ses morceaux, choisir le début de chaque extrait et préparer les propositions avant la soirée.",
      },
      {
        src: "/projects/blindset-studio/public.webp", width: 2860, height: 2305,
        title: "Un écran dédié au public",
        alt: "Écran public de BlindSet Studio affichant une question musicale et quatre propositions de réponse.",
        caption: "Afficher la question et les propositions sur un second écran, sans montrer les commandes de l’animateur.",
      },
      {
        src: "/projects/blindset-studio/auto.webp", width: 1050, height: 666,
        title: "Garder la main sur le rythme",
        alt: "Commandes du mode automatique de BlindSet Studio.",
        caption: "Choisir entre le pilotage manuel des étapes et un déroulement automatique du quiz.",
      },
    ],
  },
};
