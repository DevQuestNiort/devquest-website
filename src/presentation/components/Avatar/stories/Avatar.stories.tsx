import type {Meta, StoryObj} from '@storybook/react';
import Avatar from "../Avatar.tsx";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        img: './teams/pacaud.jpeg',
        firstName: "Alexandre",
        lastName: "Pacaud",
        github: "fake.url",
        linkedin: "fake.url",
        role: "#Dev"
    },
};