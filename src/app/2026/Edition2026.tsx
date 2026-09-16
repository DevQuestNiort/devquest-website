import { Card } from "@/components/Card";
import { Galery } from "@/components/Galery";

import { promises as fs } from "fs";
import { SponsorsByLevel } from "@/components/Partenaire/ListPartenaire/ListPartenaire";
import { Section } from "@/components/Section";
import { Partenaire } from "@/model/Partenaire";
import { LevelPartenaire } from "@/model/LevelPartenaire";

export default async function Edition2026() {
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/2026/partenaires.json",
    "utf8",
  );
  const LevelsPartenaireFile = await fs.readFile(
    process.cwd() + "/src/data/config/levelpartenaires.json",
    "utf8",
  );

  const partenaires: Partenaire[] = JSON.parse(partenairesFile);
  const levelpartenaires: LevelPartenaire[] = JSON.parse(LevelsPartenaireFile);

  return (
    <div>
     <Section theme="Light" >

          <h2>La troisième édition du dev quest c'est : </h2>
          <Galery>
            <Card>350 paticipants</Card>
            <Card>13 sponsors</Card>
            <Card>800 repas</Card>
            <Card>47 speakers</Card>
          </Galery>
      </Section>
      <Section theme="Dark" >
<h2> Les Menestrels  </h2>
   
      </Section>
      <Section theme="Light" >
                 <h2>Les guildes presentent cette année la </h2>
         <SponsorsByLevel 
         levelpartenaires={levelpartenaires}
         partenaires={partenaires}
         />
       

      </Section>

    </div>
  );
}