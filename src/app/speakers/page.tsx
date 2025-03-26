import { promises as fs } from "fs";
import { Section } from "@/components/Section";
import { Galery } from "@/components/Galery";
import { Avatar } from "@/components/Avatar";
import { Speaker } from "@/model/Speaker";
import styles from "./page.module.scss";
import Link from "next/link";

const getSpeakers = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/speakers.json",
  "utf8",
)) as Speaker[];

const Speakers = async () => {
  const speakers = (await getSpeakers());
  return (
  <main>
    <Section theme="Light">
      <h2>Les orateurs</h2>
      <Galery>
        {speakers
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .map((speaker, i) => (
            <Link
              key={speaker.id}
              href={"/speaker/" + speaker.id} className={styles.disableLinkStyle}>
              <Avatar
                img={speaker.picture || "/icons-rp/role-playing.png"}
                name={speaker.name}
                company={speaker?.company}
                withSocials={false}
              />
            </Link>
          ))}
      </Galery>
    </Section>
  </main>);
}
export default Speakers;