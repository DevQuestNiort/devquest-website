
import { promises as fs } from "fs";
import { Schedule } from "@/components/Schedule/Schedule";
import { Session } from "@/model/Session";
import { Slot } from "@/model/Slot";
import { PartialSession } from "@/components/Schedule/common";
import styles from './schedule.module.scss'


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
    .filter(session => session.slot) as unknown as PartialSession[];


  return <main className={styles.main}><Schedule sessions={sessions} allHoursSlots={slots} /></main>
}

export default DevQuestSchedule;