"use client";

import { useEffect, useState } from "react";
import styles from "./Tabs.module.scss";

export interface TabItem {
  /** Identifiant, utilisé dans l'URL (#id) pour pointer directement sur l'onglet. */
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProperties {
  readonly items: TabItem[];
  /** Nom accessible de la liste d'onglets. */
  readonly label: string;
}

/**
 * Onglets accessibles (rôles ARIA, flèches gauche/droite). L'onglet actif est
 * reflété dans l'ancre de l'URL : un lien vers /page#id ouvre cet onglet.
 */
export default function Tabs({ items, label }: TabsProperties) {
  const [active, setActive] = useState(items[0]?.id);

  // Ouvre l'onglet demandé par l'ancre de l'URL, au chargement et si elle change.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (items.some((item) => item.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  const select = (id: string) => {
    setActive(id);
    // replaceState : pas de saut de page ni d'entrée d'historique par clic.
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", `${pathname}${search}#${id}`);
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    const next = items[(index + delta + items.length) % items.length];
    select(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <div className={styles.tabs}>
      <div role="tablist" aria-label={label} className={styles.list}>
        {items.map((item, index) => (
          <button
            key={item.id}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            aria-controls={`panel-${item.id}`}
            tabIndex={active === item.id ? 0 : -1}
            className={styles.tab}
            onClick={() => select(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={active !== item.id}
          className={styles.panel}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
