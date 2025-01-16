import { Section } from "@/components/Section";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import styles from "./LastYearSection.module.scss";
import config from "../../../../data/config.json";

export function LastYearSection() {
    return (
        <Section className={styles.lastYear} theme={"Secondary"}>
        <Image className={styles.imageLastYear} src={'gallery/devquest-team-2024.JPG'}
          width={600}
          height={450}
          alt="" />

        <div className={styles.lastYearText}>
          <h2>C&apos;était l&apos;année dernière</h2>

          <p>Un grand merci à nos partenaires qui ont permis cette grande première à Niort.</p>
          <p>Rendez-vous ci-dessous pour découvrir ou revenir sur l’événement de 2024 !</p>
          <LinkButton theme="Primary" href={config.gallery} target="_blank">Album 2024</LinkButton>
        </div>

      </Section>
    );
}