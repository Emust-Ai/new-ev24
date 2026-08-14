export default function manifest() {
  return {
    name: "EV24 - Support intelligent pour la mobilité électrique",
    short_name: "EV24",
    description: "Plateforme de support omnicanal assistée par IA pour les opérateurs de recharge électrique.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f2ed",
    theme_color: "#392951",
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
