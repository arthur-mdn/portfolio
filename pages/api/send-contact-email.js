import { sendMail } from "../../lib/mail";
import { verifyTurnstileToken } from "../../lib/turnstile";

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || undefined;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { email, name, subject, message, website, turnstileToken } =
    req.body || {};

  if (website) {
    return res.status(200).json({ message: "Email envoyé avec succès" });
  }

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  try {
    const captchaOk = await verifyTurnstileToken(
      turnstileToken,
      getClientIp(req)
    );

    if (!captchaOk) {
      return res.status(400).json({ message: "Captcha invalide" });
    }

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
