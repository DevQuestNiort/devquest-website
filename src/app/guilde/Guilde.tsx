import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Membre } from "@/model/Membre";
import { promises as fs } from "fs";
import styles from "./Guilde.module.scss";

import backgroundImage from "/public/avatar/conseilDeMage.png";

const getMembres = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/teams.json", "utf8"),
  ) as Membre[];

export async function Guilde() {
  const membres = await getMembres();

  return (
    <div className={styles.guildeContainer}>
      <Section
        className={styles.heroSection}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Card theme="Light">
          <h1>La Guilde du DevQuest</h1>
          <h2>⚔️ Le noyau dur de l&apos;événement</h2>
          <p>
            La Guilde du DevQuest réunit les organisateurs bénévoles qui
            imaginent, construisent et font vivre l&apos;événement tout au long
            de l&apos;année. Sans eux, pas de DevQuest !
          </p>
        </Card>
      </Section>

      <Section theme="Light">
        <h2>🛡️ Qui sommes-nous ?</h2>
        <p>
          Nous sommes une équipe de passionné·es du numérique basée à Niort.
          Développeurs, designers, communicants, chefs de projet… chacun apporte
          ses compétences au service de la communauté tech du bassin niortais.
        </p>
        <ul>
          <li>🗓️ Organisation de l&apos;événement de A à Z</li>
          <li>🤝 Animation de la communauté tout au long de l&apos;année</li>
          <li>📣 Communication et partenariats</li>
          <li>💻 Développement des outils et du site</li>
        </ul>
      </Section>

      <Section theme="Dark">
        <h2>👥 Les membres de la Guilde (saison 3)</h2>
        <Galery>
          {membres
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map((m, i) => (
              <Avatar
                key={i}
                img={m.picture}
                name={m.name}
                role={m.role}
                github={m.github}
                linkedin={m.linkedin}
              />
            ))}
        </Galery>
      </Section>

      <Section theme="Light">
        <h2>💛 Rejoindre la Guilde</h2>
        <p>
          Tu veux nous rejoindre et contribuer à l&apos;aventure DevQuest ?
          N&apos;hésite pas à nous contacter sur nos réseaux ou à venir discuter
          avec nous lors de l&apos;événement !
        </p>
      </Section>
    </div>
  );
}
