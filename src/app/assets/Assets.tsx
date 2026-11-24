import { Section } from "@/components/Section";
import { Tabs, type TabItem } from "@/components/Tabs";
import galleries from "@/data/config/asset-galleries.json";
import type { AssetGalleryConfig } from "@/model/AssetGallery";
import { AssetGallery } from "./AssetGallery";
import { GalleryLogoProvider } from "./GalleryLogoContext";
import { LogoBuilder } from "./LogoBuilder";

const galleryConfigs: AssetGalleryConfig[] = galleries;

// Un onglet = une entrée ici. Le contenu peut être un composant serveur
// (ex. une liste de fichiers lue au build) ou client (ex. le constructeur).
const tabs: TabItem[] = [
  {
    id: "logo",
    label: "Constructeur de logo",
    content: (
      <>
        <p>
          Composez le logo dont vous avez besoin, puis téléchargez-le en PNG
          (fond transparent) ou en SVG. Le bouton « Copier le lien de ce logo »
          permet de partager exactement la même variante.
        </p>
        <LogoBuilder />
      </>
    ),
  },
  // Un onglet par galerie d'images déclarée dans asset-galleries.json.
  ...galleryConfigs.map((config) => ({
    id: config.id,
    label: config.label,
    content: <AssetGallery config={config} />,
  })),
];

export function Assets() {
  return (
    <Section variant="Main">
      <h1>Assets DevQuest</h1>
      <p>
        Logos et visuels du DevQuest, à disposition des sponsors, partenaires
        et de la communauté.
      </p>
      {/* Réglages du logo incrusté, partagés par toutes les galeries. */}
      <GalleryLogoProvider>
        <Tabs items={tabs} label="Types d'assets" />
      </GalleryLogoProvider>
    </Section>
  );
}
