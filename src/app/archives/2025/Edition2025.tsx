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
import Dummy from "@/components/dummy/Dummy";
import { DevQuestLogoShortDate } from "@/components/DevQuestLogo";
import { UseTheme } from "@/components/RouteTheme/RouteTheme";


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
      <UseTheme theme="2025" />
      <Section

        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <DevQuestLogoShortDate
          width={350}
          height={320}
          darkColor="var(--chapter-color)"
          lightColor="var(--main-color)"
          haloColor="var(--complementary-color)"
          haloSize={70}
        />
        <Card>
          <p>Une deuxième édition, pleine de surprise. Nous remercions tous les participants, les speakers, les bénévoles et nos Sponsors. Grâce à vous tous, on repart pour une année.  </p>
          <p> Alex, Alex, Alexis, Florent, Guillaume, Susan, Vincent, Xavier.
          </p>
        </Card>
      </Section>

  

      <Section variant="Main" >

        <h2>Deuxiéme chapitre de notre histoire Devquest :  </h2>
      
           <Galery columns={4}>
                    <Card variant="ChapterLight">
                      <Image
                        src="/icons-rp/communsword.png"
                        alt="DevQuest 2026"
                        priority
                        width={60}
                        height={60}
                      />350 participants</Card>
                            <Card variant="ChapterLight">
                      <Image
                        src="/icons-rp/horloge.png"
                        alt="DevQuest 2026"
                        priority
                        width={60}
                        height={80}
                      />Passage sur deux jours</Card>   
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