import Link from "next/link";
import styles from "./Footer.module.scss";
import footer from "@/data/footer.json";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitch,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { DevQuestLogo } from "../DevQuestLogo";

const socialIcons: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  youtube: FaYoutube,
  twitch: FaTwitch,
  discord: FaDiscord,
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

interface FooterProperties {
  readonly theme?: "Light" | "Dark" | "Primary" | "Secondary" | "Tertiary";
}

export const Footer = ({ theme = "Primary" }: FooterProperties) => (
  <footer className={`${styles.footer} ${styles[`footer${theme}`]}`}>
    <div className={styles.grid}>
      {/* Colonne 1 — Identité */}
      <div className={styles.col}>
        <Link href="/" className={styles.brand}>

        <DevQuestLogo
          glyphColor="white"
          backgroundColor="none"
          width={96}
                    height={96}
        />


        </Link>
        <p className={styles.tagline}>
          {footer.tagline.split("\n").map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <div className={styles.socials}>
          {footer.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.icon}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} DevQuest</p>
      </div>

      {footer.columns.map((column) => (
        <div className={styles.col} key={column.title}>
          <h3 className={styles.colTitle}>{column.title}</h3>
          <ul className={styles.links}>
            {column.links.map((link) =>
              link.href.startsWith("http") ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  </footer>
);
