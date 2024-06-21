import styles from "./plan.module.scss";
import { LinkButton } from "@/components/LinkButton";

const Plan = () => {
  return (
    <div className={styles.main}>
      <h1>Plan des lieux</h1>
      <div className={styles.imageContainer}>
        <img
          className={styles.desktopPlan}
          src="/plan.png"
          alt="Plan des lieux"
        />
      </div>

      <div className={styles.dlBtn}>
        <LinkButton
          theme="Primary"
          href="/Plan DevQuest.png"
          download={"Plan DevQuest.png"}
        >
          Télécharger&nbsp;le&nbsp;plan
        </LinkButton>
      </div>
    </div>
  );
};

export default Plan;
