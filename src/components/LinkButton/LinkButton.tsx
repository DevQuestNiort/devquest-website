import styles from "./LinkButton.module.scss";

interface LinkButtonProperties extends React.ComponentPropsWithoutRef<"a"> {
  readonly children: React.ReactNode;
  readonly theme: "Primary" | "Secondary";
  readonly href: string;
}

export default function LinkButton({
  children,
  theme,
  href,
  ...props
}: LinkButtonProperties) {
  return (
    <a
      className={`${styles.btn} ${styles[`btn${theme}`]}`}
      {...props}
      href={href}
    >
      {children}
    </a>
  );
}
