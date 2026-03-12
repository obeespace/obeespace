export default function manifest() {
  return {
    name: "Obeespace",
    short_name: "Obeespace",
    description:
      "Performance-focused full-stack software development with JavaScript and Python.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/logo2.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo2.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
