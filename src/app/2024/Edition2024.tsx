import { SponsorsByLevel } from "@/components/Partenaire/ListPartenaire/ListPartenaire";
import { Section } from "@/components/Section";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Partenaire } from "@/model/Partenaire";
import { promises as fs } from "fs";
export default async function Edition2024() {
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/2024/partenaires.json",
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

        <h2>La premiere Edition  </h2>
       
<p> Nous somme en cours de rédaction de cette archive</p>

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