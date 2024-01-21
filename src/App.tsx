import type { Component } from "solid-js";
import styles from "./App.module.scss";
import { Avatar } from "./components/Avatar";

interface Member {
  img: string;
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

const members = [
  {
    img: "/team/pacaud.jpeg",
    name: "Alexandre Pacaud",
    role: "#Dev",
    linkedin: "alexandre-pacaud-78266210a",
    github: "Lithyon"
  },
  {
    img: "/team/guerin.jpeg",
    name: "Alexandre Guérin",
    role: "#Dev",
    linkedin: "alexandre-guerin",
    github: "Ithrandil"
  },
  {
    img: "/team/lefloch.jpeg",
    name: "Guillaume Le Floch",
    role: "#Dev",
    github: "glefloch",
    linkedin: "guillaume-lefloch",
  },
  {
    img: "/team/nait.jpeg",
    name: "Samuel Nait",
    role: "#Dev",
    github: "Tisamu",
    linkedin: "samuel-nait",
  },
  {
    img: "/team/gouadon.jpeg",
    name: "Vincent Gouadon",
    role: "#Dev",
    linkedin: "vincent-gouadon-14099851",
    github: "nayosis",
  },
  {
    img: "/team/lecouls.jpeg",
    name: "Xavier Lecouls",
    role: "#ProductOwner",
    linkedin: "xavier-lecouls-53867b1",
  },
  {
    img: "/team/cozien.jpeg",
    name: "Alice Cozien",
    role: "#UX",
    linkedin: "cozienalice",
  },
  {
    img: "/team/duvivier.jpeg",
    name: "Nicolas Duvivier",
    role: "#UX",
    linkedin: "nduvivier"
  },
  {
    img: "/team/fremont.jpeg",
    name: "Florent Frémont",
    role: "#Dev",
    linkedin: "florent-frémont-b2a943a9",
  },
  {
    img: "/team/riou.jpeg",
    name: "Susan Riou",
    role: "#SysOps",
    linkedin: "susan-riou-5a7a4a139"
  }

]

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div id={styles.main}>
        <div id={styles.brand}>
          <img
            id={styles.logo}
            src="logo.svg"
            alt="DevQuest"
          />

          <h1>Le premier rassemblement dev niortais</h1>

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

          <div id={styles.rowrs}>
            <a
              class={styles.rs}
              href="https://www.linkedin.com/company/devquest-niort/"
              aria-label="Linkedin DevQuest"
            >
              <img
                height="32"
                width="32"
                src="/social/logo-linkedin.png"
                aria-hidden="true"
              />
            </a>

            <a class={styles.rs} href="https://twitter.com/DevQuestNiort" aria-label="Twitter DevQuest">
              <img height="32" width="32" src="/social/logo-x.png" aria-hidden="true" />
            </a>

            <a class={styles.rs} href="mailto:bureau@devquest.fr" aria-label="Envoyer un mail à bureau@devquest.fr">
              <span class="icon-mail" />
            </a>
          </div>
        </div>
        <div id={styles.event}>
          <h1>Diantre, DevQuest dîtes-vous? Qu'est-ce donc que cela?</h1>
          <div id={styles.eventspec}>
            <div>
              <img height="96" src="/assets/backpack.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">Rpg icons created by Freepik - Flaticon</a> */}
              <h2>1 journée</h2>
            </div>
            <div>
              <img height="96" src="/assets/knight.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">Rpg icons created by Freepik - Flaticon</a> */}
              <h2>150 spectateurs</h2>
            </div>
            <div>
              <img height="96" src="/assets/king.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/king" title="king icons">King icons created by Freepik - Flaticon</a> */}
              <h2>16 partenaires</h2>
            </div>
            <div>
              <img height="96" src="/assets/quest.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">Rpg icons created by David Carapinha - Flaticon</a> */}
              <h2>20 présentations multi format</h2>
            </div>
          </div>
        </div>

        <div id={styles.equipe}>
          <h1>L'équipe</h1>
          <div id={styles.galery}>
            {members.sort(() => (Math.random() > .5) ? 1 : -1).map((m: Member) =>
              <Avatar
                img={m.img}
                name={m.name}
                role={m.role}
                github={m.github}
                linkedin={m.linkedin}
              />
            )}

          </div>
        </div>

        <div id={styles.program}>
          <h1>Le programme</h1>
          <p id={styles.programtext} >Le programme n'est pas encore disponible, mais d'ores et déjà, nous pouvons vous dire que les histoires que vous entendrez vous raconterons des épopées sur l'intelligence artificielle mais aussi autour de l'artisanat logiciel... ou bien encore d'autres sujets passionnants!</p>
          <p>2024 - DevQuest</p>
        </div>
      </div>
    </div>
  );
};

export default App;
