import styles from "./Card.module.scss";

interface CardProperties extends React.ComponentPropsWithoutRef<"div"> {
  readonly children: React.ReactNode;
  readonly variant?: "Main" | "Complementary" | "ChapterDark" | "Chapter" | "ChapterLight";
  readonly fluid?: boolean;
}

export default function Card({
  children,
  variant,
  fluid = false,
  className = "",
  ...props
}: CardProperties) {
  return (
    <div
      className={`${styles.card} ${styles[`card${variant}`]} ${fluid ? styles.cardFluid : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
