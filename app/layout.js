import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.ev24.support";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "EV24 | Intelligent support for electric mobility",
  description:
    "An AI-powered support workspace for every EV charging conversation, from messages to voice calls.",
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
    locale: "en_GB",
    url: siteUrl,
    siteName: "EV24",
    title: "EV24 | Intelligent support for electric mobility",
    description: "Automate support for EV charging users and centralize messages, calls and charging incidents.",
    images: [{
      url: "https://www.ev24.io/wp-content/uploads/2022/08/Logo-EV24_Plan-de-travail-1-4-e1661949153322.png",
      width: 1200,
      height: 630,
      alt: "EV24, intelligent support for electric mobility",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV24 | Intelligent support for electric mobility",
    description: "Automate support for EV charging users from one workspace.",
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
        inLanguage: ["en", "fr"],
        description: "AI-assisted customer support platform for CPOs, eMSPs and EV charging operators.",
        provider: { "@id": `${siteUrl}/#organization` },
        featureList: [
          "Omnichannel customer support",
          "Artificial intelligence assistance",
          "VoIP call transcription",
          "CPO and eMSP integrations",
          "Operational EV charger context",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
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
