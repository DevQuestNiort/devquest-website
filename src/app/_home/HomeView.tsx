import styles from "./Home.module.scss";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

interface HomeViewProperties {
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
  readonly levelpartenaires: LevelPartenaire[];
}

export default function HomeView({
  contacts,
  partenaires,
  levelpartenaires,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <HeroSection />
      <Section theme="Dark" className={styles.catch}>
      <h2>L&apos;aventure continue</h2>

      <Card theme="Light" className={styles.catchCard}>
        <p> Les compagnons du Devquest repartent à l&apos;aventure, pour préparer ce quatrième chapitre. </p>
      </Card>

    
    </Section>
    </div>
  );
}



/**
 *  <Card theme="Light" className={styles.heroCard}>
        <h1>Le rassemblement des devs Niortais</h1>
        <p>Les vidéos des conférences sont disponibles sur le programme :</p>
        <LinkButton
          theme="Primary"
          style={{ marginTop: "0.5rem" }}
          href={"/schedule/day-1"}
        >
          Voir le programme / les vidéos
        </LinkButton>
      </Card>
 */