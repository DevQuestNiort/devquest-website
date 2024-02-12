import type { Meta, StoryObj } from "@storybook/react";
import Thematique from "../Thematique";

const meta: Meta<typeof Thematique> = {
  title: "Components/Thematiques",
  component: Thematique,
};

export default meta;
type Story = StoryObj<typeof Thematique>;

export const Default: Story = {
  args: {
    img: "/icons-rp/archer.png",
    name: "Front-End",
    details: "React, Typescript, Vite, ...",
  },
};
