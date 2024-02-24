import styles from "./Card.module.scss";

interface CardProperties extends React.ComponentPropsWithoutRef<"div"> {
  readonly children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProperties) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}
