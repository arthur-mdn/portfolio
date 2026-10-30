import { sendMail } from "../../lib/mail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { author, content, article } = req.body || {};

  if (!author || !content || !article) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    await sendMail({
      subject: "Nouveau commentaire sur votre portfolio",
      text: [
        `Vous avez reçu un nouveau commentaire de ${author}.`,
        "",
        content,
        "",
        `Article: ${article}`,
      ].join("\n"),
    });

    return res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("send-comment-email:", error.message);
    return res.status(500).json({
      message: "Erreur lors de l'envoi de l'email",
      error: error.message,
    });
  }
}
