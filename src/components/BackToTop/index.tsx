'use client'
import styles from './BackToTop.module.scss';
import Image from "next/image";

const BackToTop = () => {
  const scrollToTop = () => document.documentElement.scrollIntoView({ behavior: 'smooth' });

  return (
        <Image id={styles.backToTop} onClick={scrollToTop} height="48" width="48" src="back-to-top.svg" alt="Retour en ahut de la page" aria-hidden="true"/>
  );
};

export default BackToTop;