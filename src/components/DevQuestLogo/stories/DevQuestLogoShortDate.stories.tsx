import type { Meta, StoryObj } from "@storybook/react";
import DevQuestLogoShortDate from "../DevQuestLogoShortDate";

const meta: Meta<typeof DevQuestLogoShortDate> = {
  title: "Components/DevQuestLogo/CourtAvecDate",
  component: DevQuestLogoShortDate,
  tags: ["autodocs"],
  argTypes: {
    darkColor: {
      control: "color",
      description:
        'Couleur des parties sombres (le "noir" du logo). Accepte toute couleur CSS, y compris une variable de theme (ex. "var(--chapter-color)").',
    },
    lightColor: {
      control: "color",
      description:
        'Couleur des parties claires (le "blanc" du logo). Meme regle que darkColor.',
    },
    city: { control: "text", description: "Ville. Absent = pas de texte." },
    date: {
      control: "text",
      description: "Date de l'edition. Absent = pas de texte.",
    },
    haloColor: {
      control: "color",
      description:
        "Couleur du halo lumineux autour du logo (drop-shadow). Absent = pas de halo.",
    },
    haloSize: {
      control: { type: "range", min: 0, max: 100 },
      description: "Rayon du halo en pixels (40 par defaut).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DevQuestLogoShortDate>;

export const Default: Story = {
  args: { height: 200 },
};

export const AvecVilleEtDate: Story = {
  args: { height: 200, city: "Niort", date: "10 & 11 Juin" },
};

export const CouleursChapterEtMain: Story = {
  args: {
    height: 200,
    city: "Niort",
    date: "10 & 11 Juin",
    darkColor: "var(--chapter-color)",
    lightColor: "var(--main-color)",
  },
};

export const CouleursInversees: Story = {
  args: {
    height: 200,
    city: "Niort",
    date: "10 & 11 Juin",
    darkColor: "var(--main-color)",
    lightColor: "var(--chapter-color)",
  },
};

export const AvecHalo: Story = {
  args: {
    height: 200,
    city: "Niort",
    date: "10 & 11 Juin",
    haloColor: "var(--chapter-color)",
  },
};
