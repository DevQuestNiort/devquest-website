export interface Session {
  id: string;
  slug: string;
  title: string;
  format: Format;
  categorie: string;
  abstract: string;
  room: string;
  speakersId: string[];
  tags: Tags[];
  cancelled: boolean;
  slot: string;
}

export type Format = "Workshop" | "Quickie" | "Workshop";

export type Tags =
  | "backend"
  | "frontend"
  | "discovery"
  | "cloud_devops"
  | "ia"
  | "tremplin"
  | "architecture"
  | "ux_ui";
