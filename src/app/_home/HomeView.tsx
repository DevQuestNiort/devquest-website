import styles from "./Home.module.scss";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Section } from "@/components/Section";
import { Contact } from "@/components/Contact";
import { LinkButton } from "@/components/LinkButton";
import { PassContents } from "@/components/PassContents";
import { Scheduled } from "@/components/Scheduled";

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
        <div style={ { display: "flex", flexDirection : "row", gap: "20px"}}>
          {contacts?.map(contact =>  <Contact key={contact.name} name={contact.name} link={contact.link} asset={contact.asset}/> )}
        </div>
      </Section>
<Scheduled feature="billetterie">
   <Section variant="ChapterLight">
        <h2>Ce que comprend votre pass</h2>
        <p>
          Pour chaque journée de quête, votre pass vous ouvre les portes du
          DevQuest : conférences, ateliers, et de quoi reprendre des forces
          entre deux sessions.
        </p>
        <PassContents />
        <LinkButton variant="Chapter" href="/billetterie">
          Tout savoir sur la billetterie
        </LinkButton>
      </Section>
</Scheduled>
     
    </div>
  );
}


