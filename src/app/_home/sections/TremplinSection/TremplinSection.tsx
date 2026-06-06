import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import styles from "./TremplinSection.module.scss";
import { Chip, tagLabels } from "@/components/Chip";
import { getAdaptedSpeakerById } from "@/data/scheduleAdapter";
import { rooms } from "@/components/Schedule/common";

const TREMPLIN_SPEAKER_IDS = [
  "cmmchua2u025q01ns2l6vogss", // Dimitri Lahaye
  "cmmchzr70026801ns34wu2lxs", // Emmanuel Sandorfi
];

export async function TremplinSection() {
  const speakersData = await Promise.all(
    TREMPLIN_SPEAKER_IDS.map((id) => getAdaptedSpeakerById(id)),
  );

  return (
    <Section theme="Light" className={styles.tremplin}>
      <h2>🏰 Les Orateurs du Tremplin, Élus ! ⚔️</h2>

      <Card className={styles.tremplinCard}>
        <span>Oyez, oyez, nobles membres de la guilde !</span>

        <span>La Soirée Tremplin a rendu son verdict, le jury populaire a tranché, et deux aventuriers se sont illustrés au-dessus de la mêlée pour monter sur les planches du DevQuest !</span>

        <div className={styles.speakersRow}>
          {speakersData.map((data) => {
            if (!data) return null;
            const { speaker, sessions } = data;
            const session = sessions[0];
            const tag = session?.tags?.[0];
            const chipInfo = tag ? (tagLabels[tag] ?? tagLabels.discovery) : tagLabels.discovery;
            const day = session?.day === "day-1" ? "Jeudi 11" : "Vendredi 12";

            return (
              <Link key={speaker.id} href={`/speaker/${speaker.id}`} className={styles.speakerCard}>
                <Image
                  className={styles.speakerPhoto}
                  src={speaker.picture || "/icons-rp/role-playing.png"}
                  alt={speaker.name}
                  width={96}
                  height={96}
                />
                <p className={styles.speakerName}>{speaker.name}</p>
                <p className={styles.talkTitle}>{session?.title}</p>
                <Chip icon={chipInfo.icon} label={chipInfo.label} classes={styles.categoryChip} />
                <div className={styles.sessionMeta}>
                  <span>{day} · {session?.hour}</span>
                  <span className={styles.sessionRoom}>
                    {rooms.find((r) => r.name === session?.room) && (
                      <Image
                        src={`/icons-rp/${rooms.find((r) => r.name === session?.room)!.image}`}
                        alt=""
                        width={20}
                        height={20}
                      />
                    )}
                    {session?.room}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <span>Ils défendront leur conférence les <strong>11 et 12 juin</strong>, devant toute la communauté, forgés au feu du Tremplin, prêts pour la grande scène !</span>

        <span>Rendez-vous au <strong>DevQuest</strong> pour les acclamer comme ils le méritent&nbsp;!</span>
      </Card>
    </Section>
  );
}
