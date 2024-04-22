import { Section } from "@/components/Section";
import { default as styles } from "./CodeDeConduite.module.scss";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";

export function CodeDeConduite() {
  return (
    <Section theme={"Light"}>
      <div className={styles.cdc}>
        <Card style={{ margin: "auto" }}>
          <p>
            L&apos;association Devquest (organisateurs du DevQuest) est fier
            d&apos;être une communauté ouverte, respectueuse des différences et
            de la diversité. Nous voulons que tous les participants et
            participantes (participants, conférenciers,…) vivent une expérience
            agréable et enrichissante. Cela implique que tous les participants, participantes, orateurs, oratrices, sponsors et bénévoles
            respectent ce code de conduite.
          </p>
        </Card>

        <h2>
          Version courte, lisible et explicite du “Code of Conduct policy”
        </h2>
        <p>
          L&apos;association Devquest s’engage à fournir une expérience de
          conférence sans harcèlement à tout le monde, indépendamment de leur :
        </p>
        <ul>
          <li>sexe</li>
          <li>identité et expression de genre</li>
          <li>orientation sexuelle</li>
          <li>invalidité</li>
          <li>apparence physique</li>
          <li>taille</li>
          <li>origine</li>
          <li>âge</li>
          <li>religion</li>
          <li>choix technologiques</li>
        </ul>

        <p>
          Nous ne tolérons aucune forme de harcèlement des participants et
          participantes à la conférence. Le langage et les images sexuels ne
          sont pas appropriés pour le DevQuest. Cela comprend également les contenus de talks,
          et codelabs, les animations, les soirées ainsi que les réseaux sociaux. Les
          participants et participantes de la conférence qui enfreignent ces
          règles peuvent être sanctionnés ou expulsés de la conférence sans
          remboursements, à la discrétion des organisateurs de la conférence.
        </p>

        <h2>Version plus longue</h2>
        <p>
          L&apos;association Devquest s’engage à fournir une expérience de
          conférence sans harcèlement à tout le monde, indépendamment de leur :
        </p>

        <ul>
          <li>sexe</li>
          <li>identité et expression de genre</li>
          <li>orientation sexuelle</li>
          <li>invalidité</li>
          <li>apparence physique</li>
          <li>taille</li>
          <li>origine</li>
          <li>âge</li>
          <li>religion</li>
          <li>choix technologiques</li>
        </ul>
        <p>
          Nous ne tolérons aucune forme de harcèlement des participants et
participantes à la conférence. Le langage et les images sexuels ne
          sont pas appropriés pour le DevQuest. Cela comprend également les contenus de talks,
          et codelabs, les animations, les soirées ainsi que les réseaux sociaux. Les
          participants et participantes à la conférence qui enfreignent ces
          règles peuvent être sanctionnés ou expulsés de la conférence sans
          remboursements, à la discrétion des organisateurs de la conférence.
        </p>
        <p>Le harcèlement comprend, sans toutefois s’y limiter:</p>
        <ul>
          <li>
            Commentaires verbaux qui renforcent les structures sociales de
            domination, liés au genre, à l&apos;identité et à l&apos;expression
            de genre, à l&apos;orientation sexuelle, au handicap, à
            l&apos;apparence physique, à la taille, à l&apos;origine, à
            l&apos;âge, à la religion, aux choix technologiques.
          </li>
          <li>Images sexuelles dans les espaces publics</li>
          <li>Intimidation délibérée, harcèlement criminel ou suivi</li>
          <li>Photographie ou enregistrement forcé</li>
          <li>
            Perturbation prolongée des discussions ou d&apos;autres événements
          </li>
          <li>Contact physique inapproprié</li>
          <li>Attention sexuelle inopportun</li>
          <li>Nudité dans les espaces publics</li>
          <li>Défendre ou encourager l’un des comportements ci-dessus</li>
          <li>
            Les participants et participantes invités à mettre fin à tout
            comportement de harcèlement sont tenus de s’y conformer
            immédiatement.
          </li>
        </ul>
        <p>
          Les sponsors présents dans le hall d’exposition ou lors des activités
          similaires sont également soumis à la politique anti-harcèlement. Les
          sponsors ne doivent pas utiliser d’images, d’activités ou autre
          matériel sexualisés. Le personnel du stand (y compris les bénévoles)
          ne doit pas utiliser de vêtements / uniformes / costumes sexualisés,
          ni créer un environnement sexualisé. Un stand pourra être ainsi fermé
          en cas de manquement à ces règles.
        </p>
        <p>
          Si un participant ou une participante adopte un comportement
          harcelant, les organisateurs de l&apos;événement se réservent le droit
          de prendre toutes les mesures nécessaires pour que l&apos;événement
          reste un environnement accueillant pour tous les participants et
          participantes. Cela inclut l’avertissement du délinquant ou
          l’expulsion de la conférence sans remboursement.
        </p>
        <p>
          Les organisateurs d&apos;événements peuvent prendre des mesures pour
          remédier à tout ce qui est conçu pour perturber l’événement ou avoir
          pour impact manifeste de rendre l’environnement hostile pour les
          participants et participantes.
        </p>
        <p>
          Nous nous attendons à ce que les participants et participantes suivent
          ces règles sur tous les lieux de l’événement et à toutes les activités
          sociales liées à l’événement (slack, twitter, mailing, …). Nous
          pensons que les gens devraient également suivre ces règles en dehors
          des activités de l&apos;événement !
        </p>
        <h3>Besoin de signaler</h3>
        <p>
          Si quelqu&apos;un vous dérange de quelque manière que ce soit, nous
          vous demandons de contacter immédiatement les organisateurs qui
          mettront en place les mesures nécessaires. Nous voulons que le
          DevQuest soit respectueux des autres et en fasse un événement
          socialement agréable.
        </p>
        <p>
          Ce code de conduite est issu de l&apos;exemple de politique du wiki
          Geek Feminism , créé par l’Initiative Ada et d’autres volontaires ,
          sous licence Creative Commons Zero.
        </p>
      </div>
      <LinkButton theme={"Primary"} href={"/"}>
        Retour à la page d&apos;accueil
      </LinkButton>
    </Section>
  );
}
