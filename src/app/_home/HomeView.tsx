import styles from "./Home.module.scss";
import { Theme } from "@/model/Theme";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { CatchSection } from "./sections/catchSection/CatchSection";
import { LastYearSection } from "./sections/lastYearSection/LastYearSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

interface HomeViewProperties {
  readonly themes: Theme[];
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
  readonly levelpartenaires: LevelPartenaire[];
}

export default function HomeView({
  contacts,
  themes,
  partenaires,
  levelpartenaires,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <HeroSection />
      <Section theme="Dark" className={styles.catch}>
      <h2>L'aventure continue</h2>

      <Card theme="Light" className={styles.catchCard}>
        <p> Les compagnons du Devquest repartent à l'aventure, pour préparer ce quatrième chapitre. </p>
      </Card>

    
    </Section>
    </div>
  );
}
