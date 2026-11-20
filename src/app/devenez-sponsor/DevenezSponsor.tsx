import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/LinkButton";
import styles from "./DevenezSponsor.module.scss";

import backgroundImage from "/public/img/2027/2027-guilde-hero.png";

import {
  groups,
  packPerkLabels,
  packs,
  perks,
  tableCell,
  tableLabel,
} from "./sponsorPacks";

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
          {groups.map((group) =>
            packs.map((pack, i) => {
              const labels = packPerkLabels(pack, group.key);
              return (
                <div
                  key={`${pack.code}-${group.key}`}
                  className={`${styles.cell} ${styles.group}`}
                  style={{ "--pack": i } as React.CSSProperties}
                >
                  <h4>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={group.icon} alt="" width={32} height={32} />
                    {group.title}
                  </h4>
                  {labels.length > 0 ? (
                    <ul>
                      {labels.map(({ label, details }) => (
                        <li key={label} title={details}>
                          {label}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.none}>—</p>
                  )}
                </div>
              );
            }),
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

        {/* Ancre utilisée par le QR code : /devenez-sponsor#comparatif */}
        <h3 id="comparatif" className={styles.compareTitle}>
          Comparatif des packs
        </h3>
        <div className={styles.compareWrapper}>
          <table
            className={styles.compare}
            style={{ "--packs": packs.length } as React.CSSProperties}
          >
            <thead>
              <tr>
                <th scope="col">Option</th>
                {packs.map((pack) => (
                  <th key={pack.code} scope="col">
                    {pack.name.replace(/^Pack /, "")}
                    <span className={styles.comparePrice}>{pack.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group.key}>
                <tr className={styles.compareGroup}>
                  <th scope="colgroup" colSpan={packs.length + 1}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={group.icon} alt="" width={24} height={24} />
                    {group.title}
                  </th>
                </tr>
                {perks
                  .filter((perk) => perk.group === group.key)
                  .map((perk) => (
                    <tr key={perk.key}>
                      <th scope="row">
                        {tableLabel(perk)}
                        {perk.details && (
                          <span className={styles.compareDetails}>
                            {perk.details}
                          </span>
                        )}
                      </th>
                      {packs.map((pack) => (
                        <td key={pack.code}>{tableCell(pack, perk)}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            ))}
            <tbody>
              <tr className={styles.compareGroup}>
                <th scope="colgroup" colSpan={packs.length + 1}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons-rp/dnd-extension.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                  Possibilité d&apos;extension
                </th>
              </tr>
              <tr>
                <th scope="row">Second stand</th>
                {packs.map((pack) => (
                  <td key={pack.code}>{pack.extension ?? "—"}</td>
                ))}
              </tr>
            </tbody>
          </table>
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
    