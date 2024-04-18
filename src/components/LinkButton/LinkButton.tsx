import classNames from "classnames";
import styles from "./LinkButton.module.scss";

interface LinkButtonProperties extends React.ComponentPropsWithoutRef<"a"> {
  readonly children: React.ReactNode;
  readonly theme: "Primary" | "Secondary";
  readonly href: string;
  readonly classes?: string;
}

export default function LinkButton({
  children,
  theme,
  href,
  classes,
  ...props
}: LinkButtonProperties) {
  return (
    <a
      className={classNames(classes, styles.btn, styles[`btn${theme}`])}
      {...props}
      href={href}
    >
      {children}
    </a>
  );
}
