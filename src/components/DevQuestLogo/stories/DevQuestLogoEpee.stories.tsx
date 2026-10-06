import type { Meta, StoryObj } from "@storybook/react";
import DevQuestLogoEpee from "../DevQuestLogoEpee";

const meta: Meta<typeof DevQuestLogoEpee> = {
  title: "Components/DevQuestLogo/Epee",
  component: DevQuestLogoEpee,
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
    shadowColor: {
      control: "color",
      description:
        "Ombre portee sur la lame. Par defaut : melange 80 % lightColor / 20 % darkColor.",
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
type Story = StoryObj<typeof DevQuestLogoEpee>;

export const Default: Story = {
  args: { height: 200 },
};

export const CouleursChapterEtMain: Story = {
  args: {
    height: 200,
    darkColor: "var(--chapter-color)",
    lightColor: "var(--main-color)",
  },
};

export const OmbreExplicite: Story = {
  args: { height: 200, shadowColor: "#BBAB8D", lightColor: "#F1DDB6" },
};

export const AvecHalo: Story = {
  args: { height: 200, haloColor: "var(--chapter-color)" },
};
