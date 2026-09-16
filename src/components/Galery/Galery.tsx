import styles from './Galery.module.scss';
import { CSSProperties, ReactElement } from 'react';

interface GaleryProperties {
  children: ReactElement[];
  columns?: number;
}

export default function Galery({ children, columns = 4 }: GaleryProperties) {
  return (
    <div
      className={styles.galery}
      style={{ '--galery-columns': columns } as CSSProperties}
    >
      {children}
    </div>
  );
}
