import styles from './LogoPartenaire.module.scss';

interface LogoPartenaireProperties {
  name: string;
  asset?: string;
  website?: string;
  level: 'RARE' | 'COMMUN' | 'UNIQUE' | 'AUTRE';
}

export default function LogoPartenaire({ name, asset, website }: LogoPartenaireProperties) {
  return (
    <a href={website} target="_blank" className={styles.partenaire}>
      <span className={`${styles.logoPartenaire}`}>
        <img src={`/partenaires/${asset}`} alt={name} />
      </span>
      <h2>{name}</h2>
    </a>
  );
}
