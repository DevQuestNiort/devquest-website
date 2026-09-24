import type { Meta, StoryObj } from "@storybook/react";
import Separator from "../Separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color", description: "Couleur CSS ou variable de theme." },
    fluid: { control: "boolean", description: "Toute la largeur disponible." },
    width: { control: "text", description: "Largeur fixe (ignoree si fluid)." },
    thickness: { control: "text", description: "Epaisseur du trait." },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = { args: { color: "white" } };

export const Fluide: Story = { args: { color: "white", fluid: true } };

export const LargeurFixe: Story = { args: { color: "white", width: 200, thickness: 4 } };
