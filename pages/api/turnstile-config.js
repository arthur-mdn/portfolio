export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    process.env.TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return res.status(503).json({ message: "Clé Turnstile manquante" });
  }

  return res.status(200).json({ siteKey });
}
