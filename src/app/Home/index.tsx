import HomeView from "@/app/Home/HomeView";
import { promises as fs } from "fs";
import { MoyensContact } from "@/model/MoyensContact";
import { Theme } from "@/model/Theme";
import { Membre } from "@/model/Membre";

export default async function Home() {
  const teamsFile = await fs.readFile(
    process.cwd() + "/src/data/teams.json",
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

  const contacts: MoyensContact[] = JSON.parse(contactsFile);
  const themes: Theme[] = JSON.parse(themesFile);
  const membres: Membre[] = JSON.parse(teamsFile);

  return <HomeView contacts={contacts} themes={themes} membres={membres} />;
}
