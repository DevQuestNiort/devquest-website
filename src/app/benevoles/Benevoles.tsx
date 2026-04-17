import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Avatar } from "@/components/Avatar";
import { Galery } from "@/components/Galery";
import { Membre } from "@/model/Membre";
import { promises as fs } from "fs";
import styles from "./Benevoles.module.scss";

import backgroundImage from "/public/avatar/conseilDeMage.png";

const getBenevoles = async () =>
  JSON.parse(
    await fs.readFile(
      process.cwd() + "/src/app/benevoles/benevoles.json",
      "utf8",
    ),
  ) as Membre[];

export async function Benevoles() {
  const benevoles = await getBenevoles();

  return (
    <div className={styles.benevolesContainer}>
      <Section
        className={styles.heroSection}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Card theme="Light">
          <h1>Les Bénévoles du DevQuest</h1>
          <h2>🧑‍🤝‍🧑 Les héros du jour J</h2>
          <p>
            Le jour de l&apos;événement, ils sont partout : à l&apos;accueil,
            au bar, devant les salles… Les bénévoles du jour J sont
            l&apos;huile dans les rouages du DevQuest.
          </p>
        </Card>
      </Section>

      <Section theme="Dark">
        <h2>🎯 Leur rôle</h2>
        <p>
          Sans eux, l&apos;événement ne pourrait pas se tenir dans de si bonnes
          conditions. Ils accueillent les participants, gèrent les flux,
          orientent les speakers et s&apos;assurent que tout le monde passe une
          excellente journée.
        </p>
        <ul>
          <li>🚪 Accueil et gestion des entrées</li>
          <li>🍺 Animation du bar et de la restauration</li>
          <li>🚦 Gestion des flux devant les salles de conférence</li>
          <li>🗺️ Orientation et information des participants</li>
        </ul>
      </Section>

      {benevoles.length > 0 && (
        <Section theme="Light">
          <h2>🙌 Nos bénévoles (édition 2026)</h2>
          <Galery>
            {benevoles.map((b, i) => (
              <Avatar
                key={i}
                img={b.picture}
                name={b.name}
                role={b.role}
                github={b.github}
                linkedin={b.linkedin}
              />
            ))}
          </Galery>
        </Section>
      )}

      <Section theme="Light">
        <h2>💛 Devenir bénévole</h2>
        <p>
          Tu veux donner un coup de main le jour J ? C&apos;est simple : rends-toi
          sur la billetterie du DevQuest 2026 et sélectionne l&apos;option{" "}
          <strong>« Bénévole »</strong>. Nous te recontacterons rapidement pour
          te donner tous les détails.
        </p>
        <p>
          <a
            href="https://www.billetweb.fr/devquest-2026-billetterie"
            target="_blank"
            rel="noopener noreferrer"
          >
            👉 Accéder à la billetterie
          </a>
        </p>
      </Section>
    </div>
  );
}
