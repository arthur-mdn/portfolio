// /pages/api/send-comment-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { author, content, article } = req.body;

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        let mailOptions = {
            from: `"Portfolio Blog" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: 'Nouveau Commentaire sur votre Portfolio',
            text: `Vous avez reçu un nouveau commentaire de ${author}:\n\n${content}\n\nArticle: ${article}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email envoyé avec succès' });
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
