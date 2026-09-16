"use client";
import Image from "next/image";
import styles from "./PageHeader.module.scss";
import menu from "../../data/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/LinkButton";
import { useState } from "react";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href?: string;
  activeMatch?: string[];
  children?: NavChild[];
};

const isExternal = (href: string) => href.startsWith("http");

const isItemActive = (item: NavItem, pathname: string): boolean => {
  if (item.children) {
    return item.children.some((child) => pathname.startsWith(child.href));
  }
  if (!item.href) return false;
  if (item.activeMatch) {
    return item.activeMatch.some((path) => pathname.startsWith(path));
  }
  return pathname === item.href;
};

export const PageHeader = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={close}>
          <Image src="/devquest-color-2025.svg" alt="logo devquest" width={48} height={48} />
        </Link>

        {/* Desktop navigation */}
        <nav className={styles.navDesktop} aria-label="Navigation principale">
          {menu.items.map((item: NavItem) =>
            item.children ? (
              <div className={styles.dropdown} key={item.label}>
                <span
                  className={`${styles.navLink} ${isItemActive(item, pathname) ? styles.navLinkActive : ""}`}
                >
                  {item.label} <span className={styles.chevron}>▾</span>
                </span>
                <div className={styles.dropdownPanel}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`${styles.dropdownItem} ${pathname === child.href ? styles.dropdownItemActive : ""}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                target={isExternal(item.href!) ? "_blank" : undefined}
                rel={isExternal(item.href!) ? "noopener noreferrer" : undefined}
                className={`${styles.navLink} ${isItemActive(item, pathname) ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA desktop */}
        {/* <div className={styles.desktopCta}>
          {config.shop && (
            <LinkButton theme="Primary" href={config.shop} target="_blank">
              Réserver mes places
            </LinkButton>
          )}
        </div> */}

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
        {menu.items.map((item: NavItem) =>
          item.children ? (
            <div key={item.label}>
              <p className={styles.drawerSectionLabel}>{item.label}</p>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`${styles.drawerItem} ${styles.drawerItemSub} ${pathname === child.href ? styles.drawerItemActive : ""}`}
                  onClick={close}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href!}
              target={isExternal(item.href!) ? "_blank" : undefined}
              rel={isExternal(item.href!) ? "noopener noreferrer" : undefined}
              className={`${styles.drawerItem} ${isItemActive(item, pathname) ? styles.drawerItemActive : ""}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ),
        )}

        {/* {config.shop && (
          <div className={styles.drawerCta}>
            <LinkButton theme="Primary" href={config.shop} target="_blank">
              Réserver mes places
            </LinkButton>
          </div>
        )} */}
      </nav>
    </header>
  );
};
