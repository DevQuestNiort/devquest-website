import styles from "./Home.module.scss";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { DevQuestLogo } from "@/components/DevQuestLogo";
import { Galery } from "@/components/Galery";

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
      
      
      <Section variant="Main">
        <h2>Un nouveau chapitre</h2>

        <p>
          Un nouveau chapitre est en cours de préparation pour cette nouvelle édition du DevQuest. Restez à l'écoute pour découvrir toutes les nouveautés et surprises que nous vous réservons !
        </p>

      </Section>
     
      
    </div>
  );
}



/**
 *  <Card variant="Main" className={styles.heroCard}>
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