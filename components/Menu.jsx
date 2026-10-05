import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar-inner">
        <Link href="/" className="topbar-brand" onClick={() => setOpen(false)}>
          <span className="topbar-brand-name">Arthur Mondon</span>
          <span className="topbar-brand-role">
            Développeur Full-Stack · Vaucluse
          </span>
        </Link>

        <nav className="topbar-nav" aria-label="Navigation principale">
          <ul className="topbar-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary topbar-cta">
            Me contacter
          </Link>
        </nav>

        <button
          type="button"
          className={`topbar-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`topbar-mobile${open ? " is-open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Me contacter
        </Link>
      </div>
    </header>
  );
}

export default Menu;
