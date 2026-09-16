import HomeView from "@/app/_home/HomeView";
import { promises as fs } from "fs";
import { MoyensContact } from "@/model/MoyensContact";
import { Partenaire } from "@/model/Partenaire";

export default async function Home() {
  const contactsFile = await fs.readFile(
    process.cwd() + "/src/data/contacts.json",
    "utf8",
  );
  const partenairesFile = await fs.readFile(
    process.cwd() + "/src/data/partenaires.json",
    "utf8",
  );

  const contacts: MoyensContact[] = JSON.parse(contactsFile);
  const partenaires: Partenaire[] = JSON.parse(partenairesFile);

  return <HomeView contacts={contacts} partenaires={partenaires} />;
}
