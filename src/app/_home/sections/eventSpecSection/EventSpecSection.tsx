import { Section } from "@/components/Section";
import Image from "next/image";

import styles from "./EventSpecSection.module.scss";

export function EventSpecSection() {
  return (
    <>
      <Section theme="Dark">
        <h2>
          Diantre, le DevQuest dîtes-vous&nbsp;? <br />
          Qu&apos;est-ce donc que cela&nbsp;?
        </h2>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="backpack"
              src="/icons-rp/backpack.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              2<br />
              journées
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/knight.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              600
              <br />
              spectateurs / jour
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="king"
              src="/icons-rp/king.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              20
              <br />
              partenaires
            </p>
          </div>
        </div>
      </Section>
      <Section theme="Dark">
        <h2>Avec votre billet</h2>
        <p className={styles.eventSpecText}>Vous aurez accès à</p>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/potion.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>23 conférences</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="king"
              src="/icons-rp/potion-tr.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>12 quick conferences</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="backpack"
              src="/icons-rp/forgeron.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>10 workshops</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="quest"
              src="/icons-rp/village.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              un espace de rencontre avec nos partenaires
            </p>
          </div>
        </div>
        <p className={styles.eventSpecText}>Mais aussi</p>
        <div id={styles.eventspec}>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/chicken.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              le repas du midi, pour tous les gouts
            </p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/tonneau-de-vin.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>la boisson</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/gateaux.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>une collation le matin</p>
          </div>
          <div>
            <Image
              height={96}
              width={96}
              alt="knight"
              src="/icons-rp/group.png"
              aria-hidden="true"
            />
            <p className={styles.eventSpecText}>
              des organisateurs aux petits soins
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
