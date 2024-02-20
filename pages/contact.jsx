import React from "react";
import LinksSection from "../components/HomePage/LinksSection.jsx"
import { useForm, ValidationError } from '@formspree/react';
import Head from "next/head";
function ContactForm() {
    const [state, handleSubmit] = useForm("xvoepbnb");
    if (state.succeeded) {
        return <p>Merci pour votre message !</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Addresse email
                <input
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </label>
            <label htmlFor="name">
                Nom
                <input
                    id="name"
                    type="text"
                    name="name"
                    required={true}
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </label>
            <label htmlFor="subject">
                Sujet
                <select
                    id="subject"
                    name="subject"
                    required={true}
                >
                    <option value="prise de contact">Prise de contact</option>
                    <option value="demande de devis">Demande de devis</option>
                    <option value="demande de renseignements">Demande de renseignements</option>
                    <option value="J'ai trouvé un bug">J&apos;ai trouvé un bug</option>
                    <option value="J'ai une suggestion">J&apos;ai une suggestion</option>
                    <option value="autre">Autre</option>
                </select>
            </label>
            <label htmlFor="message">
                Message
                <textarea
                    id="message"
                    name="message"
                    required={true}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </label>
            <button type="submit" disabled={state.submitting}>
                Envoyer
            </button>
        </form>
    );
}
function ContactPage() {

    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <link rel="icon" href="/others/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Arthur Mondon : Contactez-Moi</title>
                <meta name="description" content="Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter. Je suis toujours à la recherche de collaborations passionnantes et de nouveaux défis."/>
                <meta name="keywords" content="Arthur Mondon, Contact, Développeur Web, Collaboration, Projets Web, Opportunités"/>
                <meta name="author" content="Arthur MONDON"/>
                <meta name="robots" content="index, follow"/>

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://mondon.pro/contact"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Entrons en Contact : Arthur Mondon"/>
                <meta property="og:description" content="Je suis ouvert à discuter de vos idées et de voir comment nous pouvons travailler ensemble. Contactez-moi pour toute question ou proposition."/>
                <meta property="og:image" content="https://mondon.pro/others/preview.png"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="mondon.pro"/>
                <meta property="twitter:url" content="https://mondon.pro/contact"/>
                <meta name="twitter:title" content="Arthur Mondon : Discutons de Vos Projets"/>
                <meta name="twitter:description" content="Je suis à votre disposition pour discuter de vos besoins en développement web et de la manière dont nous pouvons collaborer pour réaliser vos objectifs."/>
                <meta name="twitter:image" content="https://mondon.pro/others/preview.png"/>
            </Head>
            <section className={"CP"}>
                <ContactForm />
            </section>
            <LinksSection />
        </>
    );
}

export default ContactPage;
