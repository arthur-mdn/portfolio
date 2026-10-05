import ExpertiseSection from "@/components/HomePage/ExpertiseSection";
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import TechnologiesSection from "@/components/HomePage/TechnologiesSection";
import MethodSection from "@/components/HomePage/MethodSection";
import LocationSection from "@/components/HomePage/LocationSection";
import FinalCtaSection from "@/components/HomePage/FinalCtaSection";
import BlogSection from "@/components/HomePage/BlogSection";
import Head from "next/head";

export default function HomePage() {
  const title = "Développeur Web Freelance Vaucluse | Arthur Mondon";
  const description =
    "Développeur web freelance dans le Vaucluse : sites internet, applications web et apps natives iOS/macOS pour entreprises et indépendants à Avignon, Carpentras et en Provence.";

  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arthur Mondon",
    jobTitle: "Développeur full-stack freelance",
    description,
    url: "https://mondon.pro",
    image: "https://mondon.pro/illustrations/memoji.webp",
    email: "mailto:contact@mondon.pro",
    telephone: "+33783520757",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Carpentras",
      addressRegion: "Vaucluse",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/in/arthurmondon/",
      "https://github.com/arthur-mdn",
      "https://www.youtube.com/@arthurmdn",
    ],
    knowsAbout: [
      "Développement web",
      "Applications iOS",
      "Applications macOS",
      "Full-stack",
      "React",
      "Swift",
      "SwiftUI",
      "Node.js",
      "Docker",
    ],
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Arthur Mondon — Développeur full-stack freelance",
    description,
    url: "https://mondon.pro",
    image: "https://mondon.pro/others/preview.png",
    telephone: "+33783520757",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Vaucluse" },
      { "@type": "City", name: "Avignon" },
      { "@type": "City", name: "Carpentras" },
      { "@type": "AdministrativeArea", name: "Provence" },
      { "@type": "Country", name: "France" },
    ],
    priceRange: "$$",
    provider: {
      "@type": "Person",
      name: "Arthur Mondon",
    },
  };

  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arthur Mondon",
    url: "https://mondon.pro",
    description,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/others/favicon.ico" />
        <link rel="canonical" href="https://mondon.pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="développeur web freelance Vaucluse, développeur full-stack, création site internet Avignon, application web sur mesure Carpentras, développeur Provence"
        />
        <meta name="author" content="Arthur MONDON" />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content="https://mondon.pro" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mondon.pro" />
        <meta property="twitter:url" content="https://mondon.pro" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://mondon.pro/others/preview.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
      </Head>

      <div className="home-page">
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <TechnologiesSection />
        <AboutSection />
        <MethodSection />
        <LocationSection />
        <BlogSection limit={3} />
        <FinalCtaSection />
      </div>
    </>
  );
}
