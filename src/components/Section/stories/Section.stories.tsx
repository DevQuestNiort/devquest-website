import type { Meta, StoryObj } from "@storybook/react";
import Section from "../Section";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2>I am a title</h2>
        <p>And I am a paragraph</p>
      </>
    ),
    theme: "Light",
  },
};
