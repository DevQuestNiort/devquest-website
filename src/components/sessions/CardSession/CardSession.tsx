import { Card } from "@/components/Card";
import { Chip, tagLabels } from "@/components/Chip";
import { Session } from "@/model/Session";
import { Speaker } from "@/model/Speaker";
import styles from "./CardSession.module.scss";

interface CardSessionProperties {
  readonly session: Session;
  readonly speakers: Speaker[];
}

export function CardSession({ session, speakers }: CardSessionProperties) {
  const tag = session.tags[0] ? tagLabels[session.tags[0]] : undefined;

  return (
    <Card fluid className={styles.sessionCard} theme="Light">
      <h3 className={styles.sessionTitle}>{session.title}</h3>
      <div className={styles.speakers}>
        {session.speakersId
          .map((idSpeaker) => speakers.find((speaker) => speaker.id === idSpeaker))
          .map((speaker, index) => speaker && <span key={index}>{speaker.name}</span>)}
      </div>
      <div style={{ flexBasis: "100%" }}>
 {tag ? (
        <Chip icon={tag.icon} label={tag.label} />
      ) : (
        session.categorie && <Chip icon={<></>} label={session.categorie} />
      )}
      </div>

      {session.videoLinkYoutube && (
        <a
          href={session.videoLinkYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.videoLink}
        >
          <span className="material-symbols-outlined" aria-hidden>
            smart_display
          </span>
          Voir la vidéo
        </a>
      )}
    </Card>
  );
}
