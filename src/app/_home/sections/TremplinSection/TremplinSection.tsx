import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

import styles from "./TremplinSection.module.scss";
import { LinkButton } from "@/components/LinkButton";
import config from "../../../../data/config.json";

export function TremplinSection() {
  return (
    <Section theme="Light" className={styles.tremplin}>
      <h2>🏰 Soirée Tremplin des Orateurs ⚔️</h2>

      <Card className={styles.tremplinCard}>
        <span>Oyez, oyez, nobles membres de la guilde !</span>

        <span>
          Les candidats de la Soirée Tremplin ont été sélectionnés et s’apprêtent
          à monter sur scène pour défendre leur premier talk. Accompagnés par{" "}
          <a target="_blank" href="https://craftsrecords.org/">
            Craft Records
          </a>
          , ils ont affûté leurs sujets, forgé leurs arguments — ils n’attendent
          plus qu’une chose : votre soutien !
        </span>
        <span>
          Venez les encourager en tant que spectateur·ice lors de la soirée
          Tremplin et participez au jury populaire. C’est vous, la guilde
          assemblée, qui aiderez à désigner les deux grands vainqueurs — les
          aventuriers qui remporteront le droit de reprendre leur conférence sur{" "}
          <strong>les planches de DevQuest les 11 et 12 juin</strong>, devant
          toute la communauté !
        </span>
        <span>
          🏆 Rejoignez l’assemblée, encouragez les orateurs et contribuez à
          écrire la prochaine page de l’épopée DevQuest !
        </span>

        <div id={styles.rows}>
          <LinkButton theme="Secondary" href="https://www.linkedin.com/events/7447971060647534592?viewAsMember=true">
            Je m’inscris comme spectateur·ice
          </LinkButton>
        </div>
      </Card>
    </Section>
  );
}
