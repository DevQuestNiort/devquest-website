import styles from './Galery.module.scss';
import { CSSProperties, ReactElement } from 'react';

interface GaleryProperties {
  children: ReactElement[];
  columns?: number;
  tabletColumns?: number;
  mobileColumns?: number;
}

export default function Galery({
  children,
  columns = 4,
  tabletColumns = 2,
  mobileColumns = 1,
}: GaleryProperties) {
  return (
    <div
      className={styles.galery}
      style={
        {
          '--galery-columns': columns,
          '--galery-tablet-columns': tabletColumns,
          '--galery-mobile-columns': mobileColumns,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
