import "./globals.css";

export const metadata = {
  title: "EV24 | Le support intelligent pour la mobilité électrique",
  description:
    "Un espace de support alimenté par l'IA pour toutes vos conversations de recharge, des messages aux appels téléphoniques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
