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
  title: "Obeespace",
  description: "A modern software developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className} suppressHydrationWarning={true}
      >
        <Nav/>{children}
      </body>
    </html>
  );
}
