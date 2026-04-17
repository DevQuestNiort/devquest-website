"use client";
import Image from "next/image";
import styles from "./PageHeader.module.scss";
import config from "../../data/config.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/LinkButton";
import { useState } from "react";

export const PageHeader = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const isActive = (href: string) => pathname === href;
  const isGroup = (...hrefs: string[]) => hrefs.some((h) => pathname.startsWith(h));

  const communauteActive = isGroup(
    "/guilde",
    "/conseil-des-mages",
    "/maitres-de-conf",
    "/benevoles",
    "/artisans",
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={close}>
          <Image src="/devquest-color-2025.svg" alt="logo devquest" width={48} height={48} />
        </Link>

        {/* Desktop navigation */}
        <nav className={styles.navDesktop} aria-label="Navigation principale">
          <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>
            Accueil
          </Link>
          <Link
            href="/schedule/day-1"
            className={`${styles.navLink} ${isGroup("/schedule", "/sessions") ? styles.navLinkActive : ""}`}
          >
            Programme
          </Link>
          <Link
            href="/tremplin"
            className={`${styles.navLink} ${isActive("/tremplin") ? styles.navLinkActive : ""}`}
          >
            Tremplin
          </Link>
          <Link
            href="/faq"
            className={`${styles.navLink} ${isActive("/faq") ? styles.navLinkActive : ""}`}
          >
            FAQ
          </Link>

          {/* Dropdown — Communauté */}
          <div className={styles.dropdown}>
            <span className={`${styles.navLink} ${communauteActive ? styles.navLinkActive : ""}`}>
              Communauté <span className={styles.chevron}>▾</span>
            </span>
            <div className={styles.dropdownPanel}>
              <Link
                href="/guilde"
                className={`${styles.dropdownItem} ${isActive("/guilde") ? styles.dropdownItemActive : ""}`}
              >
                ⚔️ La Guilde
              </Link>
              <Link
                href="/conseil-des-mages"
                className={`${styles.dropdownItem} ${isActive("/conseil-des-mages") ? styles.dropdownItemActive : ""}`}
              >
                🔮 Conseil des Mages
              </Link>
              <Link
                href="/maitres-de-conf"
                className={`${styles.dropdownItem} ${isActive("/maitres-de-conf") ? styles.dropdownItemActive : ""}`}
              >
                🎙️ Maîtres de Conf
              </Link>
              <Link
                href="/benevoles"
                className={`${styles.dropdownItem} ${isActive("/benevoles") ? styles.dropdownItemActive : ""}`}
              >
                🧑‍🤝‍🧑 Bénévoles
              </Link>
              <Link
                href="/artisans"
                className={`${styles.dropdownItem} ${isActive("/artisans") ? styles.dropdownItemActive : ""}`}
              >
                🔨 Artisans
              </Link>
            </div>
          </div>

          <Link href={config.kitPartenaires} target="_blank" className={styles.navLink}>
            Kit partenaires ↗
          </Link>
        </nav>

        {/* CTA desktop */}
        <div className={styles.desktopCta}>
          {config.shop && (
            <LinkButton theme="Primary" href={config.shop} target="_blank">
              Réserver mes places
            </LinkButton>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-label="Navigation mobile"
        aria-hidden={!menuOpen}
      >
        <Link href="/" className={`${styles.drawerItem} ${isActive("/") ? styles.drawerItemActive : ""}`} onClick={close}>
          Accueil
        </Link>
        <Link href="/schedule/day-1" className={`${styles.drawerItem} ${isGroup("/schedule", "/sessions") ? styles.drawerItemActive : ""}`} onClick={close}>
          Programme
        </Link>
        <Link href="/tremplin" className={`${styles.drawerItem} ${isActive("/tremplin") ? styles.drawerItemActive : ""}`} onClick={close}>
          Tremplin
        </Link>
        <Link href="/faq" className={`${styles.drawerItem} ${isActive("/faq") ? styles.drawerItemActive : ""}`} onClick={close}>
          FAQ
        </Link>

        <p className={styles.drawerSectionLabel}>Communauté</p>
        <Link href="/guilde" className={`${styles.drawerItem} ${styles.drawerItemSub} ${isActive("/guilde") ? styles.drawerItemActive : ""}`} onClick={close}>
          ⚔️ La Guilde
        </Link>
        <Link href="/conseil-des-mages" className={`${styles.drawerItem} ${styles.drawerItemSub} ${isActive("/conseil-des-mages") ? styles.drawerItemActive : ""}`} onClick={close}>
          🔮 Conseil des Mages
        </Link>
        <Link href="/maitres-de-conf" className={`${styles.drawerItem} ${styles.drawerItemSub} ${isActive("/maitres-de-conf") ? styles.drawerItemActive : ""}`} onClick={close}>
          🎙️ Maîtres de Conf
        </Link>
        <Link href="/benevoles" className={`${styles.drawerItem} ${styles.drawerItemSub} ${isActive("/benevoles") ? styles.drawerItemActive : ""}`} onClick={close}>
          🧑‍🤝‍🧑 Bénévoles
        </Link>
        <Link href="/artisans" className={`${styles.drawerItem} ${styles.drawerItemSub} ${isActive("/artisans") ? styles.drawerItemActive : ""}`} onClick={close}>
          🔨 Artisans
        </Link>

        <Link href={config.kitPartenaires} target="_blank" className={styles.drawerItem} onClick={close}>
          Kit partenaires ↗
        </Link>

        {config.shop && (
          <div className={styles.drawerCta}>
            <LinkButton theme="Primary" href={config.shop} target="_blank">
              Réserver mes places
            </LinkButton>
          </div>
        )}
      </nav>
    </header>
  );
};
