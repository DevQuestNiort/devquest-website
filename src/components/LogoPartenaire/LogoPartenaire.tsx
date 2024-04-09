import styles from "./LogoPartenaire.module.scss";
import Image from "next/image";
import { Component, ElementType } from "react";

interface LogoPartenaireProperties {
  name: string;
  showName?: boolean;
  asset?: string;
  website?: string;
  level: "RARE" | "COMMUN" | "UNIQUE" | "AUTRE";
  actif: boolean;
  as?: ElementType;
}

export default function LogoPartenaire({
  name,
  showName = true,
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
            alt={`${name} est partenaire ${level} de l'événement`}
            width={128}
            height={128}
            className={styles.logoPartenaire}
          />
        ) : (
          name
        )}
      </div>
      {showName && <p>{name}</p>}
    </Component>
  ) : null;
}
