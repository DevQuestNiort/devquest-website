import passData from "@/data/2027/pass.json";
import type { PassData, PassItem } from "@/model/Pass";
import styles from "./PassContents.module.scss";

const pass: PassData = passData;

interface PassContentsProperties {
  /** Affiche la phrase de validité sous la liste (true par défaut). */
  readonly showValidity?: boolean;
  /** Affiche les options payantes (t-shirt…) sous le pass (true par défaut). */
  readonly showOptions?: boolean;
}

function PassItems({ items }: { readonly items: PassItem[] }) {
  return (
    <ul className={styles.items}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.icon} alt="" width={56} height={56} />
          <span className={styles.label}>{item.label}</span>
          {item.details && (
            <span className={styles.details}>{item.details}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Liste illustrée de ce que comprend un pass participant, et de ses options. */
export default function PassContents({
  showValidity = true,
  showOptions = true,
}: PassContentsProperties) {
  const options = pass.options ?? [];
  return (
    <div className={styles.pass}>
      <PassItems items={pass.items} />
      {showValidity && <p className={styles.validity}>{pass.validity}</p>}
      {showOptions && options.length > 0 && (
        <div className={styles.options}>
          <h3>En option</h3>
          <p>En plus de votre place, vous pourrez acheter :</p>
          <PassItems items={options} />
        </div>
      )}
    </div>
  );
}
