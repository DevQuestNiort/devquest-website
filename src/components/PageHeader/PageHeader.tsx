"use client";
import Image from "next/image";
import styles from "./PageHeader.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const PageHeader = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const isActive = (href: string) => pathname === href;
  const isGroup = (...hrefs: string[]) => hrefs.some((h) => pathname.startsWith(h));

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
        </nav>

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
      </nav>
    </header>
  );
};
