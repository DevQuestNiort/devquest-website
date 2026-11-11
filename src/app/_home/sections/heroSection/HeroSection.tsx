import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";


import backgroundImage from "/public/img/2027/2027-hero-4.png";
import { DevQuestLogoShortDate } from "@/components/DevQuestLogo";
import { LinkButton } from "@/components/LinkButton";

export function HeroSection() {
  return (
    <Section
      id={styles.heroSection}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <DevQuestLogoShortDate
        width={350}
        city="Niort"
        darkColor="var(--chapter-color)"
        lightColor="var(--main-color)"
        haloColor="var(--complementary-color)"
        haloSize={20}
      />
      <Card variant="Main" >
                <h2>Aux mécènes de la quête</h2>
                <p>
                  Nobles compagnons, la <strong>Guilde DevQuest</strong> convoque ses alliés à un grand conseil,
                  le <strong>27 novembre</strong>, par-delà les ondes de la visioconférence.
                  <br/>Au menu : le dévoilement des <strong>packs sponsors</strong>, trésors et faveurs réservés à ceux qui rejoindront notre table et nous soutiendrons dans cette quatrième quête.
                </p>
                <p>
                  Que votre bannière se joigne à l&apos;aventure !
                </p>
                <LinkButton
                  theme="Primary"
                  href="https://calendar.app.google/MM8GqZP8VBx3ZDRC7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S'inscrire à la présentation des packs sponsors
                </LinkButton>
      </Card>
    </Section>
  );
}
