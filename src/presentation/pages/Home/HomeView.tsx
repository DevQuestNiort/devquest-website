import styles from './Home.module.scss';
import { Contact } from '../../components/Contact';
import { Avatar } from '../../components/Avatar';
import HomeController from './HomeController.ts';
import useAttachController from '../../hooks/useAttachController.ts';
import useInitContext from '../../hooks/useInitContext.ts';
import Thematique from '../../components/Thematiques/Thematique.tsx';
import { Galery } from '../../components/Galery';

interface HomeViewProperties {
  readonly controller: HomeController;
}

export default function HomeView({ controller }: HomeViewProperties) {
  const { themes, membres, contacts } = useAttachController(controller);

  useInitContext(controller);

  return (
    <div className={styles.App}>
      <div id={styles.main}>
        <div id={styles.brand}>
          <img id={styles.logo} src="/devquest-logo.svg" alt="DevQuest" />

          <h1>Le premier rassemblement dev niortais</h1>
          <h2>
            Le 14 Juin 2024 au{' '}
            <a href="https://www.google.com/maps/place/Parc+des+Expositions+de+Noron/@46.3294067,-0.4903639,17z/data=!3m1!4b1!4m6!3m5!1s0x48072fcbc6eabbfb:0x4febad6b6c995284!8m2!3d46.3294067!4d-0.4903639!16s%2Fg%2F1tq6jg6w?entry=ttu">
              Parc des Expositions de Noron
            </a>
          </h2>

          <div className={styles.row}>
            <div>
              <a className={styles.btn} href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423">
                Proposer un sujet
              </a>
            </div>
            <div>
              <a className={styles.btn} href="https://www.billetweb.fr/devquest-niort-2024">
                Accéder à la billeterie
              </a>
            </div>
          </div>
        </div>

        <div id={styles.infos}>
          <h1>Des conférences. Des sangliers. De la cervoise.</h1>

          <div className={styles.card}>
            L'été prochain, ne manquez pas le premier événement ludico-professionnel niortais dédié aux développeurs.
            Améliorez vos compétences et surtout... Profitez de l'aventure !
          </div>

          <div id={styles.rows}>
            {contacts.map((contact, i) => (
              <Contact key={i} name={contact.name} asset={contact.asset} icon={contact.icon} link={contact.link} />
            ))}
          </div>
        </div>
        <div id={styles.event}>
          <h1>Diantre, DevQuest dîtes-vous? Qu'est-ce donc que cela?</h1>
          <div id={styles.eventspec}>
            <div>
              <img height="96" src="/icons-rp/backpack.png" aria-hidden="true" />
              <h2>
                1<br />
                journée
              </h2>
            </div>
            <div>
              <img height="96" src="/icons-rp/knight.png" aria-hidden="true" />
              <h2>150 spectateurs</h2>
            </div>
            <div>
              <img height="96" src="/icons-rp/king.png" aria-hidden="true" />
              <h2>16 partenaires</h2>
            </div>
            <div>
              <img height="96" src="/icons-rp/quest.png" aria-hidden="true" />
              <h2>20 présentations multi format</h2>
            </div>
          </div>
        </div>
        <div id={styles.thematiques}>
          <h1>Les classes disponibles</h1>
          <div className={styles.themeContainer}>
            {themes.map((theme, i) => (
              <Thematique key={i} img={theme.img} name={theme.name} details={theme.details} />
            ))}
          </div>
        </div>
        <div id={styles.program}>
          <h1>Les quêtes</h1>
          <div className={styles.card}>
            <img height="96" src="/icons-rp/mission.png" aria-hidden="true" />
            <p id={styles.programtext}>
              Le programme n'est pas encore disponible, mais d'ores et déjà, nous pouvons vous dire que les histoires
              que vous entendrez vous raconterons des épopées sur l'intelligence artificielle mais aussi autour de
              l'artisanat logiciel... ou bien encore d'autres sujets passionnants!
            </p>
          </div>
        </div>
        <div id={styles.equipe}>
          <h1>Les maîtres du donjon</h1>
          <Galery>
            {membres
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((m, i) => (
                <Avatar
                  key={i}
                  img={m.img}
                  firstName={m.firstName}
                  lastName={m.lastName}
                  role={m.role}
                  github={m.github}
                  linkedin={m.linkedin}
                />
              ))}
          </Galery>
        </div>

        <div id={styles.equipe}>
          <p aria-hidden="true">
            <b>2024 - DevQuest</b>
          </p>
        </div>
      </div>
    </div>
  );
}
