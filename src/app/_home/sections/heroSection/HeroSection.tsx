import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";


import backgroundImage from "/public/img/2027/2027-hero-3.png";

export function HeroSection() {
  return (
    <Section
      id={styles.heroSection}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Image
        id={styles.logo}
        src="/logo/2027/DQ2027-SansDate-Couleur.svg"
        alt="DevQuest 2026"
        priority
        width={350}
        height={320}
      />
      <Card theme="Secondary" className={styles.heroCard}>
        <h1>Le premier rassemblement des devs Niortais Revient bientôt</h1>
      </Card>
    </Section>
  );
}
