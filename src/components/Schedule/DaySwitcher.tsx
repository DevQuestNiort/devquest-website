"use client";

import { useSearchParams } from "next/navigation";
import { LinkButton } from "@/components/LinkButton";
import { ScheduleDay } from "@/data/scheduleAdapter";

type Props = {
  days: ScheduleDay[];
  currentDayId: string;
};

export const DaySwitcher = ({ days, currentDayId }: Props) => {
  const searchParams = useSearchParams();
  const mc = searchParams.get("mc");

  const buildHref = (slug: string) => {
    const base = `/schedule/${slug}`;
    return mc ? `${base}?mc=${mc}` : base;
  };

  return (
    <>
      {days.map((day) => (
        <LinkButton
          key={day.idDay}
          theme={currentDayId === day.idDay ? "Primary" : "Secondary"}
          href={buildHref(day.slug)}
        >
          {day.label}
        </LinkButton>
      ))}
    </>
  );
};
