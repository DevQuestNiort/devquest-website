import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";


import backgroundImage from "/public/img/2027/2027-hero-4.png";
import { DevQuestLogoShortDate } from "@/components/DevQuestLogo";

export function HeroSection() {
  return (
    <Section
      id={styles.heroSection}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <DevQuestLogoShortDate
        width={350}
        city="Niort"
        darkColor="var(--chapter-color)"
        lightColor="var(--main-color)"
        haloColor="var(--complementary-color)"
        haloSize={20}
      />
      <Card variant="Main" className={styles.heroCard}>
        <h1>Le premier rassemblement des devs Niortais Revient bientôt</h1>
      </Card>
    </Section>
  );
}
