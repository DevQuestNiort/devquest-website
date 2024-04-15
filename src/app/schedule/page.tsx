
import { promises as fs } from "fs";
import { LargeSchedule } from "@/components/Schedule/LargeSchedule/LargeSchedule";
import { Session } from "@/model/Session";
import { Slot } from "@/model/Slot";
import styles from './schedule.module.scss'
import { MobileSchedule } from "@/components/Schedule";
import { FullSession } from "@/model/FullSession";


const getSessions = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/sessions.json",
  "utf8",
)) as Session[];

const getSlots = async () => JSON.parse(await fs.readFile(
  process.cwd() + "/src/data/slots.json",
  "utf8",
)) as Slot[];


const DevQuestSchedule = async () => {
  const slots = (await getSlots());
  const sessions = (await getSessions())
    .map(session => ({ ...session, slot: slots.find(s => s.key === session.slot) }))
    .filter(session => session.slot) as unknown as FullSession[];

  const fixedSlots: Slot[] = slots.filter((s) =>
    ["opening", "lunch", "break", "keynote", "party"].includes(s.type)
  );

  return <main className={styles.main}>
    <div className={"header-rooms"}></div>
    <LargeSchedule sessions={sessions} allHoursSlots={slots} fixedSlots={fixedSlots} />
    <MobileSchedule sessions={sessions} allHoursSlots={slots} fixedSlots={fixedSlots} />
  </main>
}

export default DevQuestSchedule;