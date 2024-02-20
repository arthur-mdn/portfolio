import React from "react";
import LinksSection from "../components/HomePage/LinksSection.jsx"
import { useForm, ValidationError } from '@formspree/react';
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
                    <option value="J'ai trouvé un bug">J'ai trouvé un bug</option>
                    <option value="J'ai une suggestion">J'ai une suggestion</option>
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
            <section className={"CP"}>
                <ContactForm />
            </section>
            <LinksSection />
        </>
    );
}

export default ContactPage;
