import styles from "./page.module.scss";
import { LargeSchedule, MobileSchedule } from "@/components/Schedule";
import { LinkButton } from "@/components/LinkButton";
import {
  getAdaptedScheduleForDay,
  getScheduleDays,
} from "@/data/scheduleAdapter";

type ScheduleDayProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getScheduleDays();
}

const ScheduleDay = async ({ params: { slug } }: ScheduleDayProps) => {
  const { days, sessions, allHoursSlots, fixedSlots } =
    await getAdaptedScheduleForDay(slug);
  const currentDay = days.find((day) => day.slug === slug) ?? days[0];

  return (
    <main className={styles.main}>
      <div className={styles.btnDays}>
        {days.map((day) => (
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
        allHoursSlots={allHoursSlots}
        fixedSlots={fixedSlots}
      />
      <MobileSchedule
        sessions={sessions}
        allHoursSlots={allHoursSlots}
        fixedSlots={fixedSlots}
      />
    </main>
  );
};

export default ScheduleDay;
