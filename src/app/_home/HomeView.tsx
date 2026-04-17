import styles from "./Home.module.scss";
import { Theme } from "@/model/Theme";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { CatchSection } from "./sections/catchSection/CatchSection";
import { EventSpecSection } from "./sections/eventSpecSection/EventSpecSection";
import { EventThemesSection } from "./sections/eventThemesSection/EventThemesSection";
import { MapSection } from "./sections/MapSection/MapSection";
import { LastYearSection } from "./sections/lastYearSection/LastYearSection";
import { TremplinSection } from "@/app/_home/sections/TremplinSection/TremplinSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";

interface HomeViewProperties {
  readonly themes: Theme[];
  readonly contacts: MoyensContact[];
  readonly partenaires: Partenaire[];
}

export default function HomeView({
  contacts,
  themes,
  partenaires,
}: HomeViewProperties) {
  return (
    <div className={styles.main}>
      <HeroSection />
      <CatchSection contacts={contacts} />
      <TremplinSection />
      <EventSpecSection />
      <EventThemesSection themes={themes} />
      <MapSection />
      <PartnersSection partenaires={partenaires} />
      <LastYearSection />
    </div>
  );
}
