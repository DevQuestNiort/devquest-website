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
        asset={"macif.gif"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Niort Agglo"}
        level={"RARE"}
        asset={"niortaglo.jpeg"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Maif"}
        level={"RARE"}
        asset={"maif/l01t00-RVB-logo-MAIF-preconise.png"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Macif"}
        level={"RARE"}
        asset={"macif.gif"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"ASI"}
        level={"RARE"}
        asset={"asi.png"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Cat-Amania"}
        level={"RARE"}
        asset={"cat-amania.svg"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Zenika"}
        level={"RARE"}
        asset={"MonogrammeZenika.png"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"Serli"}
        level={"RARE"}
        asset={"serli-bl.svg"}
        website={"http://google.fr"}
      />
      <LogoPartenaire
        name={"IMA"}
        level={"RARE"}
        asset={"ima/IMA_Groupe-RVB.jpg"}
        website={"http://google.fr"}
      />
    </Galery>
  ),
};
