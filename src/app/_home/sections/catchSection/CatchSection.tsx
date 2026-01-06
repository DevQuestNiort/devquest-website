import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Contact } from "@/components/Contact";
import { MoyensContact } from "@/model/MoyensContact";

import styles from "./CatchSection.module.scss";

interface CatchSectionProperties {
  readonly contacts: MoyensContact[];
}
export function CatchSection({ contacts }: CatchSectionProperties) {
  return (
    <Section theme="Dark" className={styles.catch}>
      <h2>Jamais deux sans trois !</h2>

      <Card className={styles.catchCard}>
        Les 11 et 12 juin 2026, le DevQuest revient à Noron pour vous proposer
        toujours plus de conférences et d&apos;aventures !
        <br />
        <br />
        Suivez-nous pour ne pas manquer les futures quêtes !
      </Card>

      <div id={styles.rows}>
        {contacts.map((contact, i) => (
          <Contact
            key={i}
            name={contact.name}
            asset={contact.asset}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </div>
    </Section>
  );
}
