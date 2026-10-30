import { sendMail } from "../../lib/mail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { email, name, subject, message } = req.body || {};

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    await sendMail({
      subject: `[Contact] ${subject}`,
      replyTo: email,
      text: [
        `Nouveau message depuis le formulaire de contact.`,
        "",
        `Nom: ${name}`,
        `Email: ${email}`,
        `Sujet: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("send-contact-email:", error.message);
    return res.status(500).json({
      message: "Erreur lors de l'envoi de l'email",
      error: error.message,
    });
  }
}
