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
    <Section theme={"Light"}>
      <h2>La tribu complète</h2>
      <Card theme="Primary">
        <p>
          Car l&apos;aventure c&apos;est bien, mais avec des compagnons de
          route, c&apos;est mieux!
        </p>
        <Image
          height={96}
          width={96}
          alt=""
          src="/icons-rp/shield.png"
          aria-hidden="true"
        />
      </Card>
      <div className={styles.partnerSection}>
        <SponsorsByLevel levelpartenaires={levelpartenaires} partenaires={partenaires} />
      </div>
    </Section>
  );
}
