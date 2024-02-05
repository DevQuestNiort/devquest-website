import type {Meta, StoryObj} from '@storybook/react';
import LogoPartenaire from "../LogoPartenaire.tsx";

const meta: Meta<typeof LogoPartenaire> = {
    title: "Components/LogoPartenaire",
    component: LogoPartenaire,
};

export default meta;
type Story = StoryObj<typeof LogoPartenaire>;

export const SquareLogo: Story = {
    args: {
        name:"La Boite",
        asset : "maif.jpg",
        level : "COMMUN",
        website : "http://google.fr",

    },
};

export const LargeLogo: Story = {
    args: {
        name:"Un boite autre",
        asset : "darva.png",
        level : "COMMUN",
        website : "http://google.fr",

    },
};