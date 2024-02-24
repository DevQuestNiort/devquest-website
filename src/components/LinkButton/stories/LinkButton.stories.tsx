import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "../LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "Components/LinkButton",
  component: LinkButton,
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    theme: "Primary",
    href: "www.google.fr",
    children: "Click on me!",
  },
};
