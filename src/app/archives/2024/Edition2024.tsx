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
import Dummy from "@/components/dummy/Dummy";
import { DevQuestLogo } from "@/components/DevQuestLogo";
import { UseTheme } from "@/components/RouteTheme/RouteTheme";


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
      <UseTheme theme="2024" />
      <div>
        <Section

          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${backgroundImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <DevQuestLogo
            width={350}
            height={320}
            glyphColor="var(--chapter-color)"
            backgroundColor="var(--main-color)"
            haloColor="var(--chapter-ligth-color)"
            haloSize={70}
          />
          <Card>
            <p>Merci @tous pour cette première aventure...
              Nous tenions à remercier l&apos;ensemble de nos partenaires, speakeuses et speakeurs, bénévoles, maîtres et maîtresse de conférence pour nous avoir aidé et accompagné dans cette aventure. Cette journée fut tellement intense et riche pour l&apos;ensemble de la team.. Mille mercis.
              Suivez nous pour ne pas manquer les futures quêtes !</p>

            <p>Alice, Alex, Alex, Florent, Guillaume, Nicolas, Samuel, Susan, Vincent, Xavier.
            </p>
          </Card>
        </Section>

        <Dummy />


        <Section variant="Main" >
          <Galery>
            <Card>Une journée</Card>
            <Card>350 participants</Card>
            <Card>{partenaires.length} Partenaires</Card>
            <Card>400 repas</Card>
            <Card>{speakers.length} speakers</Card>
          </Galery>
        </Section>
        <Section variant="Complementary" >
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
    </div>
  );
}