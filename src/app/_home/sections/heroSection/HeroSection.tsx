import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";
import config from "../../../../data/config.json";

import backgroundImage from "/public/devquest-fond-min.png";


export function HeroSection() {
    return (
    <Section
        id={styles.heroSection}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
    >
      <Image
          id={styles.logo}
          src="/logo-date-lieu.svg"
          alt="DevQuest"
          priority
          width={255}
          height={262}
      />
      <Card theme="Light" className={styles.heroCard}
      >
        <h1>Le premier rassemblement des devs Niortais</h1>
        <p>Tu veux être speaker?</p>
          <LinkButton theme="Primary" href={config.cfp} target="_blank">Propose une sujet</LinkButton> 
      </Card>
    </Section>)
}