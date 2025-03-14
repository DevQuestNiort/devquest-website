import { promises as fs } from "fs";
import * as model from "@/model/Session";
import { Slot } from "@/model/Slot";
import { FullSession } from "@/model/FullSession";
import styles from "./page.module.scss";
import { LargeSchedule, MobileSchedule } from "@/components/Schedule";
import { LinkButton } from "@/components/LinkButton";

type ScheduleDayProps = {
  params: {
    slug: string;
    idDay: string;
  };
};

const getSessions = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/sessions.json", "utf8"),
  ) as model.Session[];

const getSlots = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/slots.json", "utf8"),
  ) as Slot[];
const DAYS = [
  {
    slug: "day-1",
    idDay: "day-1",
    label: "Jeudi 5",
  },
  {
    slug: "day-2",
    idDay: "day-2",
    label: "Vendredi 6",
  },
];

export async function generateStaticParams() {
  return DAYS;
}

const ScheduleDay = async ({ params: { slug } }: ScheduleDayProps) => {
  const currentDay = DAYS.find((d) => d.slug === slug);
  const slots = (await getSlots()).filter(
    (slot) => slot.day === currentDay?.idDay,
  );
  const sessions = (await getSessions())
    .map((session) => ({
      ...session,
      slot: slots.find((s) => s.key === session.slot),
    }))
    .filter((session) => session.slot) as unknown as FullSession[];

  const fixedSlots: Slot[] = slots.filter((s) =>
    ["opening", "lunch", "break", "keynote", "party", "closing"].includes(
      s.type,
    ),
  );

  return (
    <main className={styles.main}>
      <div className={styles.btnDays}>
        {DAYS.map((day) => (
          <LinkButton
            key={day.idDay}
            theme={currentDay?.idDay === day.idDay ? "Primary" : "Secondary"}
            href={`/schedule/${day.slug}`}
          >
            {day.label}
          </LinkButton>
        ))}
      </div>

      <div className={"header-rooms"}></div>
      <LargeSchedule
        sessions={sessions}
        allHoursSlots={slots}
        fixedSlots={fixedSlots}
      />
      <MobileSchedule
        sessions={sessions}
        allHoursSlots={slots}
        fixedSlots={fixedSlots}
      />
    </main>
  );
};

export default ScheduleDay;
