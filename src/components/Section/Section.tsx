import styles from "./Section.module.scss";

interface SectionProperties extends React.ComponentPropsWithoutRef<"section"> {
  readonly children: React.ReactNode;
  readonly theme?: "Light" | "Dark";
}

export default function Section({
  children,
  theme,
  ...props
}: SectionProperties) {
  return (
    <section
      className={`${styles.section} ${styles[`section${theme}`]}`}
      {...props}
    >
      {children}
    </section>
  );
}
