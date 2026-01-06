import styles from "./tremplin.module.scss";
import { Section } from "@/components/Section";
import Image from "next/image";

export async function Tremplin() {
  return (
    <div className={styles.tremplinContainer}>
      <Section theme="Light">
        <h1>Le Tremplin du Devquest</h1>
        <h2>Kezako un tremplin?</h2>
        <p>
          Vous avez toujours rêvé de partager votre savoir, mais vous n’avez
          jamais osé franchir le pas ? La Soirée Tremplin est faite pour vous !
        </p>
        <p>
          Rejoignez cette quête épique et préparez votre premier talk avec
          l’aide de mentors aguerris et accompagné par{" "}
          <a target="_blank" href="https://craftsrecords.org/">
            Craft Records
          </a>
          , prêts à vous guider dans l’art oratoire. Une fois votre sujet affûté
          comme une lame elfique, vous monterez sur scène lors de la soirée
          Tremplin et présenterez votre talk devant une assemblée bienveillante.
        </p>
        <p>
          🏆 À la clé ? Les deux meilleurs orateurs seront invités à reprendre
          leur conférence lors de l’événement principal, devant toute la guilde
          des développeurs réunis !
        </p>
        <h2>Temporalité</h2>
        <ul>
          <li>10 février : ouverture du CFP</li>
          <li>6 mars : clôture du CFP</li>
          <li>13 mars : annonce des candidates et candidats sélectionnés</li>
          <li>de mars jusqu&apos;au jour J : accompagnement</li>
          <li>
            A venir : soirée tremplin et sélection des 2 gagnants-gagnantes
          </li>
        </ul>
        <ul className={styles.frise}>
          <li>
            <time dateTime="10/02/2026">10 février 2026</time>
            <span></span>
            <p>Ouverture du CFP</p>
          </li>
          <li>
            <time dateTime="06/03/2026">6 mars 2026</time>
            <span></span>
            <p>Clôture du CFP</p>
          </li>
          <li>
            <time dateTime="13/03/2026">13 mars 2026</time>
            <span></span>
            <p>Notification</p>
          </li>
          <li>
            <time dateTime="2018-07-07">Mars-Mai 2026</time>
            <span></span>
            <p>Accompagnement</p>
          </li>
          <li>
            <time dateTime="2018-07-07">A venir</time>
            <span></span>
            <p>Soirée Tremplin</p>
          </li>
        </ul>
      </Section>
      <Section theme="Dark">
        <h2>Comment ça marche ?</h2>
        <h3>But</h3>
        <p>
          Offrir un accompagnement individuel gratuit aux personnes désireuses
          de se lancer en tant que speaker. Notre équipe bénévole de coachs
          expérimentés t’aidera durant toutes les étapes de préparation de ta
          première conférence de 20 minutes, jusqu’à ta prise de parole devant
          un public lors de la soirée du Tremplin sur Niort. Et ce n’est pas
          tout ! Le public du Tremplin choisira lors de la soirée 2 talks, qui
          seront d’office sélectionnés au programme du DevQuest qui aura lieu le
          11 et 12 juin 2026.
        </p>
        <h3>Principe du tremplin</h3>
        <p>
          Parmi les propositions reçues, nous sélectionnerons 6 personnes pour
          les accompagner dans la définition de l’idée de leur talk, la
          structuration, la réalisation et les répétitions jusqu’au Jour-J de la
          conférence. Chaque participant⋅e bénéficiera d’un coaching personnel
          pour l’accompagner dans la réalisation de son talk de 20 minutes. Que
          tu aies déjà une idée de talk bien définie, ou que tu sois simplement
          très motivé·e par une thématique mais avec une idée plus floue,
          n’hésite pas à soumettre ta proposition et tes motivations : le
          Tremplin est fait pour ça !
        </p>
        <h3>Qui peut participer ?</h3>
        <p>
          Le CFP (call for papers) du Tremplin est réservé aux primo-speakers
          n’ayant jamais donné de conférence publique (les meetups ou
          conférences internes ne comptent pas).
        </p>
      </Section>
      <Section theme="Light">
        <h2>De quoi on va parler ?</h2>
        <p>
          Les catégories sont les mêmes que pour le jour J. En voici un petit
          rappel. (Vous ne savez pas où vous positionner? Vous êtes probablement
          un joueur de &quot;Quête annexe&quot; alors!
        </p>
        <ul>
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Design & UX</li>
          <li>Méthodo & Architecture</li>
          <li>Cloud & DevSecOps</li>
          <li>Quêtes Secondaires</li>
        </ul>
      </Section>
      <Section theme="Dark">
        <h2>Et les années d&apos;avant ça donnait quoi?</h2>
        <p>
          Cette année sera la 3ème édition du tremplin DevQuest. Nous avons reçu
          des apprentis speakers de tout horizon, de tout âge et de toute la
          France.
        </p>
        <p>
          Il en va de même pour nos mentors qui ont pu apporter leurs
          expériences aux apprentis au fil des années.
        </p>
        <p>
          Les thématiques ont été aussi variée que nos conférences le jour J. Il
          y en a pour tout les goûts !
        </p>
        <div className={styles.imageTremplinContainer}>
          <Image
            src={"gallery/tremplin-2025-1.JPG"}
            width={450}
            height={338}
            alt=""
          />
          <Image
            src={"gallery/tremplin-2025-2.png"}
            width={450}
            height={338}
            alt=""
          />
        </div>
        <p>
          Les inscriptions ouvrent le 10 février ! Marquez le dans vos grimoires
          !
        </p>
        {/*<LinkButton theme="Primary" href={config.cfpTremplin} target="_blank">
          Inscrivez-vous
        </LinkButton>*/}
      </Section>
    </div>
  );
}
