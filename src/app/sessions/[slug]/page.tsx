import { promises as fs } from "fs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import * as model from "@/model/Session";
import { Tags as TagsModel } from "@/model/Session";
import styles from "./page.module.scss";
import { Slot, SlotTypeLabel } from "@/model/Slot";
import { Chip, tagLabels } from "@/components/Chip";
import { FullSession } from "@/model/FullSession";
import { Avatar } from "@/components/Avatar";

type SessionProps = {
  params: {
    slug: string;
    title: string;
  };
};

const getSessions = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/sessions.json", "utf8"),
  ) as model.Session[];

const getSlots = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/slots.json", "utf8"),
  ) as Slot[];

export async function generateStaticParams() {
  const sessions = await getSessions();
  const slots = await getSlots();

  return sessions.map((session) => ({
    title: session.title,
    slug: session.slug,
  }));
}

const Session = async ({ params: { slug, title } }: SessionProps) => {
  const session = (await getSessions()).find(
    (session) => slug === session.slug,
  );
  const slots = await getSlots();
  if (!session) {
    throw new Error("Session introuvable");
  }
  const myFullSession = {
    ...session,
    slot: slots.find((s) => s.key === session.slot),
  } as FullSession;

  const DISPLAY_OPENFEEDBACK = true;

  return (
    <div className={styles.container}>
      <h1>{myFullSession.title}</h1>

      <div className={styles.informations}>
        <h2 className={styles.headingTree}>{SlotTypeLabel[myFullSession.slot.type]}</h2>
        <div className={styles.tags}>
          {session?.tags?.map((tag: TagsModel) => (
            <Chip
              icon={tagLabels[tag].icon}
              key={tag}
              label={tagLabels[tag].label}
              classes={styles.chip}
            />
          ))}
        </div>

        <div className={styles.time}>
          <span className="material-symbols-outlined">schedule</span>{" "}
          {myFullSession.slot.start} {myFullSession.room}
        </div>

        <div className={styles.speakers}>
          {myFullSession.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.speaker}>
              <Avatar
                classes={{
                  main: styles.avatar,
                  icon: styles.icon,
                }}
                name={speaker.name}
                img={speaker.photo || "/icons-rp/role-playing.png"}
                github={speaker.social?.github}
                linkedin={speaker.social?.linkedin}
              />

              <p className={styles.bio}>
                {speaker.bio ?? `Rejoins-moi à ${myFullSession.slot.start}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p>
        <span className="material-symbols-outlined">format_quote</span>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
        >
          {session?.abstract}
        </ReactMarkdown>
        <span className="material-symbols-outlined">format_quote</span>
      </p>
      {DISPLAY_OPENFEEDBACK && <iframe
          src={`https://openfeedback.io/YUkT8ETZnqhBSbABGUtS/2024-06-14/${session.id}?hideHeader=true&forceColorScheme=dark`}
          className={styles.iframeOpenfeedback}></iframe>}
    </div>
  );
};

export default Session;
