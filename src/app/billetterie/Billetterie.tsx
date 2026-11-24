import { Section } from "@/components/Section";
import { PassContents } from "@/components/PassContents";
import styles from "./Billetterie.module.scss";

export function Billetterie() {
  return (
    <div className={styles.container}>
      <Section variant="Main">
        <h1>Billetterie</h1>
        <h2>Rejoignez l&apos;aventure</h2>
        <p className={styles.intro}>
          Le DevQuest, c&apos;est deux jours de conférences, d&apos;ateliers et
          de rencontres au cœur de Niort, portés par des bénévoles
          passionné·es. Que vous soyez développeur·se aguerri·e, étudiant·e ou
          simplement curieux·se, il y a une place pour vous autour de la
          table.
        </p>
        <p className={styles.intro}>
          La billetterie ouvrira prochainement. En attendant, voici ce qui vous
          attend avec votre pass.
        </p>
      </Section>

      <Section variant="ChapterLight" id="pass">
        <h2>Ce que comprend votre pass</h2>
        <p className={styles.intro}>
          Un pass, c&apos;est une journée complète au DevQuest. Vous composez
          librement votre programme parmi les conférences et les ateliers, et
          la Guilde s&apos;occupe du reste : de quoi reprendre des forces du
          petit-déjeuner au goûter, et à boire tout au long de la journée.
        </p>
        <PassContents />
      </Section>

      <Section variant="Main">
        <h2>Pourquoi venir ?</h2>
        <ul className={styles.reasons}>
          <li>
            <strong>Apprendre</strong> : des conférences et des ateliers sur
            les sujets tech du moment, pour repartir avec de nouvelles idées à
            mettre en pratique.
          </li>
          <li>
            <strong>Rencontrer</strong> : échangez avec les speakers, les
            développeur·ses, les étudiant·es et les entreprises du territoire.
          </li>
          <li>
            <strong>Partager</strong> : le DevQuest est fait par la communauté,
            pour la communauté. Chaque participant·e fait vivre la tech locale.
          </li>
        </ul>
      </Section>

      <Section variant="Main">
        <h2>Une question ?</h2>
        <p>
          Contactez la Guilde :{" "}
          <a href="mailto:bureau@devquest.fr">bureau@devquest.fr</a>
        </p>
      </Section>
    </div>
  );
}
