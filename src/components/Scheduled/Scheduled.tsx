"use client";

import { useEffect, useState } from "react";
import { BUILD_TIME, type Schedule, isScheduledVisible } from "@/lib/schedule";

/**
 * Heure courante pour la programmation de contenus : l'heure du build au
 * premier rendu (même HTML au build et à l'hydratation), puis l'heure réelle,
 * réévaluée chaque minute tant que la page reste ouverte.
 */
export function useNow(): number {
  const [now, setNow] = useState(BUILD_TIME);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

interface ScheduledProperties extends Schedule {
  readonly children: React.ReactNode;
}

/**
 * Affiche son contenu selon une feature de features.json et/ou des dates
 * directes (`showFrom` inclus, `showUntil` exclu, à l'heure de Paris :
 * "2026-12-01" ou "2026-11-27T12:00"). Avec les deux, il faut que les deux
 * l'autorisent.
 *
 *   <Scheduled feature="billetterie">…</Scheduled>
 *   <Scheduled showUntil="2026-11-27T13:00">…</Scheduled>
 *
 * Le contenu masqué reste présent dans le code de la page : ne rien y mettre
 * de confidentiel.
 */
export default function Scheduled({ feature, showFrom, showUntil, children }: ScheduledProperties) {
  const now = useNow();
  return isScheduledVisible(now, { feature, showFrom, showUntil }) ? <>{children}</> : null;
}
