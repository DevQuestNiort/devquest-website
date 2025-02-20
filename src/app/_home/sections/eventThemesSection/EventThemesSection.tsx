import { Section } from "@/components/Section";
import { Theme } from "@/model/Theme";
import { Thematique } from "@/components/Thematique";

import styles from "./EventThemesSection.module.scss";

interface EventThemesSectionProperties {
  readonly themes: Theme[];
}

export function EventThemesSection({ themes }: EventThemesSectionProperties) {
  return (
    <Section theme="Light">
      <h2>Les classes disponibles</h2>
      <div className={styles.themeContainer}>
        {themes.map((theme, i) => (
          <Thematique
            key={i}
            img={theme.img}
            name={theme.name}
            details={theme.details}
          />
        ))}
      </div>
    </Section>
  );
}
