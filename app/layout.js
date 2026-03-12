import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

const outfit = Outfit({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://obeespace.com"),
  title: {
    default: "Obeespace | Full-Stack Software Developer",
    template: "%s | Obeespace",
  },
  description:
    "Obeespace builds performant, scalable full-stack products with JavaScript and Python, from product websites to business automation platforms.",
  applicationName: "Obeespace",
  category: "technology",
  keywords: [
    "Obeespace",
    "Obinna Ugwu",
    "full-stack developer",
    "Next.js developer",
    "JavaScript",
    "Python",
    "portfolio",
    "web performance",
    "SEO",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://obeespace.com",
    siteName: "Obeespace",
    title: "Obeespace | Full-Stack Software Developer",
    description:
      "Explore high-performance products and case studies by Obeespace, a developer focused on scalable and user-first digital experiences.",
    images: [
      {
        url: "/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "Obeespace brand logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obeespace | Full-Stack Software Developer",
    description:
      "Performance-focused full-stack software development with JavaScript, Next.js, and Python.",
    images: ["/logo2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo2.jpg?v=2",
    shortcut: "/logo2.jpg?v=2",
    apple: "/logo2.jpg?v=2",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Obeespace",
    url: "https://obeespace.com",
    logo: "https://obeespace.com/logo2.jpg",
    image: "https://obeespace.com/logo2.jpg",
    founder: {
      "@type": "Person",
      name: "Obinna Ugwu",
    },
    sameAs: [
      "https://github.com/obeespace",
      "https://instagram.com/0beenna",
      "https://www.linkedin.com/in/obinna-ugwu-04b0a617b/",
    ],
  };

  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
