import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";
import styles from "./DevenezSponsor.module.scss";

import backgroundImage from "/public/img/2027/2027-guilde-hero.png";

const groups = [
  { key: "stand", title: "Stand & places", icon: "/icons-rp/dnd-stand.png" },
  { key: "visibilite", title: "Visibilité", icon: "/icons-rp/dnd-visibilite.png" },
  { key: "social", title: "Réseaux sociaux", icon: "/icons-rp/dnd-reseaux.png" },
  { key: "bonus", title: "Bonus", icon: "/icons-rp/dnd-bonus.png" },
] as const;

type GroupKey = (typeof groups)[number]["key"];

interface Pack {
  code: string;
  icon: string;
  name: string;
  price: string;
  extension?: string;
  perks: Record<GroupKey, string[]>;
}

const packs: Pack[] = [
  {
    code: "COMMUN",
    icon: "/icons-rp/communsword.png",
    name: "Pack Commun",
    price: "1 000 €",
    perks: {
      stand: ["1 pass DevQuest 2 jours"],
      visibilite: [
        "Logo sur le panneau d'entrée",
        "Logo et redirection vers le site sur devquest.fr",
      ],
      social: ["1 communication sur les réseaux sociaux"],
      bonus: [],
    },
  },
  {
    code: "RARE",
    icon: "/icons-rp/raresword.png",
    name: "Pack Rare",
    price: "4 000 €",
    extension: "+ 4 000 €",
    perks: {
      stand: ["1 stand de 3x4m", "2 pass DevQuest 2 jours"],
      visibilite: [
        "Logo sur le panneau d'entrée",
        "Logo et redirection vers le site sur devquest.fr",
        "Logo sur les slides de transition lors de l'évènement",
      ],
      social: ["1 communication sur les réseaux sociaux"],
      bonus: [],
    },
  },
  {
    code: "EPIQUE",
    icon: "/icons-rp/epicsword.png",
    name: "Pack Épique",
    price: "5 000 €",
    extension: "+ 3 500 €",
    perks: {
      stand: ["1 stand de 3x4m", "4 pass DevQuest 2 jours"],
      visibilite: [
        "Logo sur le panneau d'entrée",
        "Logo et redirection vers le site sur devquest.fr",
        "Logo sur les slides de transition lors de l'évènement",
        "Logo sur les livrets visiteurs",
        "Lien vers votre site dans la description des replays",
      ],
      social: ["2 communications sur les réseaux sociaux"],
      bonus: ["Participation au jeu DevQuest (QRGlyphe)"],
    },
  },
  {
    code: "LEGENDAIRE",
    icon: "/icons-rp/uniquesword.png",
    name: "Pack Légendaire",
    price: "7 000 €",
    extension: "+ 3 000 €",
    perks: {
      stand: ["1 stand de 3x4m", "5 pass DevQuest 2 jours"],
      visibilite: [
        "Logo sur le panneau d'entrée",
        "Logo et redirection vers le site sur devquest.fr",
        "Logo sur les slides de transition lors de l'évènement",
        "Logo sur les livrets visiteurs",
        "Lien vers votre site dans la description des replays",
        "Surprise du DevQuest",
        "Logo sur les tours de cou",
        "Logo affiché sur la diffusion du direct Twitch",
        "Lien poussé dans le tchat Twitch",
        "Logo sur les vidéos des replays YouTube",
      ],
      social: ["2 communications sur les réseaux sociaux"],
      bonus: [
        "Participation au jeu DevQuest (QRGlyphe)",
        "Activité sur le stand par DevQuest",
      ],
    },
  },
];

export function DevenezSponsor() {
  return (
    <div className={styles.container}>
      <Section
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 63, 145, 0.2), rgba(0, 63, 145, 0.58)), url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Card variant="Main">
          <h1>Devenez sponsor</h1>
          <h2>🛡️ Rejoignez la table des mécènes</h2>
          <p>
            Le DevQuest ne vit que grâce à ses alliés. En soutenant la quête,
            votre bannière flotte devant des centaines de développeur·ses,
            étudiant·es et décideur·ses du bassin niortais.
          </p>
          <LinkButton variant="Chapter" href="#packs">
            Découvrir les packs
          </LinkButton>
        </Card>
      </Section>

      <Section variant="Main">
        <h2>🤝 Pourquoi nous soutenir ?</h2>
        <ul className={styles.why}>
          <li>
            <strong>500</strong>
            <span>participant·es attendu·es</span>
          </li>
          <li>
            <strong>40</strong>
            <span>sessions et ateliers</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Jours</span>
          </li>
        </ul>
        <p>
          Le DevQuest, c&apos;est deux jours de rencontres, de conférences et
          d&apos;ateliers au cœur de Niort, portés par des bénévoles
          passionné·es. En rejoignant la table des mécènes, vous associez votre
          bannière à un événement qui rassemble toute la communauté tech du
          territoire.
        </p>
        <ul className={styles.benefits}>
          <li>
            <strong>Visibilité</strong> : votre marque est présente sur le
            site, sur place, dans les replays et sur les réseaux, auprès de
            centaines de professionnel·les et d&apos;étudiant·es du numérique.
          </li>
          <li>
            <strong>Recrutement</strong> : rencontrez en direct les talents de
            demain, sur votre stand ou autour du jeu DevQuest.
          </li>
          <li>
            <strong>Rayonnement local</strong> : affichez votre ancrage dans
            l&apos;écosystème niortais et poitevin.
          </li>
          <li>
            <strong>Soutien à la communauté</strong> : votre contribution
            finance un événement accessible et fait vivre la tech locale toute
            l&apos;année.
          </li>
        </ul>
      </Section>

      <Section variant="ChapterLight" id="packs">
        <h2>⚔️ Les packs sponsors</h2>
        <div className={styles.packs}>
          {/* Une ligne de grille par groupe : les cellules d'une même ligne
              ont automatiquement la même hauteur, donc les groupes restent
              alignés d'un pack à l'autre. */}
          {packs.map((pack, i) => (
            <div
              key={`${pack.code}-header`}
              className={`${styles.cell} ${styles.packHeader}`}
              style={{ "--pack": i } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pack.icon} alt="" width={56} height={56} />
              <h3>{pack.name}</h3>
              <p className={styles.price}>{pack.price}</p>
            </div>
          ))}
          {groups.map((group, g) =>
            packs.map((pack, i) => (
              <div
                key={`${pack.code}-${group.key}`}
                className={`${styles.cell} ${styles.group} `}
                style={{ "--pack": i } as React.CSSProperties}
              >
                <h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={group.icon} alt="" width={32} height={32} />
                  {group.title}
                </h4>
                {pack.perks[group.key].length > 0 ? (
                  <ul>
                    {pack.perks[group.key].map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.none}>—</p>
                )}
              </div>
            )),
          )}
          {packs.map((pack, i) => (
            <div
              key={`${pack.code}-extension`}
              className={`${styles.cell} ${styles.group} ${styles.lastGroup}`}
              style={{ "--pack": i } as React.CSSProperties}
            >
              {pack.extension && (
                <>
                  <h4>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/icons-rp/dnd-extension.png"
                      alt=""
                      width={32}
                      height={32}
                    />
                    Possibilité d&apos;extension
                  </h4>
                  <p className={styles.extensionInfo}>
                    Un second stand en plus de celui inclus dans le pack.
                  </p>
                  <p className={styles.extension}>{pack.extension}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Un besoin particulier ? Contactez nous ! 
        </p>
      </Section>

      <Section variant="Chapter" id="reunion">
        <h2>📜 Réunion de présentation des packs</h2>
        <Card variant="Main" className={styles.meeting}>
          <div className={styles.when}>
            <span className={styles.day}>27</span>
            <span className={styles.month}>novembre 2026</span>
            <span className={styles.hour}>12h00</span>
          </div>
          <div className={styles.what}>
            <p>
              Un grand conseil en <strong>visioconférence</strong> pour
              dévoiler les packs sponsors, répondre à vos questions et vous
              présenter cette quatrième quête.
            </p>
            <LinkButton
              variant="Chapter"
              href="https://calendar.app.google/MM8GqZP8VBx3ZDRC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              S&apos;inscrire à la réunion
            </LinkButton>
          </div>
        </Card>
      </Section>

      <Section variant="Main">
        <h2>✉️ Une question ?</h2>
        <p>
          Contactez la Guilde : <a href="mailto:bureau@devquest.fr">bureau@devquest.fr</a>
        </p>
      </Section>
    </div>
  );
}
    