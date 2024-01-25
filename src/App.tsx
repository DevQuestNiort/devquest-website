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
    img: "https://media.licdn.com/dms/image/D4E03AQEc3Um3Fx4t5Q/profile-displayphoto-shrink_800_800/0/1677851859580?e=1707350400&v=beta&t=s-04aCeNnRZSGU4r8LbK6N91lsFTGUFjUIUMi5rLMsg",
    name: "Alexandre Pacaud",
    role: "#Dev",
    linkedin: "alexandre-pacaud-78266210a",
    github: "Lithyon"
  },
  {
    img: "https://media.licdn.com/dms/image/D4E03AQEUfL_txA2kfg/profile-displayphoto-shrink_800_800/0/1679322061985?e=1707350400&v=beta&t=8a-20GsC1Ip8Kt1Bl49cekZnRcKI5GbgtNiCRXCWZPQ",
    name: "Alexandre Guérin",
    role: "#Dev",
    linkedin: "alexandre-guerin",
    github: "Ithrandil"
  },
  {
    img: "https://media.licdn.com/dms/image/C5603AQHAeYGqwnhuFA/profile-displayphoto-shrink_800_800/0/1516958131555?e=1707350400&v=beta&t=9OUC-qHGNXf0FqQh7HqjkjT7jGHcOTtlj7rPLu4qGTo",
    name: "Guillaume Le Floch",
    role: "#Dev",
    github: "glefloch",
    linkedin: "guillaume-lefloch",
  },
  {
    img: "https://media.licdn.com/dms/image/C5103AQFPsXqaEP8SJw/profile-displayphoto-shrink_800_800/0/1516962932996?e=1707350400&v=beta&t=LL9xN9enO9Vbljnce5G8N76KPvlh6GcD-tMawSobvU8",
    name: "Samuel Nait",
    role: "#Dev",
    github: "Tisamu",
    linkedin: "samuel-nait",
  },
  {
    img: "https://media.licdn.com/dms/image/C5103AQFKDG5buZNfGw/profile-displayphoto-shrink_800_800/0/1516543245875?e=1707350400&v=beta&t=mTPn5FOr4iM-M58xZNEdJZsxe4JwZgEhhmZqipnupys",
    name: "Vincent Gouadon",
    role: "#Dev",
    linkedin: "vincent-gouadon-14099851",
    github: "nayosis",
  },
  {
    img: "https://ca.slack-edge.com/T055LU83QP2-U055JRXG9ND-3f5d9c4690f7-512",
    name: "Xavier Lecouls",
    role: "#ProductOwner",
    linkedin: "xavier-lecouls-53867b1",
  },
  {
    img: "https://media.licdn.com/dms/image/D4E03AQHf5tj7o3FZLQ/profile-displayphoto-shrink_800_800/0/1672238774385?e=1707350400&v=beta&t=yv5RPqeo5aDjgtKveY5L9P_0kX83lCcd0ldLlbfimX0",
    name: "Alice Cozien",
    role: "#UX",
    linkedin: "cozienalice",
  },
  {
    img: "https://media.licdn.com/dms/image/C4E03AQG6mPrbLo3C1w/profile-displayphoto-shrink_800_800/0/1652993257274?e=1707350400&v=beta&t=ualtjp70jHqAYAr_LnUaX40S1Lb2lLXSJO6_Ly2LZ4g",
    name: "Nicolas Duvivier",
    role: "#UX",
    linkedin: "nduvivier"
  },
  {
    img: "https://media.licdn.com/dms/image/C4D03AQGNUzdW7g_ugg/profile-displayphoto-shrink_800_800/0/1597946404403?e=1707350400&v=beta&t=alSxQtyy6Lk4mPifSMm99jBo17cYuaGceIgGYxn-mXE",
    name: "Florent Frémont",
    role: "#Dev",
    linkedin: "florent-frémont-b2a943a9",
  },
  {
    img: "https://media.licdn.com/dms/image/D4E03AQFYSTY7EE_IOw/profile-displayphoto-shrink_800_800/0/1670840709307?e=1707350400&v=beta&t=thWeN8pqhdYO9No11HCy8eZSlAp7_sqxpxY7r-BBWOo",
    name: "Susan Riou",
    role: "#SysOps",
    linkedin: "susan-riou-5a7a4a139"
  }

]

const App: Component = () => {

  console.log(`
    Félicitations explorateur !
    Tu es l'heureux gagnant d'une place gratuite pour accéder à notre aventure grâce à ta curiosité !
    Pour récupérer ta place, utilise le code secret issue d'un langage ancien LAPIN_GAROU directement sur notre billetterie.
    Attention ce code ne fonctionnera qu'une seule fois!
    A bientôt !
  `)


  return (
    <div class={styles.App}>
      <div id={styles.main}>
        <div id={styles.brand}>
          <img
            id={styles.logo}
            src="LOGO.svg"
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
                src="logo-linkedin.png"
                aria-hidden="true"
              />
            </a>

            <a class={styles.rs} href="https://twitter.com/DevQuestNiort" aria-label="Twitter DevQuest">
              <img height="32" width="32" src="logo-x.png" aria-hidden="true" />
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
              <img height="96" src="backpack.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">Rpg icons created by Freepik - Flaticon</a> */}
              <h2>1 journée</h2>
            </div>
            <div>
              <img height="96" src="knight.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/rpg" title="rpg icons">Rpg icons created by Freepik - Flaticon</a> */}
              <h2>150 spectateurs</h2>
            </div>
            <div>
              <img height="96" src="king.png" aria-hidden="true" />
              {/* <a href="https://www.flaticon.com/free-icons/king" title="king icons">King icons created by Freepik - Flaticon</a> */}
              <h2>16 partenaires</h2>
            </div>
            <div>
              <img height="96" src="quest.png" aria-hidden="true" />
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
          <p>2024 - DevQuest</p>
        </div>
      </div>
    </div>
  );
};

export default App;
