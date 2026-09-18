import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Partenaire } from "@/model/Partenaire";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { Galery } from "@/components/Galery";
import Image from "next/image";
import styles from "./PartnersSection.module.scss";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { SponsorsByLevel } from "@/components/Partenaire/ListPartenaire/ListPartenaire";

interface PartnersSectionProperties {
  readonly partenaires: Partenaire[];
  readonly levelpartenaires: LevelPartenaire[];
}
export function PartnersSection({ partenaires, levelpartenaires }: PartnersSectionProperties, ) {
  return (
    <Section variant={"Main"}>
      <h2>La tribu complète</h2>
      <Card variant="Chapter">
        <p>
            Voici les guildes qui été présent lors ce troisième chapitre de l&apos;histoire Devquest
        </p>
      </Card>
      <div className={styles.partnerSection}>
        <SponsorsByLevel levelpartenaires={levelpartenaires} partenaires={partenaires} />
      </div>
    </Section>
  );
}
