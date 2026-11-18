import classNames from "classnames";
import styles from "./LinkButton.module.scss";

interface LinkButtonProperties extends React.ComponentPropsWithoutRef<"a"> {
  readonly children: React.ReactNode;
  /** Mêmes thèmes que Card, Section, PageHeader et Footer. @default "Chapter" */
  readonly variant?:
    | "Main"
    | "Complementary"
    | "Chapter"
    | "ChapterDark"
    | "ChapterLight";
  readonly href: string;
  readonly classes?: string;
}

export default function LinkButton({
  children,
  variant = "Chapter",
  href,
  classes,
  ...props
}: LinkButtonProperties) {
  return (
    <a
      className={classNames(classes, styles.btn, styles[`btn${variant}`])}
      {...props}
      href={href}
    >
      {children}
    </a>
  );
}
