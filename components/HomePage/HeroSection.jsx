import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow fade-up">
            Développeur web freelance · Vaucluse
          </p>
          <h1 className="hero-title fade-up fade-up-delay-1">
            Des idées en
            <br />
            <span className="accent">solutions web.</span>
          </h1>
          <p className="hero-text fade-up fade-up-delay-2">
            Développeur full-stack freelance dans le Vaucluse, je conçois des
            sites internet et applications web sur mesure, de la conception au
            déploiement.
          </p>
          <div className="hero-actions fade-up fade-up-delay-3">
            <Link href="/#realisations" className="btn btn-primary">
              Découvrir mes projets
              <FaArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Parler de votre projet
            </Link>
          </div>
        </div>

        <div className="hero-visual fade-up fade-up-delay-2">
          <div className="hero-blob hero-blob-1" aria-hidden="true" />
          <div className="hero-blob hero-blob-2" aria-hidden="true" />
          <div className="hero-blob hero-blob-3" aria-hidden="true" />

          <div className="hero-hand" aria-hidden="true">
            <div>Développement</div>
            <div>Design</div>
            <div>Stratégie</div>
            <svg viewBox="0 0 90 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 14c18-10 36 0 48 14 8 10 16 16 26 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M70 34l14 12-16 2"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="hero-memoji-wrap">
            <Image
              src="/illustrations/memoji.webp"
              alt="Memoji d'Arthur Mondon, développeur web freelance"
              width={480}
              height={620}
              className="hero-memoji"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
