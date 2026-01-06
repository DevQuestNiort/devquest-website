import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

import styles from "./TremplinSection.module.scss";
import { LinkButton } from "@/components/LinkButton";

export function TremplinSection() {
  return (
    <Section theme="Light" className={styles.tremplin}>
      <h2>🏰 Soirée Tremplin des Orateurs ⚔️</h2>

      <Card className={styles.tremplinCard}>
        <span>Oyez, oyez, nobles aventuriers du code !</span>

        <span>
          Vous avez toujours rêvé de partager votre savoir, mais vous n’avez
          jamais osé franchir le pas ? La Soirée Tremplin est faite pour vous !
        </span>
        <span>
          Rejoignez cette quête épique et préparez votre premier talk avec
          l’aide de mentors aguerris et accompagné par{" "}
          <a target="_blank" href="https://craftsrecords.org/">
            Craft Records
          </a>
          , prêts à vous guider dans l’art oratoire. Une fois votre sujet affûté
          comme une lame elfique, vous monterez sur scène lors de la soirée
          Tremplin et présenterez votre talk devant une assemblée bienveillante.
        </span>
        <span>
          🏆 À la clé ? Les deux meilleurs orateurs seront invités à reprendre
          leur conférence lors de l’événement principal, devant toute la guilde
          des développeurs réunis !
        </span>
        {/*  <span>
          ⚔️ Lancez-vous dans l’aventure et inscrivez-vous dès maintenant !
        </span>*/}
        <div id={styles.rows}>
          <LinkButton
            theme="Secondary"
            href="https://www.devquest.fr//tremplin"
          >
            En savoir plus
          </LinkButton>
          {/* <LinkButton theme="Primary" href={config.cfpTremplin} target="_blank">
            Inscrivez-vous
          </LinkButton>*/}
        </div>
      </Card>
    </Section>
  );
}
