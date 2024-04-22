import { Section } from "@/components/Section";
import { default as styles } from "./MentionsLegales.module.scss";
import { LinkButton } from "@/components/LinkButton";

export function MentionsLegales() {
  return (
    <Section theme={"Light"}>
      <div className={styles.mentionsLegales}>
        <h1>Mentions légales</h1>
        <h2>DevQuest&nbsp;:</h2>
        <p>Association loi 1901</p>
        <p>Siège social&nbsp;:</p>
        <address>12 rue Joseph Cugnot, 79000 Niort</address>
        <p>R.N.A.&nbsp;: W792009748</p>
        <h2>Hébergement&nbsp;:</h2>
        <p>
          Ce site est hébergé par Github Inc, 88 Colin P. Kelly Jr. Street, San
          Francisco, États Unis
        </p>
        <h2>Conception et réalisation&nbsp;:</h2>
        <p>
          Design, développement et intégration réalisés par les membres de
          l&apos;association DevQuest.
        </p>
        <h2>Crédits&nbsp;:</h2>
        <ul>
          <li>
            <a
              href="https://www.flaticon.com/fr/icones-gratuites/archer"
              title="archer icônes"
            >
              Archer icônes créées par Freepik
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">
              Rpg icônes créées par Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/dwarf"
              title="dwarf icons"
            >
              Dwarf icônes créées par Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/fr/icones-gratuites/roi"
              title="roi icônes"
            >
              Roi icônes créées par Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/mission"
              title="mission icons"
            >
              Mission icônes créées par Eucalyp
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/necromancer"
              title="necromancer icons"
            >
              Necromancer icônes créées par Freepik
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">
              Rpg icônes créées par David Carapinha
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/fr/icones-gratuites/chaman"
              title="chaman icônes"
            >
              Chaman icônes créées par Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/fr/icones-gratuites/epee"
              title="épée icônes"
            >
              Épée icônes créées par pongsakornRed - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/knight"
              title="knight icons"
            >
              Knight icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
        <h2>Confidentialité&nbsp;:</h2>
        <p>
          La loi Informatique et Libertés du 06 janvier 1978 vous permet à tout
          moment de modifier ou supprimer les renseignements liés vous
          concernant et stockés dans nos bases de données. DevQuest respecte la
          législation française sur la protection de la vie privée.
        </p>
        <p>
          Selon l’article 34 de la loi « Informatique et Libertés », vous
          disposez d’un droit d’accès, de modification, de rectification et de
          suppression des données qui vous concernent. Pour exercer ce droit,
          merci de nous contacter directement à l’adresse{" "}
          <a href={"mailto:bureau@devquest.fr"}>bureau@devquest.fr</a>.
        </p>
        <p>
          DevQuest ne converse aucune donnée personnelle lors de votre visite,
          seule des données anonymes de navigations sont récoltées à des fins
          non commerciales, afin de nous permettre d&apos;évaluer
          l&apos;affluence sur le site.
        </p>
      </div>

      <LinkButton theme={"Primary"} href={"/"}>
        Retour à la page d&apos;accueil
      </LinkButton>
    </Section>
  );
}
