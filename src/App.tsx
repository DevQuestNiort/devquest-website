import type { Component } from "solid-js";
import styles from "./App.module.scss";
import { Avatar } from "./components/Avatar";
import { Member, members } from './data/members'
import { Thematiques } from "./components/Thematiques";
import { contacts, Contact as ContactType } from './data/contacts'
import { Contact } from "./components/Contact";




const App: Component = () => {

  console.log(`
    Félicitations explorateur !
    Tu es l'heureux gagnant d'une place gratuite pour accéder à notre aventure grâce à ta curiosité !
    Pour récupérer ta place, utilise le code secret issue d'un langage ancien LAPIN_GAROU directement sur notre billetterie.
    Attention ce code ne fonctionnera qu'une seule fois!
    A bientôt !
  `);

  return (
    <div class={styles.App}>
      <div id={styles.main}>
        <div id={styles.brand}>
          <img
            id={styles.logo}
            src="/devquest-logo.svg"
            alt="DevQuest"
          />

          <h1>Le premier rassemblement dev niortais</h1>
          <h2>Le 14 Juin 2024 au <a
            href="https://www.google.com/maps/place/Parc+des+Expositions+de+Noron/@46.3294067,-0.4903639,17z/data=!3m1!4b1!4m6!3m5!1s0x48072fcbc6eabbfb:0x4febad6b6c995284!8m2!3d46.3294067!4d-0.4903639!16s%2Fg%2F1tq6jg6w?entry=ttu">
            Parc des Expositions de Noron
          </a>
          </h2>

          <div class={styles.row}>
            <div>
              <a
                class={styles.btn}
                href="https://conference-hall.io/public/event/geINICiIQFU0WdORU423"
              >
                Proposer un sujet
              </a>
            </div>
            <div>
              <a
                class={styles.btn}
                href="https://www.billetweb.fr/devquest-niort-2024"
              >
                Accéder à la billeterie
              </a>
            </div>
          </div>
        </div>

        <div id={styles.infos}>
          <h1>Des conférences. Des sangliers. De la cervoise.</h1>

          <div class={styles.card}>
            L'été prochain, ne manquez pas le premier événement
            ludico-professionnel niortais dédié aux développeurs. Améliorez vos
            compétences et surtout... Profitez de l'aventure !
          </div>

          <div id={styles.rows}>
            {contacts?.map((contact: ContactType) => <Contact name={contact.name} asset={contact.asset} icon={contact.icon} link={contact.link} />)}
          </div>
        </div>
        <div id={styles.event}>
          <h1>Diantre, DevQuest dîtes-vous? Qu'est-ce donc que cela?</h1>
          <div id={styles.eventspec}>
            <div>
              <img height="96" src="/assets/backpack.png" aria-hidden="true" />
              <h2>1<br />journée</h2>
            </div>
            <div>
              <img height="96" src="/assets/knight.png" aria-hidden="true" />
              <h2>150 spectateurs</h2>
            </div>
            <div>
              <img height="96" src="/assets/king.png" aria-hidden="true" />
              <h2>16 partenaires</h2>
            </div>
            <div>
              <img height="96" src="/assets/quest.png" aria-hidden="true" />
              <h2>20 présentations multi format</h2>
            </div>
          </div>
        </div>
        <div id={styles.thematiques}>
          <h1>Les classes disponibles</h1>
          <Thematiques />
        </div>
        <div id={styles.program}>
          <h1>Les quêtes</h1>
          <div class={styles.card}>
            <img height="96" src="/assets/mission.png" aria-hidden="true" />
            <p id={styles.programtext}>Le programme n'est pas encore disponible, mais d'ores et déjà, nous pouvons vous
              dire que les histoires que vous entendrez vous raconterons des épopées sur l'intelligence artificielle
              mais aussi autour de l'artisanat logiciel... ou bien encore d'autres sujets passionnants!</p>
          </div>
        </div>
        <div id={styles.equipe}>
          <h1>Les maîtres du donjon</h1>
          <div id={styles.galery}>
            {members.sort(() => (Math.random() > .5) ? 1 : -1).map((m: Member) =>
              <Avatar
                img={m.img}
                firstName={m.firstName}
                lastName={m.lastName}
                role={m.role}
                github={m.github}
                linkedin={m.linkedin}
              />
            )}

          </div>
        </div>




        <div id={styles.equipe}>
          <p aria-hidden="true"><b>2024 - DevQuest</b></p>
        </div>

      </div>

    </div>
  );
};

export default App;
