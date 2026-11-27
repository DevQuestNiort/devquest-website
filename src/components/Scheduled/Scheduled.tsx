"use client";

import { useEffect, useState } from "react";
import {
  BUILD_TIME,
  type Schedule,
  isScheduledVisible,
  parseScheduleDate,
} from "@/lib/schedule";

// ─── Date simulée (développement uniquement) ─────────────────────────────────
// http://localhost:3000/?simuler=2026-12-13 (ou 2026-12-13T09:00) : tous les
// contenus programmés se comportent comme à cette date. La valeur est gardée
// pour l'onglet (sessionStorage) car la navigation interne perd le paramètre.
// ?simuler= (vide) revient à la vraie date. Ignoré en production.

const SIMULATION_PARAM = "simuler";
const SIMULATION_KEY = "devquest-date-simulee";
const IS_DEV = process.env.NODE_ENV !== "production";

/** Date simulée en cours (texte saisi), ou null. Toujours null en production. */
export function readSimulatedDate(): string | null {
  if (!IS_DEV || typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has(SIMULATION_PARAM)) {
      const value = params.get(SIMULATION_PARAM)!.trim();
      if (value) sessionStorage.setItem(SIMULATION_KEY, value);
      else sessionStorage.removeItem(SIMULATION_KEY);
    }
    const value = sessionStorage.getItem(SIMULATION_KEY);
    if (!value) return null;
    parseScheduleDate(value); // valide le format
    return value;
  } catch (error) {
    console.warn(`[simuler] ${(error as Error).message}`);
    return null;
  }
}

/**
 * Heure courante pour la programmation de contenus : l'heure du build au
 * premier rendu (même HTML au build et à l'hydratation), puis l'heure réelle,
 * réévaluée chaque minute tant que la page reste ouverte. En développement,
 * une date simulée (?simuler=…) remplace l'heure réelle.
 */
export function useNow(): number {
  const [now, setNow] = useState(BUILD_TIME);
  useEffect(() => {
    const simulated = readSimulatedDate();
    if (simulated) {
      setNow(parseScheduleDate(simulated));
      return;
    }
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

/**
 * Bandeau de rappel affiché en développement quand une date est simulée.
 * Rien en production.
 */
export function SimulatedDateBanner() {
  const [simulated, setSimulated] = useState<string | null>(null);
  useEffect(() => setSimulated(readSimulatedDate()), []);
  if (!IS_DEV || !simulated) return null;
  return (
    <div
      role="status"
      style={{
        position: "fixed",
        bottom: 12,
        left: 12,
        zIndex: 2000,
        padding: "0.5rem 0.8rem",
        borderRadius: 8,
        background: "#b00020",
        color: "white",
        font: "bold 14px sans-serif",
        boxShadow: "0 2px 8px rgb(0 0 0 / 40%)",
      }}
    >
      Date simulée : {simulated}{" "}
      <a href="?simuler=" style={{ color: "white" }}>
        (revenir à aujourd&apos;hui)
      </a>
    </div>
  );
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

interface ScheduledCase extends Schedule {
  readonly content: React.ReactNode;
}

/**
 * Affiche une seule alternative selon la date : le premier cas visible (dans
 * l'ordre), sinon `fallback`. Garantit qu'il y a toujours exactement un
 * contenu, sans trou ni chevauchement entre les périodes.
 *
 *   <ScheduledSwitch
 *     cases={[
 *       { feature: "ReunionPacksSponsor2027", content: <A /> },
 *       { feature: "PreinscriptionSponsor2027", content: <C /> },
 *     ]}
 *     fallback={<B />}
 *   />
 */
export function ScheduledSwitch({
  cases,
  fallback,
}: {
  readonly cases: ScheduledCase[];
  readonly fallback: React.ReactNode;
}) {
  const now = useNow();
  const active = cases.find((c) => isScheduledVisible(now, c));
  return <>{active ? active.content : fallback}</>;
}
