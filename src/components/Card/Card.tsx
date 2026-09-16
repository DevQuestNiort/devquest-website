import styles from "./Card.module.scss";

interface CardProperties extends React.ComponentPropsWithoutRef<"div"> {
  readonly children: React.ReactNode;
  readonly theme?: "Light" | "Dark" | "Secondary"| "Primary";
  readonly fluid?: boolean;
}

export default function Card({
  children,
  theme,
  fluid = false,
  className = "",
  ...props
}: CardProperties) {
  return (
    <div
      className={`${styles.card} ${styles[`card${theme}`]} ${fluid ? styles.cardFluid : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
