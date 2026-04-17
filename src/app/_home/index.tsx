import HomeView from "@/app/_home/HomeView";
import { promises as fs } from "fs";
import { MoyensContact } from "@/model/MoyensContact";
import { Theme } from "@/model/Theme";
import { Partenaire } from "@/model/Partenaire";

export default async function Home() {
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
  const partenaires: Partenaire[] = JSON.parse(partenairesFile);

  return (
    <HomeView
      contacts={contacts}
      themes={themes}
      partenaires={partenaires}
    />
  );
}
