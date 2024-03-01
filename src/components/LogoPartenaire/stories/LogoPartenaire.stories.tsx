import type { Meta, StoryObj } from "@storybook/react";
import LogoPartenaire from "../LogoPartenaire";

const meta: Meta<typeof LogoPartenaire> = {
  title: "Components/LogoPartenaire",
  component: LogoPartenaire,
};

export default meta;
type Story = StoryObj<typeof LogoPartenaire>;

export const SquareLogo: Story = {
  args: {
    name: "Le super partenaire",
    asset: "wekey.png",
    level: "RARE",
    website: "http://google.fr",
    actif: true,
  },
};
