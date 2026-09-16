import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";

import backgroundImage from "/public/fond_site_26.png";
import { Card } from "@/components/Card";

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
        src="/logo/DQ2026-AvecDate-Couleur.svg"
        alt="DevQuest 2026"
        priority
        width={350}
        height={320}
      />
     <Card theme="Dark" className={styles.heroCard}>
        <h1>Le rassemblement des devs Niortais</h1>
        <p>Vous vous trouvez sur les pages d'archives de la troisième édition du Devquest</p>        
      </Card>
    </Section>
  );
}
