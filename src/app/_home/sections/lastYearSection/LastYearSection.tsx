import { Section } from "@/components/Section";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import styles from "./LastYearSection.module.scss";
import config from "../../../../data/config.json";

export function LastYearSection() {
  return (
    <Section className={styles.lastYear} theme={"Dark"}>
      <Image
        className={styles.imageLastYear}
        src={"gallery/dq-2025-album.JPG"}
        width={600}
        height={450}
        alt=""
      />

      <div className={styles.lastYearText}>
        <h2>C&apos;était l&apos;année dernière</h2>
        <p>
          Un grand merci à nos partenaires qui ont permis cette grande aventure
          à Niort.
        </p>
        <p>
          Rendez-vous ci-dessous pour découvrir ou revenir sur l’événement de
          2025 !
        </p>
        <LinkButton theme="Primary" href={config.gallery} target="_blank">
          Album 2025
        </LinkButton>
      </div>
    </Section>
  );
}
