import styles from "./LogoPartenaire.module.scss";
import Image from "next/image";
import { Component, ElementType } from "react";

interface LogoPartenaireProperties {
  name: string;
  asset?: string;
  website?: string;
  level: "RARE" | "COMMUN" | "UNIQUE" | "AUTRE";
  actif: boolean;
  as?: ElementType;
}

export default function LogoPartenaire({
  name,
  asset,
  website,
  actif,
  level,
  as: Component = "a",
}: LogoPartenaireProperties) {
  let target: string | null = "_blank";

  if (!website) {
    Component = "div";
    target = null;
  }

  return actif ? (
    <Component href={website} target={target} className={styles.partenaire}>
      <div
        className={`${styles.logoPartenaireContainer} ${styles[`logoPartenaireContainer${level}`]}`}
      >
        {asset ? (
          <Image
            src={`/partenaires/${asset}`}
            alt={name}
            width={128}
            height={128}
            className={styles.logoPartenaire}
          />
        ) : (
          name
        )}
      </div>
      <p>{name}</p>
    </Component>
  ) : null;
}
