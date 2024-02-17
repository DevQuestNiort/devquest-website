import styles from "./Button.module.scss";

interface ButtonProperties extends React.ComponentPropsWithoutRef<"a"> {
  readonly children: React.ReactNode;
  readonly theme: "Primary" | "Secondary";
  readonly href: string;
}

export default function Button({
  children,
  theme,
  href,
  ...props
}: ButtonProperties) {
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
