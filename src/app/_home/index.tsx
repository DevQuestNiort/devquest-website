import HomeView from "@/app/_home/HomeView";
import { promises as fs } from "fs";
import { MoyensContact } from "@/model/MoyensContact";
import { Theme } from "@/model/Theme";
import { Membre } from "@/model/Membre";
import { Partenaire } from "@/model/Partenaire";

export default async function Home() {
  const teamsFile = await fs.readFile(
    process.cwd() + "/src/data/teams.json",
    "utf8",
  );
  const compagnonsFile = await fs.readFile(
    process.cwd() + "/src/data/compagnons.json",
    "utf8",
  );
  const themesFile = await fs.readFile(
    process.cwd() + "/src/data/themes.json",
    "utf8",
  );
  const contactsFile = await fs.readFile(
    process.cwd() + "/src/data/contacts.json",
    "utf8",
  );
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/partenaires.json",
    "utf8",
  );

  const contacts: MoyensContact[] = JSON.parse(contactsFile);
  const themes: Theme[] = JSON.parse(themesFile);
  const membres: Membre[] = JSON.parse(teamsFile);
  const compagnons: Membre[] = JSON.parse(compagnonsFile);
  const partenaires: Partenaire[] = JSON.parse(partenairesFile);

  return (
    <HomeView
      contacts={contacts}
      themes={themes}
      membres={membres}
      compagnons={compagnons}
      partenaires={partenaires}
    />
  );
}
