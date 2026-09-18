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
        <h2>Section Main</h2>

        <Card variant="Main">
          <h3> Card Main  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Complementary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Chapter  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card ChapterDark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card ChapterLight  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>

      </Section>
      <Section variant="Chapter">
        <h2>Section  Chapter</h2>
        
        <Card variant="Main">
          <h3> Card Main  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Complementary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Chapter  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card ChapterDark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card ChapterLight  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
      </Section>

      <Galery columns={3}>

          <Card variant="ChapterLight"> 
            <h3>Logo noir</h3>
            <DevQuestLogo
              glyphColor="black"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo blanc</h3>
            <DevQuestLogo
              glyphColor="white"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo </h3>
            <DevQuestLogo
              glyphColor="var(--chapter-color)"
              backgroundColor="var(--main-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse</h3>
            <DevQuestLogo
              glyphColor="var(--main-color)"
              backgroundColor="var(--chapter-color)"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo sans fondz</h3>
            <DevQuestLogo
              glyphColor="var(--chapter-color)"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
          <Card variant="ChapterLight">
            <h3>Logo inverse sans fond</h3>
            <DevQuestLogo
              glyphColor="var(--main-color)"
              backgroundColor="none"
              width={96}
              height={96}
            />
          </Card>
        </Galery>
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