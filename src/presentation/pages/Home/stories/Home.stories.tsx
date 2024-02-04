import type {Meta, StoryObj} from '@storybook/react';
import HomeView from "../HomeView.tsx";
import {ListMoyensContactData} from "../../../../domain/MoyensContact/ListMoyensContactData.ts";
import {ListMembreData} from "../../../../domain/Membre/ListMembreData.ts";
import HomeController from "../HomeController.ts";
import {ListThemeData} from "../../../../domain/Theme/ListThemeData.ts";

const meta: Meta<typeof HomeView> = {
    title: "Views/Home",
    parameters: {
        layout: 'fullscreen',
    },
    component: HomeView,
};

export default meta;
type Story = StoryObj<typeof HomeView>;

const controller = new HomeController({
    contacts: ListMoyensContactData,
    membres: ListMembreData,
    themes: ListThemeData
});

export const Default: Story = {
    args: {
        controller
    },
};