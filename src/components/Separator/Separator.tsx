interface SeparatorProperties extends Omit<React.ComponentPropsWithoutRef<"hr">, "color"> {
  /** Couleur du trait (couleur CSS ou variable de thème). @default "var(--chapter-color)" */
  readonly color?: string;
  /** Prend toute la largeur disponible. Sinon, la largeur vaut `width`. @default false */
  readonly fluid?: boolean;
  /** Largeur fixe (nombre en px ou valeur CSS), ignorée si `fluid`. @default 64 */
  readonly width?: number | string;
  /** Épaisseur du trait (nombre en px ou valeur CSS). @default 2 */
  readonly thickness?: number | string;
}

/**
 * Séparateur horizontal (`<hr>`) de couleur pilotable, de largeur fixe (`width`) ou fluide (`fluid`).
 * Centré horizontalement quand sa largeur est fixe.
 */
export default function Separator({
  color = "var(--chapter-color)",
  fluid = false,
  width = 64,
  thickness = 2,
  style,
  ...props
}: SeparatorProperties) {
  return (
    <hr
      style={{
        width: fluid ? "100%" : width,
        height: thickness,
        margin: "1rem auto",
        border: "none",
        backgroundColor: color,
        ...style,
      }}
      {...props}
    />
  );
}
