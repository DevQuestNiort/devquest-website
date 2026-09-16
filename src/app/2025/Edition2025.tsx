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

import backgroundImage from "/public/img/2025/2025-hero.png";
import Image from "next/image";


export default async function Edition2025() {
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/2025/partenaires.json",
    "utf8",
  );
  const LevelsPartenaireFile = await fs.readFile(
    process.cwd() + "/src/data/config/levelpartenaires.json",
    "utf8",
  );

  const sessionsFile = await fs.readFile(
    process.cwd() + "/src/data/2025/sessions.json",
    "utf8",
  );
  const SpeakersFile = await fs.readFile(
    process.cwd() + "/src/data/2025/speakers.json",
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
            src="/logo/2025/logo-date-lieu-2025.svg"
            alt="DevQuest 2026"
            priority
            width={350}
            height={320}
          />
          <Card>
            <p>Une deuxième édition, pleine de surprise. Nous remercions tous les participants, les speakers, les benvoles, nos Sponsors. Gràce à vous tous, on repart pour une année.  </p>
            <p> Alex, Alex, Alexis, Florent, Guillaume, Susan, Vincent, Xavier.
            </p>
          </Card>
        </Section>
      <Section theme="Light" >

        <h2>Deuxiéme chapitre de notre histoire Devquest :  </h2>
        <Galery>
          <Card>Passage sur deux jours</Card>
          <Card>350 participants</Card>
          <Card>{partenaires.length} Partenaires</Card>
          <Card>700 repas</Card>
          <Card>{speakers.length} speakers</Card>
        </Galery>
      </Section>
      <Section theme="Primary" >
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
  );
}