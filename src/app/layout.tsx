import type { Metadata } from "next";
import "../styles/main.scss";
import { WebVitals } from "@/components/WebVitals";
import {Source_Sans_3, Teko} from "next/font/google";

export const metadata: Metadata = {
  title: "DevQuest Niort",
  description:
    "Explorez les événements incontournables pour les développeurs sur DevQuest. Découvrez des conférences stimulantes, " +
    "des ateliers enrichissants et bien plus encore. Rejoignez-nous dès maintenant ! Ou proposer un sujet pour une conférence !",
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
  variable: '--font-teko',
  subsets: ['latin'],
  display: 'swap',
})

const sourceSansPro = Source_Sans_3({
  variable: '--font-source-sans-pro',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${teko.variable} ${sourceSansPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
