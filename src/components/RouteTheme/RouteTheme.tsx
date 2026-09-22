"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const DEFAULT_THEME = "2027";

// Theme force explicitement par une page via useTheme/UseTheme, independamment
// de sa route (ex: une page d'archive qui ne vit plus sous /<annee>/...).
// Partage entre les deux hooks de ce fichier, cote client uniquement.
let pinnedTheme: string | null = null;

/**
 * Force le data-theme actif sur <html> tant que le composant appelant est monte,
 * peu importe l'URL courante. A utiliser dans une page dont le theme ne doit pas
 * dependre de sa route (ex: `useTheme("2026")` dans Edition2026.tsx, meme si cette
 * page vit desormais sous /archives/2026).
 */
export function useTheme(theme: string) {
  useEffect(() => {
    pinnedTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    return () => {
      pinnedTheme = null;
    };
  }, [theme]);
}

/**
 * Wrapper de useTheme utilisable depuis un Server Component (qui ne peut pas
 * appeler de hook directement) : `<UseTheme theme="2026" />` dans le JSX de la page.
 */
export function UseTheme({ theme }: { theme: string }) {
  useTheme(theme);
  return null;
}

export function RouteTheme() {
  const pathname = usePathname();

  useEffect(() => {
    if (pinnedTheme) {
      document.documentElement.setAttribute("data-theme", pinnedTheme);
      return;
    }
    // Cherche une annee n'importe ou dans le chemin (ex: /archives/2026/...),
    // pas seulement en premier segment, pour rester robuste aux changements de routes.
    const yearMatch = pathname.match(/\/(\d{4})(?:\/|$)/);
    const theme = yearMatch ? yearMatch[1] : DEFAULT_THEME;
    document.documentElement.setAttribute("data-theme", theme);
  }, [pathname]);

  return null;
}
