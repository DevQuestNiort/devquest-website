import type { Metadata } from "next";
import "../styles/main.scss";
import { Source_Sans_3, Teko } from "next/font/google";
import { QuestExplorateur } from "@/components/QuestExplorateur";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackToTop from '@/components/BackToTop';
import {PageHeader} from "@/components/PageHeader/PageHeader";
import {Footer} from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "DEVQUEST - 14 juin (Niort)",
  description:
    "Vous êtes développeur ? Ne ratez pas le premier évènement dédié avec des morceaux d'aventure dedans !",
  keywords: ["devquest", "dev", "quest", "niort", "devs", "conférences"],
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico", sizes: "any" },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon/mstile-150x150.png",
      sizes: "150x150",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  display: "swap",
});

const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${teko.variable} ${sourceSansPro.variable}`}>
        <GoogleAnalytics gaId="G-MR3XKZY9PM" />
        <QuestExplorateur />
        <PageHeader />
        {children}

        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}
