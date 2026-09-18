import { Card } from "@/components/Card";
import { Galery } from "@/components/Galery";

import { promises as fs } from "fs";
import { SponsorsByLevel } from "@/components/Partenaire/ListPartenaire/ListPartenaire";
import { Section } from "@/components/Section";
import { Partenaire } from "@/model/Partenaire";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Session } from "@/model/Session";
import { Speaker } from "@/model/Speaker";
import { CardListSession } from "@/components/sessions/CardListSession/CardListSession";

import backgroundImage from "/public/img/2026/2026-hero.png";
import Image from "next/image";

export default async function Edition2026() {
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/2026/partenaires.json",
    "utf8",
  );
  const LevelsPartenaireFile = await fs.readFile(
    process.cwd() + "/src/data/config/levelpartenaires.json",
    "utf8",
  );

  const sessionsFile = await fs.readFile(
    process.cwd() + "/src/data/2026/sessions.json",
    "utf8",
  );
  const SpeakersFile = await fs.readFile(
    process.cwd() + "/src/data/2026/speakers.json",
    "utf8",
  );


  const partenaires: Partenaire[] = JSON.parse(partenairesFile);
  const levelpartenaires: LevelPartenaire[] = JSON.parse(LevelsPartenaireFile);
  const sessions: Session[] = JSON.parse(sessionsFile);
  const speakers: Speaker[] = JSON.parse(SpeakersFile);

  return (
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
          src="/logo/2026/DQ2026-SansDate-Couleur.svg"
          alt="DevQuest 2026"
          priority
          width={350}
          height={320}
        />
        <Card>
          <p> Troisième chapitre du devquest cloturé. Cette année a té particulièrement dur pour les orgas. Mais aufinal, vous avez fait de cet évènement, un instant magique.. Donc on repart pour une quatrième. </p>
          <p> Alex, Alex, Alexis, Loic,  Guillaume, Susan, Sylvain,  Vincent, Xavier.</p>
        </Card>
      </Section>
      <Section variant="Main">
        <h2>Section Light</h2>

        <Card variant="Main">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>
      <Section variant="Complementary">
        <h2>L&apos;aventure continue Dark</h2>


        <Card variant="Main">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>
      <Section variant="Chapter">
        <h2>L&apos;aventure continue Primary</h2>


        <Card variant="Main">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>

      </Section>
      <Section variant="ChapterDark">
        <h2>L&apos;aventure continue Secondary</h2>


        <Card variant="Main">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>
      <Section variant="ChapterLight">
        <h2>L&apos;aventure continue Tertiary</h2>


        <Card variant="Main">
          <h3> Card Ligth  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Complementary">
          <h3> Card Dark  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="Chapter">
          <h3> Card Primary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterDark">
          <h3> Card Secondary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>
        <Card variant="ChapterLight">
          <h3> Card Tertiary  </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, nulla at scelerisque auctor, tortor diam tempor velit, eget vestibulum velit tellus ac mi. Sed ut hendrerit tortor </p>
        </Card>


      </Section>


      <Section variant="Main" >
        <h2>La troisième édition du dev quest c&apos;est : </h2>
        <Galery columns={4}>
          <Card variant="ChapterLight">
            <Image
              src="/icons-rp/communsword.png"
              alt="DevQuest 2026"
              priority
              width={60}
              height={60}
            />350 participants</Card>
          <Card variant="ChapterLight"><Image
              src="/icons-rp/village.png"
              alt="DevQuest 2026"
              priority
              width={60}
              height={60}
            />{partenaires.length} Partenaires</Card>
          <Card variant="ChapterLight"><Image
              src="/icons-rp/chicken.png"
              alt="DevQuest 2026"
              priority
              width={60}
              height={60}
            />800 repas</Card>
          <Card variant="ChapterLight"><Image
              src="/icons-rp/group.png"
              alt="DevQuest 2026"
              priority
              width={60}
              height={60}
            />{speakers.length} speakers</Card>
        </Galery>
      </Section>
      <Section variant="Chapter" >
        <h2> Les Menestrels  </h2>
        <CardListSession sessions={sessions} speakers={speakers} columns={3} />
      </Section>
      <Section variant="Main" >
        <h2>Les guildes presentent cette année la </h2>
        <SponsorsByLevel
          levelpartenaires={levelpartenaires}
          partenaires={partenaires}
        />


      </Section>

    </div>
  );
}