import Link from "next/link";
import styles from "./Footer.module.scss";
import config from "@/data/config.json";

export const Footer = () => (
    <footer className={styles.footer}>
        <b aria-hidden="true">@ 2026 DevQuest</b>
        {" - "}
        <Link href={"/mentions-legales"}>Mentions légales</Link>
        {" - "}
        <Link href={"/conseil-des-mages"}>Conseil des Mages</Link>
        {" - "}
        <Link href={"/code-de-conduite"}>Code de conduite</Link>
        {" - "}
        <Link href={"/faq"}>FAQ</Link>
        {" - "}
        <Link href={config.kitPartenaires}>Kit partenaires</Link>
        {" - "}
        <a href="https://devquestniort.github.io/dq-game/">
            Le jeux Devquest 2025
        </a>
    </footer>
);
