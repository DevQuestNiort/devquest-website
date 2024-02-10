import styles from "./LogoPartenaire.module.scss";
import Image from "next/image";

interface LogoPartenaireProperties {
  name: string;
  asset?: string;
  website?: string;
  level: "RARE" | "COMMUN" | "UNIQUE" | "AUTRE";
}

export default function LogoPartenaire({
  name,
  asset,
  website,
}: LogoPartenaireProperties) {
  return (
    <a href={website} target="_blank" className={styles.partenaire}>
      <span className={`${styles.logoPartenaire}`}>
        <Image src={`/partenaires/${asset}`} alt={name} fill />
      </span>
      <h2>{name}</h2>
    </a>
  );
}
