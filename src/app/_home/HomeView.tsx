import styles from "./Home.module.scss";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";
import { Section } from "@/components/Section";

interface HomeViewProperties {
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
}

export default function HomeView({
  contacts,
  partenaires,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <HeroSection />
  
      <PartnersSection partenaires={partenaires} />
    
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