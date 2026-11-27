import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

import backgroundImage from "/public/img/2027/2027-hero-4.png";
import { DevQuestLogoShortDate } from "@/components/DevQuestLogo";
import { LinkButton } from "@/components/LinkButton";
import { ScheduledSwitch } from "@/components/Scheduled";
import { featureStartLabel, featureUrl } from "@/lib/schedule";

// La carte du hero change selon la période (dates dans
// src/data/config/features.json) :
// 1. jusqu'à la réunion de présentation des packs (ReunionPacksSponsor2027) ;
// 2. entre la réunion et l'ouverture des pré-inscriptions : carte par défaut ;
// 3. à partir de l'ouverture des pré-inscriptions (PreinscriptionSponsor2027).
// ScheduledSwitch affiche toujours exactement une carte : pas de trou ni de
// chevauchement si une date change.

const PACKS_BUTTON = (
  <LinkButton variant="Complementary" href="/devenez-sponsor">
    Découvrir les packs sponsors
  </LinkButton>
);

/** 1. Annonce de la réunion de présentation des packs. */
function HeroReunion() {
  return (
    <Card variant="Main">
      <h2>Aux mécènes de la quête</h2>
      <p>
        Nobles compagnons, la <strong>Guilde DevQuest</strong> convoque ses alliés à un grand conseil,
        le <strong>27 novembre</strong>, par-delà les ondes de la visioconférence.
        <br/>Au menu : le dévoilement des <strong>packs sponsors</strong>, trésors et faveurs réservés à ceux qui rejoindront notre table et nous soutiendrons dans cette quatrième quête.
      </p>
      <p>
        Que votre bannière se joigne à l&apos;aventure !
      </p>
      <div className={styles.actions}>
        <LinkButton
          variant="Chapter"
          href={featureUrl("ReunionPacksSponsor2027")}
          target="_blank"
          rel="noopener noreferrer"
        >
          S&apos;inscrire à la présentation des packs sponsors
        </LinkButton>
        {PACKS_BUTTON}
      </div>
    </Card>
  );
}

/** 2. Packs dévoilés, pré-inscriptions pas encore ouvertes. */
function HeroPacksDevoiles() {
  return (
    <Card variant="Main">
      <h2>Aux mécènes de la quête</h2>
      <p>
        Nobles compagnons, les <strong>packs sponsors</strong> de cette quatrième quête sont
        dévoilés : trésors et faveurs attendent ceux qui rejoindront la table de la{" "}
        <strong>Guilde DevQuest</strong>.
      </p>
      <p>
        Les pré-inscriptions ouvriront le{" "}
        <strong>{featureStartLabel("PreinscriptionSponsor2027")}</strong>. D&apos;ici là,
        découvrez les packs et préparez votre bannière !
      </p>
      <div className={styles.actions}>{PACKS_BUTTON}</div>
    </Card>
  );
}

/** 3. Pré-inscriptions ouvertes. */
function HeroPreinscription() {
  return (
    <Card variant="Main">
      <h2>La table des mécènes est ouverte</h2>
      <p>
        Nobles compagnons, les <strong>pré-inscriptions des sponsors</strong> de cette quatrième
        quête sont ouvertes ! Choisissez votre pack et réservez dès maintenant votre place à la
        table de la <strong>Guilde DevQuest</strong>.
      </p>
      <p>
        Que votre bannière se joigne à l&apos;aventure !
      </p>
      <div className={styles.actions}>
        <LinkButton
          variant="Chapter"
          href={featureUrl("PreinscriptionSponsor2027")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Se pré-inscrire comme sponsor
        </LinkButton>
        {PACKS_BUTTON}
      </div>
    </Card>
  );
}

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
      <ScheduledSwitch
        cases={[
          { feature: "ReunionPacksSponsor2027", content: <HeroReunion /> },
          { feature: "PreinscriptionSponsor2027", content: <HeroPreinscription /> },
        ]}
        fallback={<HeroPacksDevoiles />}
      />
    </Section>
  );
}
