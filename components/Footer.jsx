import Link from "next/link";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>Arthur Mondon</strong>
            <p>
              Développeur full-stack freelance
              <br />
              Web &amp; apps natives · Vaucluse
            </p>
          </div>

          <div className="footer-col">
            <h3>Navigation</h3>
            <Link href="/projets">Projets</Link>
            <Link href="/services">Services</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h3>Liens</h3>
            <Link
              href="https://www.linkedin.com/in/arthurmondon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/arthur-mdn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="/others/CV_Arthur_Mondon_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le CV
            </Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/rgpd">Politique de confidentialité</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Arthur Mondon</span>
          <span>Web · iOS · macOS · Vaucluse</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
