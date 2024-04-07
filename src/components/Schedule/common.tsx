import { Session, Speaker, Tags as TagsModel } from "@/model/Session";
import { Slot } from "@/model/Slot";
import Image from "next/image";
import { ReactElement } from 'react';
import classNames from "classnames";
import styles from './common.module.scss'


export const rooms = [
    'Grande salle',
    'Moyenne salle',
    'Petite salle'
]



const tagLabels = {
    iot_hardware: {
        label: "IoT & Hardware",
        icon: <span className="material-symbols-outlined">developer_board</span>
    },
    mobile: {
        label: "Mobile",
        icon: <span className="material-symbols-outlined">smartphone</span>,
    },
    web: {
        label: "Web",
        icon: <span className="material-symbols-outlined">language</span>,
    },
    discovery: {
        label: "Découverte",
        icon: <span className="material-symbols-outlined">lightbulb</span>,
    },
    cloud_devops: {
        label: "Cloud & DevOps",
        icon: <span className="material-symbols-outlined">cloud</span>,
    },
    languages: {
        label: "Languages",
        icon: <span className="material-symbols-outlined">code</span>,
    },
    bigdata_ai: {
        label: "BigData & AI",
        icon: <span className="material-symbols-outlined">smart_toy</span>,
    },
    security: {
        label: "SECURITY",
        icon: <span className="material-symbols-outlined">security</span>,
    },
    ux_ui: {
        label: "UX / UI",
        icon: <span className="material-symbols-outlined">brush</span>,
    },
};

export type PartialSession = Omit<Session, "abstract"> & { slot: Slot };

const Chip = ({ icon, label }: { icon: ReactElement, label: string }) => <div className={styles.chip}>
    {icon}
    <span className={styles.chipLabel}>{label}</span>
</div>


export const Tags = ({ tags }: {
    tags: TagsModel[]
}) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag: TagsModel) => (
                <Chip
                    icon={tagLabels[tag].icon}
                    key={tag}
                    label={tagLabels[tag].label}
                />
            ))}
        </div>
    );
};

const Avatar = ({ src, name }: { src: string, name: string }) => <div className={classNames(styles.avatar, styles.avatarRound)}>
    <Image src={src} alt={name} width={48} height={48} />
</div>

export const Speakers = ({
    speakers
}: {
    speakers: Speaker[],
}) => {
    return (<div className={styles.speakers}>
        {speakers.map((speaker) => (
            <div className={styles.speaker} key={speaker.id}>
                <AvatarSpeaker speaker={speaker} />
                {speaker.name}
            </div>
        ))}
    </div>);
}

export type PartialSpeaker = Pick<Speaker, "id" | "name" | "photo">;
export const AvatarSpeaker: React.FC<{
    speaker: PartialSpeaker;
}> = ({ speaker }) => {
    return (

        <Avatar
            name={speaker.name}
            src={speaker.photo}
        />
    );
};