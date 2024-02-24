import type { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <p>
        Bla bla bla I am the text in a card. Read me and be amazed by my mighty
        content!
      </p>
    ),
  },
};
