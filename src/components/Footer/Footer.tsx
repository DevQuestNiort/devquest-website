import Link from "next/link";
import styles from "./Footer.module.scss";
import config from "@/data/config.json";
import Image from "next/image";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.grid}>
      {/* Colonne 1 — Identité */}
      <div className={styles.col}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/logo/DQ2026-SansDate-Blanc.svg"
            alt="logo devquest"
            width={96}
            height={96}
          />
        </Link>
        <p className={styles.tagline}>
          La conférence tech du bassin niortais.
          <br />
          Par la communauté, pour la communauté.
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/company/devquest-niort/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn DevQuest"
          >
            <span className="icon-linkedin" />
          </a>
          <a
            href="https://github.com/DevQuestNiort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub DevQuest"
          >
            <span className="icon-github" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCDFfMunDvS5yfZ9TaZfEq8w"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube DevQuest"
          >
            ▶
          </a>
          <a
            href="https://www.twitch.tv/devquestniort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch DevQuest"
          >
            📺
          </a>
          <a
            href="https://discord.gg/Gx8rmjZh2J"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord DevQuest"
          >
            💬
          </a>
          <a
            href="https://www.instagram.com/devquest_niort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram DevQuest"
          >
            📷
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571745361976"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook DevQuest"
          >
            <span className="icon-facebook" />
          </a>
          <a href="mailto:bureau@devquest.fr" aria-label="Email DevQuest">
            ✉
          </a>
        </div>
        <p className={styles.copy}>© 2026 DevQuest</p>
      </div>

      {/* Colonne 2 — L'Édition */}
      <div className={styles.col}>
        <h3 className={styles.colTitle}>L&apos;Édition 2026</h3>
        <ul className={styles.links}>
          <li>
            <Link href="/schedule/day-1">Programme</Link>
          </li>
          <li>
            <Link href="/code-de-conduite">Code de conduite</Link>
          </li>
          <li>
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
        </ul>
      </div>

      {/* Colonne 3 — Ressources */}
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Ressources</h3>
        <ul className={styles.links}>
          <li>
            <Link
              href={config.kitPartenaires}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kit partenaires ↗
            </Link>
          </li>
          <li>
            <a
              href="https://devquestniort.github.io/dq-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le jeu DevQuest 2025 ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
