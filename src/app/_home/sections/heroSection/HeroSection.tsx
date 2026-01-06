import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";
import config from "../../../../data/config.json";

import backgroundImage from "/public/fond_site_26.png";

export function HeroSection() {
  return (
    <Section
      id={styles.heroSection}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image
        id={styles.logo}
        src="/logo-date-lieu-2025.svg"
        alt="DevQuest"
        priority
        width={350}
        height={320}
      />
      <Card theme="Light" className={styles.heroCard}>
        <h1>Le premier rassemblement des devs Niortais</h1>
        <p>Tu veux participer en tant que speaker?</p>
        <LinkButton
          theme="Primary"
          style={{ marginTop: "0.5rem" }}
          href={config.cfp}
          target="_blank"
        >
          Soumets ton talk
        </LinkButton>
        {/*<LinkButton
          theme="Secondary"
          style={{ marginTop: "0.5rem" }}
          href={"https://companion.devquest.fr/"}
          target="_blank"
        >
          Devquest Compagnon
        </LinkButton>

        <LinkButton
          theme="Secondary"
          style={{ marginTop: "0.5rem" }}
          href={config.shop}
          target="_blank"
        >
          Acheter un billet
        </LinkButton>*/}
      </Card>
    </Section>
  );
}
