import { Tags as TagsModel } from "@/model/Session";
import classNames from "classnames";
import styles from "./common.module.scss";
import { Chip, tagLabels } from "../Chip";
import { Salle } from "@/model/Salle";
import { Speaker } from "@/model/Speaker";
import { SpeakerAvatarImage } from "./SpeakerAvatarImage";

export const rooms: Salle[] = [
  { name: "Grande Salle", image: "forge.png" },
  { name: "Petite Salle", image: "astrarium.png" },
  { name: "Workshop 01", image: "laboratoire.png" },
  { name: "Workshop 02", image: "quest.png" },
];

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
    <SpeakerAvatarImage src={src} name={name} />
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

export type PartialSpeaker = Pick<Speaker, "id" | "name" | "picture">;
export const AvatarSpeaker: React.FC<{
  speaker: PartialSpeaker;
}> = ({ speaker }) => {
  return (
    <Avatar
      name={speaker.name}
      src={speaker.picture || "/icons-rp/role-playing.png"}
    />
  );
};
