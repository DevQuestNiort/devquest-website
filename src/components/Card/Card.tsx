import styles from "./Card.module.scss";

interface CardProperties extends React.ComponentPropsWithoutRef<"div"> {
  readonly children: React.ReactNode;
  readonly theme?: "Light" | "Dark" | "Secondary";
}

export default function Card({
  children,
  theme,
  className = "",
  ...props
}: CardProperties) {
  return (
    <div
      className={`${styles.card} ${styles[`card${theme}`]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
