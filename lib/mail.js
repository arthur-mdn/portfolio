import nodemailer from "nodemailer";

export function createMailTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Configuration SMTP incomplète");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function sendMail({ subject, text, replyTo }) {
  const transporter = createMailTransport();
  const fromUser = process.env.SMTP_USER;
  const to = process.env.RECIPIENT_EMAIL;

  if (!to) {
    throw new Error("RECIPIENT_EMAIL manquant");
  }

  return transporter.sendMail({
    from: `"Portfolio" <${fromUser}>`,
    to,
    replyTo,
    subject,
    text,
  });
}
