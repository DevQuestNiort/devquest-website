import { Session } from "@/model/Session";
import { type Speaker as SpeakerModel } from "@/model/Speaker";
import { promises as fs } from "fs";
import styles from "./page.module.scss";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/components/Schedule/common";
import { Slot } from "@/model/Slot";
import { Chip, tagLabels } from "@/components/Chip";

const getSpeakers = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/speakers.json", "utf8"),
  ) as SpeakerModel[];

const getSessions = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/sessions.json", "utf8"),
  ) as Session[];

const getSlots = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/slots.json", "utf8"),
  ) as Slot[];

export async function generateStaticParams() {
  const speakers = await getSpeakers();

  return speakers.map((speaker) => ({
    slug: speaker.id,
  }));
}

const Speaker = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const speakerId = (await params).slug;
  const { sessionsId, ...speaker } = (await getSpeakers()).find(
    (s) => s.id === speakerId,
  ) as SpeakerModel;
  const allSession = await getSessions();
  const allSlots = await getSlots();
  const speakerSessions: Session[] = [];
  sessionsId.forEach((sessionId) => {
    const session = allSession.find((session) => session.id === sessionId) as Session;
    session.hour = allSlots.find((slot) => session.slot === slot.key)?.start;
    speakerSessions.push(session);
  });

  return (
    <div className={styles.speakerContainer}>
      <Avatar
        img={speaker.picture || "/icons-rp/role-playing.png"}
        name={speaker.name}
        company={speaker?.company}
        github={speaker.social?.github}
        linkedin={speaker.social?.linkedin}
        x={speaker.social?.x}
      />
      {speaker.bio && (
        <Card className={styles.bioCardSpeaker}>{speaker.bio}</Card>
      )}
      {speakerSessions.map((session) => (
        <Link
          key={session.id}
          href={`/sessions/${session.slug}`}
          className={styles.disableLinkStyle}
        >
          <Card className={styles.confCardSpeaker}>
            <p>{session.title}</p>
            <div className={styles.sessionInformations}>
              <div className={styles.talkInfos}>
                <Chip  
                classes={styles.chip}                 
                icon={tagLabels[session.tags[0]]?.icon}
                 label={tagLabels[session.tags[0]]?.label}/>
                 </div>
                 <div className={styles.talkInfos}>

                <div>
                {session.day === "day-1" ? "Jeudi" : "Vendredi" }
                </div>
                <div>
                {session.hour}
                </div>
              </div>
              <div className={styles.talkInfos}>

                  <Image
                    src={`/icons-rp/${rooms.find((r) => r.name === session.room)?.image}`}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <h3>{session.room}</h3>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Speaker;
