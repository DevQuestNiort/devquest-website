import styles from "./Home.module.scss";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";
import { HeroSection } from "./sections/heroSection/HeroSection";
import { PartnersSection } from "@/app/_home/sections/partnersSection/PartnersSection";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { DevQuestLogo } from "@/components/DevQuestLogo";

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
      <Section theme="Light">
        <h2>Section Light</h2>

        <Card theme="Light">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Dark">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Primary">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Secondary">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Tertiary">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>

      </Section>
      <Section theme="Dark">
        <h2>L&apos;aventure continue Dark</h2>


        <DevQuestLogo
          glyphColor="black"
          backgroundColor="none"
          width={96}
          height={96}
        />
        <h3>Logo noir</h3>


        <br /><br />

        <DevQuestLogo
          glyphColor="white"
          backgroundColor="none"
          width={96}
          height={96}
        />
        <h3>Logo blanc</h3>


        <br /><br />

        <DevQuestLogo
          glyphColor="var(--primary-color)"
          backgroundColor="var(--ligth-color)"
          width={96}
          height={96}
        />
        <h3>Logo </h3>


        <br /><br />


        <DevQuestLogo
          glyphColor="var(--ligth-color)"
          backgroundColor="var(--primary-color)"
          width={96}
          height={96}
        />
        <h3>Logo inverse</h3>



        <DevQuestLogo
          glyphColor="var(--primary-color)"
          backgroundColor="none"
          width={96}
          height={96}
        />
        <h3>Logo sans fondz</h3>


        <br /><br />


        <DevQuestLogo
          glyphColor="var(--ligth-color)"
          backgroundColor="none"
          width={96}
          height={96}
        />
        <h3>Logo inverse sans fond</h3>





        <Card theme="Light">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Dark">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Primary">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Secondary">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Tertiary">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>
      <Section theme="Primary">
        <h2>L&apos;aventure continue Primary</h2>


        <Card theme="Light">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Dark">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Primary">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Secondary">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Tertiary">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>

      </Section>
      {/* <Section theme="Secondary">
        <h2>L&apos;aventure continue Secondary</h2>


               <Card theme="Light">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Dark">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Primary">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Secondary">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Tertiary">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>
      <Section theme="Tertiary">
        <h2>L&apos;aventure continue Tertiary</h2>


               <Card theme="Light">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Dark">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Primary">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Secondary">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card theme="Tertiary">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section> */}
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