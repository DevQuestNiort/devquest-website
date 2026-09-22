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
import { Contact } from "@/components/Contact";

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
          Un nouveau chapitre est en cours de préparation pour cette nouvelle édition du DevQuest. Restez à l&apos;écoute pour découvrir toutes les nouveautés et surprises que nous vous réservons !
        </p>

      </Section>
     
      
    </div>
  );
}


