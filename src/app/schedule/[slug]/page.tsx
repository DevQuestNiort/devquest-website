import styles from "./page.module.scss";
import { Suspense } from "react";
import { ScheduleWithFilter } from "@/components/Schedule/ScheduleWithFilter";
import { DaySwitcher } from "@/components/Schedule/DaySwitcher";
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
        <Suspense>
          <DaySwitcher days={days} currentDayId={currentDay?.idDay ?? days[0].idDay} />
        </Suspense>
      </div>

      <div className={"header-rooms"}></div>
      <Suspense>
        <ScheduleWithFilter
          sessions={sessions}
          allHoursSlots={allHoursSlots}
          fixedSlots={fixedSlots}
        />
      </Suspense>
    </main>
  );
};

export default ScheduleDay;
