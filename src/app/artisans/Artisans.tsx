import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Avatar } from "@/components/Avatar";
import { Membre } from "@/model/Membre";
import { promises as fs } from "fs";
import styles from "./Artisans.module.scss";

import backgroundImage from "/public/avatar/conseilDeMage.png";

const getArtisans = async () =>
  JSON.parse(
    await fs.readFile(
      process.cwd() + "/src/app/artisans/artisans.json",
      "utf8",
    ),
  ) as Membre[];

export async function Artisans() {
  const artisans = await getArtisans();

  return (
    <div className={styles.artisansContainer}>
      <Section
        className={styles.heroSection}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Card theme="Light">
          <h1>Les Artisans du DevQuest</h1>
          <h2>🔨 Les bâtisseurs de l&apos;ombre</h2>
          <p>
            Les Artisans du DevQuest sont des bénévoles qui contribuent tout au
            long de l&apos;année, en dehors du jour J. Développement
            d&apos;applications, gestion de projets, design… ils forgent les
            fondations de l&apos;événement.
          </p>
        </Card>
      </Section>

      <Section theme="Dark">
        <h2>⚒️ Leur rôle</h2>
        <p>
          Contrairement aux bénévoles du jour J, les Artisans œuvrent dans
          l&apos;ombre tout au long de l&apos;année pour que tout soit prêt le
          grand jour. Leurs contributions sont invisibles pour le public, mais
          indispensables.
        </p>
        <ul>
          <li>💻 Développement et maintenance des applications et du site</li>
          <li>📊 Gestion et organisation administrative</li>
          <li>🎨 Création graphique et identité visuelle</li>
          <li>📋 Support à la planification et la logistique</li>
        </ul>
      </Section>

      {artisans.length > 0 && (
        <Section theme="Light">
          <h2>🔧 Nos artisans (édition 2026)</h2>
          <div className={styles.artisansGrid}>
            {artisans.map((artisan) => (
              <div key={artisan.name} className={styles.artisanCard}>
                <Avatar
                  img={artisan.picture}
                  name={artisan.name}
                  role={artisan.role}
                  linkedin={artisan.linkedin}
                  github={artisan.github}
                  x={artisan.x}
                  withSocials={!!(artisan.linkedin || artisan.github || artisan.x)}
                  classes={{ main: styles.artisanAvatarWrapper }}
                />
                {artisan.citation && (
                  <blockquote className={styles.artisanCitation}>
                    {artisan.citation}
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section theme="Light">
        <h2>💛 Devenir artisan</h2>
        <p>
          Tu as des compétences techniques ou créatives et tu veux les mettre au
          service du DevQuest ? Contacte-nous ! Tout au long de l&apos;année,
          nous cherchons des mains supplémentaires pour construire
          l&apos;aventure.
        </p>
      </Section>
    </div>
  );
}
