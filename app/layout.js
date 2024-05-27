export const metadata = {
  title: "Arthur Mondon - Portfolio NextJS",
  description: "Portfolio d'Arthur Mondon, développeur web fullstack. Site réalisé avec NextJS.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
