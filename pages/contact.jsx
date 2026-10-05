import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvoepbnb");

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <h2>Merci pour votre message</h2>
        <p>Je vous réponds rapidement, en général sous 24 à 48 h.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Adresse email
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label htmlFor="name">
        Nom
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label htmlFor="subject">
        Sujet
        <select id="subject" name="subject" required defaultValue="demande de devis">
          <option value="prise de contact">Prise de contact</option>
          <option value="demande de devis">Demande de devis</option>
          <option value="demande de renseignements">
            Demande de renseignements
          </option>
          <option value="J'ai trouvé un bug">J&apos;ai trouvé un bug</option>
          <option value="J'ai une suggestion">J&apos;ai une suggestion</option>
          <option value="autre">Autre</option>
        </select>
      </label>

      <label htmlFor="message">
        Message
        <textarea id="message" name="message" rows={6} required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={state.submitting}
      >
        {state.submitting ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}

function ContactPage() {
  const title = "Contact | Arthur Mondon — Développeur web freelance";
  const description =
    "Parlez-moi de votre projet de site internet ou d'application web. Développeur freelance dans le Vaucluse, disponible aussi à distance.";

  return (
    <>
      <Head>
        <link rel="icon" href="/others/favicon.ico" />
        <link rel="canonical" href="https://mondon.pro/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Arthur MONDON" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://mondon.pro/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://mondon.pro/others/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://mondon.pro/others/preview.png" />
      </Head>

      <main className="page-shell">
        <div className="container contact-layout">
          <div className="page-hero">
            <p className="section-label">Contact</p>
            <h1>Parlons de votre projet</h1>
            <p>
              Site internet, application métier, refonte ou déploiement :
              expliquez-moi votre besoin et je vous réponds rapidement.
            </p>
            <div className="contact-aside-links">
              <Link
                href="https://www.linkedin.com/in/arthurmondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/arthur-mdn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub />
                GitHub
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default ContactPage;
