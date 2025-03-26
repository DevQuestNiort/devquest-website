export interface Slot {
  key: string;
  start: string;
  day: string;
  type: keyof typeof SlotTypeLabel;
  display: {
    row: number;
    size: number;
    notForCodelab?: boolean;
  };
}

export enum SlotTypeLabel {
  opening = "Ouverture",
  keynote = "Keynote",
  break = "Pause",
  lunch = "Déjeuner & Café",
  party = "After Party",
  quickie = "Quickie",
  conference = "Conférence",
  codelab = "CodeLab",
  closing = "Fermeture",
}
