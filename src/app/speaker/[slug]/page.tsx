import styles from "./page.module.scss";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/components/Schedule/common";
import { Chip, tagLabels } from "@/components/Chip";
import { getAdaptedSpeakerById, getAllAdaptedSpeakers } from "@/data/scheduleAdapter";

export async function generateStaticParams() {
  const speakers = await getAllAdaptedSpeakers();

  return speakers.map((speaker) => ({
    slug: speaker.id,
  }));
}

const Speaker = async ({ params }: { params: { slug: string } }) => {
  const speakerId = params.slug;
  const speakerWithSessions = await getAdaptedSpeakerById(speakerId);

  if (!speakerWithSessions) {
    throw new Error("Speaker introuvable");
  }

  const { speaker, sessions: speakerSessions } = speakerWithSessions;

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
                  icon={(tagLabels[session.tags[0]] ?? tagLabels.discovery).icon}
                  label={(tagLabels[session.tags[0]] ?? tagLabels.discovery).label}
                />
              </div>
              <div className={styles.talkInfos}>

                <div>
                  {session.day === "day-1" ? "Jeudi" : "Vendredi"}
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
