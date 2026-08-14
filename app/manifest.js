export default function manifest() {
  return {
    name: "EV24 - Intelligent support for electric mobility",
    short_name: "EV24",
    description: "AI-assisted omnichannel support platform for EV charging operators.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f2ed",
    theme_color: "#392951",
    lang: "en",
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
