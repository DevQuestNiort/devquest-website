"use client";

import { useSearchParams } from "next/navigation";
import { LargeSchedule } from "./LargeSchedule/LargeSchedule";
import { MobileSchedule } from "./MobileSchedule/MobileSchedule";
import { FullSession } from "@/model/FullSession";
import { Slot } from "@/model/Slot";

type Props = {
  sessions: FullSession[];
  allHoursSlots: Slot[];
  fixedSlots: Slot[];
};

export const ScheduleWithFilter = ({ sessions, allHoursSlots, fixedSlots }: Props) => {
  const searchParams = useSearchParams();
  const highlightMcUid = searchParams.get("mc") ?? undefined;

  return (
    <>
      <LargeSchedule
        sessions={sessions}
        allHoursSlots={allHoursSlots}
        fixedSlots={fixedSlots}
        highlightMcUid={highlightMcUid}
      />
      <MobileSchedule
        sessions={sessions}
        allHoursSlots={allHoursSlots}
        fixedSlots={fixedSlots}
        highlightMcUid={highlightMcUid}
      />
    </>
  );
};
