'use client'
import styles from './BackToTop.module.scss';

const BackToTop = () => {
  const scrollToTop = () => document.documentElement.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <div id={styles.backToTop} onClick={scrollToTop}>
        <span className="icon-up-big"></span>
      </div>
    </>
  );
};

export default BackToTop;