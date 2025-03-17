import { Session } from "@/model/Session";
import { type Speaker as SpeakerModel } from "@/model/Speaker";
import { promises as fs } from "fs";
import styles from "./page.module.scss";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card";


const getSpeakers = async () =>
    JSON.parse(
        await fs.readFile(process.cwd() + "/src/data/speakers.json", "utf8"),
    ) as SpeakerModel[];

const getSessions = async () =>
    JSON.parse(
        await fs.readFile(process.cwd() + "/src/data/sessions.json", "utf8"),
    ) as Session[];

export async function generateStaticParams() {
    const speakers = await getSpeakers();

    return speakers.map((speaker) => ({
        slug: speaker.id
    }));
}

const Speaker = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const speakerId = (await params).slug;
    const { sessionsId, ...speaker } = (await getSpeakers()).find(s => s.id === speakerId) as SpeakerModel;
    const allSession = await getSessions();
    const speakerSessions: Session[] = [];
    sessionsId.forEach(sessionId => {
        speakerSessions.push(allSession.find(session => session.id === sessionId) as Session);
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
        {speaker.bio && <Card>{speaker.bio}</Card>}
        {speakerSessions.map(session => <div><Card>{JSON.stringify(session)}</Card></div>)}
        {JSON.stringify(speakerSessions)}
    </div>
    )
}

export default Speaker;