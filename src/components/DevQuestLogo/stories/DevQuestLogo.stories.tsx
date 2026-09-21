import type { Meta, StoryObj } from "@storybook/react";
import DevQuestLogo from "../DevQuestLogo";

const meta: Meta<typeof DevQuestLogo> = {
  title: "Components/DevQuestLogo",
  component: DevQuestLogo,
  tags: ["autodocs"],
  parameters: {
    // Le logo est blanc/transparent par defaut : sur le fond clair "sable"
    // (canvas Storybook par defaut) on ne verrait rien, d'ou "marron" ici.
    backgrounds: { default: "marron" },
  },
  argTypes: {
    glyphColor: {
      control: "color",
      description:
        'Couleur du glyphe "DQ". Accepte toute couleur CSS valide, y compris une variable de theme (ex. "var(--chapter-color)").',
    },
    backgroundColor: {
      control: "color",
      description:
        "Couleur du blob de fond (invisible par defaut). Meme regle : couleur CSS ou variable de theme.",
    },
    haloColor: {
      control: "color",
      description:
        "Couleur du halo lumineux autour du logo (via drop-shadow, epouse la forme du SVG). Absent = pas de halo.",
    },
    haloSize: {
      control: { type: "range", min: 0, max: 100 },
      description: "Rayon du halo en pixels (40 par defaut).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DevQuestLogo>;

// Rendu par defaut : identique a l'ancien fichier SVG "Blanc" utilise dans le menu/footer.
export const Default: Story = {
  args: {
    width: 96,
    height: 105,
  },
};

// Reproduit la variante "Couleur" historique (glyphe cyan + blob sable).
export const Couleur: Story = {
  args: {
    width: 96,
    height: 105,
    glyphColor: "#09B6D3",
    backgroundColor: "#F1DDB6",
  },
};

// Suit les variables de theme actives (data-theme) au lieu de couleurs fixes.
export const SuitLeTheme: Story = {
  args: {
    width: 96,
    height: 105,
    glyphColor: "var(--chapter-color)",
    backgroundColor: "var(--chapter-ligth-color)",
  },
};

// Utilise sur la hero section : logo + halo lumineux derriere.
export const AvecHalo: Story = {
  args: {
    width: 250,
    height: 274,
    glyphColor: "var(--chapter-color)",
    backgroundColor: "var(--main-color)",
    haloColor: "var(--complementary-color)",
    haloSize: 70,
  },
};
