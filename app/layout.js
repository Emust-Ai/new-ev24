import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.ev24.support";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "EV24 | Le support intelligent pour la mobilité électrique",
  description:
    "Un espace de support alimenté par l'IA pour toutes vos conversations de recharge, des messages aux appels téléphoniques.",
  keywords: [
    "support mobilité électrique",
    "assistance bornes de recharge",
    "helpdesk CPO",
    "support eMSP",
    "service client IA",
    "support utilisateurs véhicules électriques",
  ],
  applicationName: "EV24",
  authors: [{ name: "Ask Innovation", url: "https://www.ask-innovation.com" }],
  creator: "Ask Innovation",
  publisher: "Ask Innovation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "EV24",
    title: "EV24 | Le support intelligent pour la mobilité électrique",
    description: "Automatisez l'assistance des utilisateurs de bornes et centralisez messages, appels et incidents de recharge.",
    images: [{
      url: "https://www.ev24.io/wp-content/uploads/2022/08/Logo-EV24_Plan-de-travail-1-4-e1661949153322.png",
      width: 1200,
      height: 630,
      alt: "EV24, le support intelligent pour la mobilité électrique",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV24 | Support intelligent pour la mobilité électrique",
    description: "Automatisez l'assistance des utilisateurs de bornes depuis un espace unique.",
    images: ["https://www.ev24.io/wp-content/uploads/2022/08/Logo-EV24_Plan-de-travail-1-4-e1661949153322.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Ask Innovation",
        url: "https://www.ask-innovation.com",
        email: "front@ask-innovation.com",
        sameAs: ["https://www.linkedin.com/company/ask-innovation/"],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "EV24",
        url: siteUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: ["fr", "en"],
        description: "Plateforme de support client assistée par IA pour les CPO, eMSP et opérateurs de recharge électrique.",
        provider: { "@id": `${siteUrl}/#organization` },
        featureList: [
          "Support client omnicanal",
          "Assistance par intelligence artificielle",
          "Transcription des appels VoIP",
          "Intégrations CPO et eMSP",
          "Contexte opérationnel des bornes de recharge",
        ],
      },
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script id="ask-innovation-chatwoot" strategy="afterInteractive">
          {`
            (function(d,t) {
              var BASE_URL="https://app.ask-innovation.com";
              var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
              g.src=BASE_URL+"/packs/js/sdk.js";
              g.async=true;
              s.parentNode.insertBefore(g,s);
              g.onload=function() {
                window.chatwootSDK.run({
                  websiteToken:"wqRwkinXYn2FTLxfkDZfe7dZ",
                  baseUrl:BASE_URL
                });
              };
            })(document,"script");
          `}
        </Script>
      </body>
    </html>
  );
}
