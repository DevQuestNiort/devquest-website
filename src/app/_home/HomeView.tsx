import styles from "./Home.module.scss";
import { Membre } from "@/model/Membre";
import { Theme } from "@/model/Theme";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { CatchSection } from "./sections/catchSection/CatchSection";
import { EventSpecSection } from "./sections/eventSpecSection/EventSpecSection";
import { EventThemesSection } from "./sections/eventThemesSection/EventThemesSection";
import { MapSection } from "./sections/MapSection/MapSection";
import { DungeonMastersSection } from "./sections/dungeonMastersSection/DungeonMastersSection";
import { LastYearSection } from "./sections/lastYearSection/LastYearSection";
import { PartnersSection } from "./sections/partnersSection/PartnersSection";

interface HomeViewProperties {
  readonly themes: Theme[];
  readonly membres: Membre[];
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
}

export default function HomeView({
  contacts,
  membres,
  themes,
  partenaires,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <HeroSection />
      <CatchSection contacts={contacts} />
      <EventSpecSection />
      <EventThemesSection themes={themes} />
      <MapSection />
      <DungeonMastersSection membres={membres} />
      <LastYearSection />
      <PartnersSection partenaires={partenaires} />
    </div>
  );
}
