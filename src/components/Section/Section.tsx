import styles from "./Section.module.scss";

interface SectionProperties extends React.ComponentPropsWithoutRef<"section"> {
  readonly children: React.ReactNode;
  readonly variant?: "Main" | "Complementary" | "Chapter" | "ChapterDark" | "ChapterLight";
}

export default function Section({
  children,
  variant,
  className,
  ...props
}: SectionProperties) {
  return (
    <section
      className={`${styles.section} ${styles[`section${variant}`]}${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </section>
  );
}
