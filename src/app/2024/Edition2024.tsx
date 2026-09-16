import { Card } from "@/components/Card";
import { Galery } from "@/components/Galery";
import { SponsorsByLevel } from "@/components/Partenaire/ListPartenaire/ListPartenaire";
import { Section } from "@/components/Section";
import { CardListSession } from "@/components/sessions/CardListSession/CardListSession";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Partenaire } from "@/model/Partenaire";
import { Speaker } from "@/model/Speaker";
import { promises as fs } from "fs";
import { Session } from "@/model/Session";
import backgroundImage from "/public/img/2024/2024-hero.png";
import Image from "next/image";


export default async function Edition2024() {
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/2024/partenaires.json",
    "utf8",
  );
  const LevelsPartenaireFile = await fs.readFile(
    process.cwd() + "/src/data/config/levelpartenaires.json",
    "utf8",
  );
  const sessionsFile = await fs.readFile(
    process.cwd() + "/src/data/2024/sessions.json",
    "utf8",
  );
  const SpeakersFile = await fs.readFile(
    process.cwd() + "/src/data/2024/speakers.json",
    "utf8",
  );


  const partenaires: Partenaire[] = JSON.parse(partenairesFile);
  const levelpartenaires: LevelPartenaire[] = JSON.parse(LevelsPartenaireFile);
  const sessions: Session[] = JSON.parse(sessionsFile);
  const speakers: Speaker[] = JSON.parse(SpeakersFile);



  return (
    <div>
      <div>
        <Section

          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${backgroundImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Image
            // id={styles.logo}
            src="/logo/2024/devquest-logo.svg"
            alt="DevQuest 2026"
            priority
            width={350}
            height={320}
          />
          <Card>
            <p>Merci @tous pour cette première aventure...
              Nous tenions à remercier l&apos;ensemble de nos partenaires, speakeuses et speakeurs, bénévoles, maîtres et maîtresse de conférence pour nous avoir aidé et accompagné dans cette aventure. Cette journée fut tellement intense et riche pour l&apos;ensemble de la team.. Mille mercis.
              Suivez nous pour ne pas manquer les futures quêtes !</p>

            <p>Alice, Alex, Alex, Florent, Guillaume, Nicolas, Samuel, Susan, Vincent, Xavier.
            </p>
          </Card>
        </Section>
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
      <Section theme="Secondary">
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


      </Section>
        <Section theme="Light" >
          <Galery>
            <Card>Une journée</Card>
            <Card>350 participants</Card>
            <Card>{partenaires.length} Partenaires</Card>
            <Card>400 repas</Card>
            <Card>{speakers.length} speakers</Card>
          </Galery>
        </Section>
        <Section theme="Dark" >
          <h2> Les Menestrels  </h2>
          <CardListSession sessions={sessions} speakers={speakers} columns={3} />
        </Section>
        <Section theme="Light" >
          <h2>Les guildes presentent cette année la </h2>
          <SponsorsByLevel
            levelpartenaires={levelpartenaires}
            partenaires={partenaires}
          />


        </Section>

      </div>
    </div>
  );
}