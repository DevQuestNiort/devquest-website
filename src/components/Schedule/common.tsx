import { Speaker, Tags as TagsModel } from "@/model/Session";
import Image from "next/image";
import classNames from "classnames";
import styles from "./common.module.scss";
import { Chip, tagLabels } from "../Chip";

export const rooms = ["Grande salle", "Petite salle", "Code Lab"];

export const Tags = ({ tags }: { tags: TagsModel[] }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag: TagsModel) => (
        <Chip
          icon={tagLabels[tag].icon}
          key={tag}
          label={tagLabels[tag].label}
          classes={styles.chip}
        />
      ))}
    </div>
  );
};

const Avatar = ({ src, name }: { src: string; name: string }) => (
  <div className={classNames(styles.avatar, styles.avatarRound)}>
    <Image src={src} alt={name} width={48} height={48} />
  </div>
);

export const Speakers = ({ speakers }: { speakers: Speaker[] }) => {
  return (
    <div className={styles.speakers}>
      {speakers.map((speaker) => (
        <div className={styles.speaker} key={speaker.id}>
          <AvatarSpeaker speaker={speaker} />
          {speaker.name}
        </div>
      ))}
    </div>
  );
};

export type PartialSpeaker = Pick<Speaker, "id" | "name" | "photo">;
export const AvatarSpeaker: React.FC<{
  speaker: PartialSpeaker;
}> = ({ speaker }) => {
  return (
    <Avatar
      name={speaker.name}
      src={speaker.photo || "/icons-rp/role-playing.png"}
    />
  );
};
