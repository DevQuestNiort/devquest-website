import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Tags as TagsModel } from "@/model/Session";
import styles from "./page.module.scss";
import { SlotTypeLabel } from "@/model/Slot";
import { Chip, tagLabels } from "@/components/Chip";
import { FullSession } from "@/model/FullSession";
import { Avatar } from "@/components/Avatar";
import Image from "next/image";
import { rooms } from "@/components/Schedule/common";
import classNames from "classnames";
import { getAllAdaptedSessions } from "@/data/scheduleAdapter";
import Link from "next/link";

type SessionProps = {
  params: {
    slug: string;
    title: string;
  };
};

const getSessions = async () => getAllAdaptedSessions();

export async function generateStaticParams() {
  const sessions = await getSessions();

  return sessions.map((session) => ({
    title: session.title,
    slug: session.slug,
  }));
}

const Session = async ({ params: { slug } }: SessionProps) => {
  const session = (await getSessions()).find((candidate) => slug === candidate.slug);
  if (!session?.slot) {
    throw new Error("Session introuvable");
  }
  const myFullSession = session as FullSession;

  const DISPLAY_OPENFEEDBACK = false;

  return (
    <div className={styles.container}>
      <h1>{myFullSession.title}</h1>

      <div className={styles.informations}>
        <div className={styles.infoUtile}>
          <div>
            <h2 className={styles.headingTree}>
              {SlotTypeLabel[myFullSession.slot.type]}
            </h2>
            <div className={styles.tags}>
              {session?.tags?.map((tag: TagsModel) => (
                <Chip
                  icon={(tagLabels[tag] ?? tagLabels.discovery).icon}
                  key={tag}
                  label={(tagLabels[tag] ?? tagLabels.discovery).label}
                  classes={styles.chip}
                />
              ))}
            </div>
          </div>
          <div>
            <Image
              src={`/icons-rp/horloge.png`}
              alt=""
              width={32}
              height={42}
            />
            <h3>{myFullSession.slot.start}</h3>
          </div>
          <div>
            <Image
              src={`/icons-rp/${rooms.find((r) => r.name === myFullSession.room)?.image}`}
              alt=""
              width={40}
              height={40}
            />
            <h3>{myFullSession.room}</h3>
          </div>
        </div>

        <div className={styles.time}></div>

        <div className={styles.speakers}>
          {myFullSession.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.speaker}>
              <Link
                href={"/speaker/" + speaker.id}
                className={styles.disableLinkStyle}
              >
                <Avatar
                  classes={{
                    main: styles.avatar,
                  }}
                  name={speaker.name}
                  img={speaker.picture || "/icons-rp/role-playing.png"}
                  withSocials={false}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.abstract}>
        <span
          className={classNames(["material-symbols-outlined", styles.quotes])}
        >
          format_quote
        </span>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {myFullSession.abstract}
        </ReactMarkdown>
        <span
          className={classNames([
            "material-symbols-outlined",
            styles.quotes,
            styles.quotesEnd,
          ])}
        >
          format_quote
        </span>
      </div>
      {DISPLAY_OPENFEEDBACK && (
        <iframe
          src={`https://openfeedback.io/OJqVszngc4TGDPAR6VYK/undefined/${session.id}?hideHeader=true&forceColorScheme=dark`}
          className={styles.iframeOpenfeedback}
        ></iframe>
      )}
    </div>
  );
};

export default Session;
