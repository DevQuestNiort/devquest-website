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
  openGraph: {
    images: [
      {
        url: '/logo-date-lieu.svg',
        width: 240,
        height: 270,
      }
    ]
  },
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
  // FIXME : pas ouf le head comme ça pour les icones...
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&display=swap" rel="stylesheet"/>
      </head>
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
