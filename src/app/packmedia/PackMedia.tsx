"use client";

import { Section } from "@/components/Section";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import { useState } from "react";
import styles from "./PackMedia.module.scss";

const listeMedia = [
  "DQ2026-AvecDate-Blanc.png",
  "DQ2026-AvecDate-Blanc.svg",
  "DQ2026-AvecDate-Couleur.png",
  "DQ2026-AvecDate-Couleur.svg",
  "DQ2026-AvecDate-CouleurInverse.png",
  "DQ2026-AvecDate-CouleurInverse.svg",
  "DQ2026-AvecDate-CouleurSansSable.png",
  "DQ2026-AvecDate-CouleurSansSable.svg",
  "DQ2026-AvecDate-Noir.png",
  "DQ2026-AvecDate-Noir.svg",
  "DQ2026-AvecDate-NoirEtBlanc.png",
  "DQ2026-AvecDate-NoirEtBlanc.svg",
  "DQ2026-SansDate-Blanc.png",
  "DQ2026-SansDate-Blanc.svg",
  "DQ2026-SansDate-Couleur.png",
  "DQ2026-SansDate-Couleur.svg",
  "DQ2026-SansDate-CouleurInverse.png",
  "DQ2026-SansDate-CouleurInverse.svg",
  "DQ2026-SansDate-CouleurSansSable.png",
  "DQ2026-SansDate-CouleurSansSable.svg",
  "DQ2026-SansDate-Noir.png",
  "DQ2026-SansDate-Noir.svg",
  "DQ2026-SansDate-NoirEtBlanc.png",
  "DQ2026-SansDate-NoirEtBlanc.svg",
];

export function PackMedia() {
  const [bgColor, setBgColor] = useState<"gray" | "white" | "black">("gray");

  const getBgColorClass = () => {
    switch (bgColor) {
      case "white":
        return styles.bgWhite;
      case "black":
        return styles.bgBlack;
      default:
        return styles.bgGray;
    }
  };

  return (
    <Section theme={"Light"}>
      <div className={styles.cdc}>
        <h2>Pack Media et usage</h2>
        <p>voici l&apos;ensemble des logos du devquest pour vos besoins.</p>

        <div className={styles.colorSelector}>
          <span>Couleur de fond :</span>
          <button
            className={`${styles.colorBtn} ${bgColor === "gray" ? styles.active : ""}`}
            onClick={() => setBgColor("gray")}
          >
            Gris
          </button>
          <button
            className={`${styles.colorBtn} ${bgColor === "white" ? styles.active : ""}`}
            onClick={() => setBgColor("white")}
          >
            Blanc
          </button>
          <button
            className={`${styles.colorBtn} ${bgColor === "black" ? styles.active : ""}`}
            onClick={() => setBgColor("black")}
          >
            Noir
          </button>
        </div>

        <div className={styles.mediaGrid}>
          {listeMedia.map((media) => (
            <div key={media} className={styles.mediaCard}>
              <div
                className={`${styles.mediaImageContainer} ${getBgColorClass()}`}
              >
                <Image
                  src={`logo/${media}`}
                  alt="DevQuest"
                  priority
                  width={80}
                  height={80}
                  className={styles.mediaImage}
                />
              </div>
              <div>
                <p className={styles.mediaName}>{media}</p>
                <LinkButton
                  theme="Primary"
                  href={`logo/${media}`}
                  download={media}
                  style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
                >
                  Télécharger
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
