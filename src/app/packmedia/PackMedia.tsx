"use client";

import { Section } from "@/components/Section";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import { useState } from "react";
import styles from "./PackMedia.module.scss";

const mediaGroups = {
  avecDate: {
    title: "Logos avec date",
    variants: {
      blanc: {
        title: "Version Blanc",
        files: ["DQ2026-AvecDate-Blanc.png", "DQ2026-AvecDate-Blanc.svg"],
      },
      couleur: {
        title: "Version Couleur",
        files: ["DQ2026-AvecDate-Couleur.png", "DQ2026-AvecDate-Couleur.svg"],
      },
      couleurInverse: {
        title: "Version Couleur Inverse",
        files: [
          "DQ2026-AvecDate-CouleurInverse.png",
          "DQ2026-AvecDate-CouleurInverse.svg",
        ],
      },
      couleurSansSable: {
        title: "Version Couleur Sans Sable",
        files: [
          "DQ2026-AvecDate-CouleurSansSable.png",
          "DQ2026-AvecDate-CouleurSansSable.svg",
        ],
      },
      noir: {
        title: "Version Noir",
        files: ["DQ2026-AvecDate-Noir.png", "DQ2026-AvecDate-Noir.svg"],
      },
      noirEtBlanc: {
        title: "Version Noir et Blanc",
        files: [
          "DQ2026-AvecDate-NoirEtBlanc.png",
          "DQ2026-AvecDate-NoirEtBlanc.svg",
        ],
      },
    },
  },
  sansDate: {
    title: "Logos sans date",
    variants: {
      blanc: {
        title: "Version Blanc",
        files: ["DQ2026-SansDate-Blanc.png", "DQ2026-SansDate-Blanc.svg"],
      },
      couleur: {
        title: "Version Couleur",
        files: ["DQ2026-SansDate-Couleur.png", "DQ2026-SansDate-Couleur.svg"],
      },
      couleurInverse: {
        title: "Version Couleur Inverse",
        files: [
          "DQ2026-SansDate-CouleurInverse.png",
          "DQ2026-SansDate-CouleurInverse.svg",
        ],
      },
      couleurSansSable: {
        title: "Version Couleur Sans Sable",
        files: [
          "DQ2026-SansDate-CouleurSansSable.png",
          "DQ2026-SansDate-CouleurSansSable.svg",
        ],
      },
      noir: {
        title: "Version Noir",
        files: ["DQ2026-SansDate-Noir.png", "DQ2026-SansDate-Noir.svg"],
      },
      noirEtBlanc: {
        title: "Version Noir et Blanc",
        files: [
          "DQ2026-SansDate-NoirEtBlanc.png",
          "DQ2026-SansDate-NoirEtBlanc.svg",
        ],
      },
    },
  },
  longAvecDate: {
    title: "Logos longs avec date",
    variants: {
      couleur: {
        title: "Version Couleur",
        files: [
          "DQ2026-LongAvecDate-Couleur.png",
          "DQ2026-LongAvecDate-Couleur.svg",
        ],
      },
      couleurInverse: {
        title: "Version Couleur Inverse",
        files: [
          "DQ2026-LongAvecDate-CouleurInverse.png",
          "DQ2026-LongAvecDate-CouleurInverse.svg",
        ],
      },
      noirEtBlanc: {
        title: "Version Noir et Blanc",
        files: [
          "DQ2026-LongAvecDate-NoirEtBlanc.png",
          "DQ2026-LongAvecDate-NoirEtBlanc.svg",
        ],
      },
    },
  },
  longSansDate: {
    title: "Logos longs sans date",
    variants: {
      couleur: {
        title: "Version Couleur",
        files: [
          "DQ2026-LongSansDate-Couleur.png",
          "DQ2026-LongSansDate-Couleur.svg",
        ],
      },
      couleurInverse: {
        title: "Version Couleur Inverse",
        files: [
          "DQ2026-LongSansDate-CouleurInverse.png",
          "DQ2026-LongSansDate-CouleurInverse.svg",
        ],
      },
      noirEtBlanc: {
        title: "Version Noir et Blanc",
        files: [
          "DQ2026-LongSansDate-NoirEtBlanc.png",
          "DQ2026-LongSansDate-NoirEtBlanc.svg",
        ],
      },
    },
  },
};

export function PackMedia() {
  const [bgColor, setBgColor] = useState<
    "gray" | "white" | "black" | "sable" | "rouge"
  >("gray");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getBgColorClass = () => {
    switch (bgColor) {
      case "white":
        return styles.bgWhite;
      case "black":
        return styles.bgBlack;
      case "sable":
        return styles.bgSable;
      case "rouge":
        return styles.bgRed;
      default:
        return styles.bgGray;
    }
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
          <button
            className={`${styles.colorBtn} ${bgColor === "sable" ? styles.active : ""}`}
            onClick={() => setBgColor("sable")}
          >
            Sable
          </button>
          <button
            className={`${styles.colorBtn} ${bgColor === "rouge" ? styles.active : ""}`}
            onClick={() => setBgColor("rouge")}
          >
            Rouge
          </button>
        </div>

        <div className={styles.mediaGroups}>
          {Object.entries(mediaGroups).map(([groupKey, group]) => (
            <div key={groupKey} className={styles.mediaGroup}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <div className={styles.mediaGrid}>
                {Object.entries(group.variants).map(([variantKey, variant]) => (
                  <div key={variantKey} className={styles.variantCard}>
                    <h4 className={styles.variantTitle}>{variant.title}</h4>
                    <div className={styles.filesGrid}>
                      {variant.files.map((file) => (
                        <div key={file} className={styles.mediaCard}>
                          <div
                            className={`${styles.mediaImageContainer} ${getBgColorClass()}`}
                          >
                            <Image
                              src={`logo/${file}`}
                              alt="DevQuest"
                              priority
                              width={80}
                              height={80}
                              className={styles.mediaImage}
                              style={{ cursor: "pointer" }}
                              onClick={() => openModal(file)}
                            />
                          </div>
                          <div>
                            <p className={styles.mediaName}>{file}</p>
                            <LinkButton
                              theme="Primary"
                              href={`logo/${file}`}
                              download={file}
                              style={{
                                fontSize: "0.875rem",
                                padding: "0.375rem 0.75rem",
                              }}
                            >
                              Télécharger
                            </LinkButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <div
                className={`${styles.modalImageContainer} ${getBgColorClass()}`}
              >
                <Image
                  src={`logo/${selectedImage}`}
                  alt="DevQuest Logo"
                  priority
                  width={400}
                  height={400}
                  className={styles.modalImage}
                />
              </div>
              <p className={styles.modalImageName}>{selectedImage}</p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
