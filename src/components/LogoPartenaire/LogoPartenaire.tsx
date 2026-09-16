import styles from "./LogoPartenaire.module.scss";
import Image from "next/image";
import { Component, ElementType } from "react";

interface LogoPartenaireProperties {
  name: string;
  layus?: string;
  showName?: boolean;
  showLayus?: boolean;
  asset?: string;
  website?: string;
  level: "RARE" | "COMMUN" | "LEGENDAIRE" | "AUTRE" | "EPIQUE";
  actif: boolean;
  as?: ElementType;
}

export default function LogoPartenaire({
  name,
  layus,
  showName = true,
  showLayus = false,
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
    <div className={styles.cardpartenaire} >
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
     {showLayus && layus && <div>
                <p>
                  {layus}
                </p>
              </div>}
    </div>
  ) : null;
}
