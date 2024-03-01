import type { Meta, StoryObj } from "@storybook/react";
import Galery from "../Galery";
import { LogoPartenaire } from "../../LogoPartenaire";

const meta: Meta<typeof Galery> = {
  title: "Components/Galery",
  component: Galery,
};

export default meta;
type Story = StoryObj<typeof Galery>;

export const Default: Story = {
  render: (args) => (
    <Galery {...args}>
      <div style={{ backgroundColor: "greenyellow" }}>test</div>
      <div style={{ backgroundColor: "rebeccapurple" }}>past test</div>
      <div style={{ backgroundColor: "greenyellow" }}>test</div>
      <div style={{ backgroundColor: "aliceblue" }}>past test</div>
      <div style={{ backgroundColor: "greenyellow" }}>test</div>
      <div style={{ backgroundColor: "rebeccapurple" }}>past test</div>
      <div style={{ backgroundColor: "darkorchid" }}>test</div>
      <div style={{ backgroundColor: "seashell" }}>past test</div>
      <div style={{ backgroundColor: "greenyellow" }}>test</div>
      <div style={{ backgroundColor: "rebeccapurple" }}>past test</div>
      <div style={{ backgroundColor: "greenyellow" }}>test</div>
      <div style={{ backgroundColor: "rebeccapurple" }}>past test</div>
    </Galery>
  ),
};
export const With: Story = {
  render: (args) => (
    <Galery {...args}>
      <LogoPartenaire
        name={"Macif"}
        level={"RARE"}
        asset={"macif.png"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Niort Agglo"}
        level={"RARE"}
        asset={"niortaglo.jpeg"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Maif"}
        level={"RARE"}
        asset={"maif.png"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Macif"}
        level={"RARE"}
        asset={"macif.png"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"ASI"}
        level={"RARE"}
        asset={"asi.png"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Cat-Amania"}
        level={"RARE"}
        asset={"catamania.svg"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Zenika"}
        level={"RARE"}
        asset={"zenika.png"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"Serli"}
        level={"RARE"}
        asset={"serli.svg"}
        website={"http://google.fr"}
        actif={true}
      />
      <LogoPartenaire
        name={"IMA"}
        level={"RARE"}
        asset={"ima.png"}
        website={"http://google.fr"}
        actif={true}
      />
    </Galery>
  ),
};
