import { Slot, SlotTypeLabel } from "@/model/Slot";
import { Speakers, Tags, rooms } from "../common";
import classNames from "classnames";
import React from "react";
import Link from "next/link";
import styles from './LargeSchedule.module.scss'
import { FullSession } from "@/model/FullSession";

const Room = ({ name }: { name: string }) => {
  const gridColumn = columnFromRoom(name);
  return (
    <div
      className={classNames(styles.slotRoom, styles.slot)}
      style={{
        gridColumn,
        gridRow: "1 / 1",
      }}
    >
      <h3>{name}</h3>
    </div>
  );
}

const Hour = ({ slot }: { slot: Slot }) => <div
  className={styles.slot}
  style={{
    gridColumn: "1 / 1",
    gridRow: slotToRow(slot),
  }}
>
  <h3>{slot.start}</h3>
</div>

const SessionInfo = ({ session }: { session: FullSession }) => {
  return (
    <div
      className={classNames(styles.slotSessionInfo, session.cancelled && styles.cancelled)}
    >
      <Link href={"/sessions/" + session.slug} className={styles.slotSessionTitle}>{session.title}</Link>
      <span className="sr-only">Salle {session.room}</span>
      <div className={styles.slotSessionInfoBottom}>
        <div className={styles.stackSession}>
          {session.tags && <Tags tags={session.tags} />}
        </div>
        <Speakers speakers={session.speakers} />
      </div>
    </div>
  );
};

const Session = ({ session }: { session: FullSession }) => {
  const gridColumn = columnFromRoom(session.room);
  return (
    <div
      key={session.title}
      className={classNames(styles.slot, styles.slotSession)}
      style={{
        gridColumn,
        gridRow: slotToRow(session.slot),
        zIndex: 1,
      }}
    >
      <SessionInfo session={session} />
    </div>
  );
};

const FixedSlot = ({ slot }: { slot: Slot }) => {
  const gridColumn = slot.type.startsWith("keynote")
    ? "2 / 2"
    : slot.display.notForCodelab
      ? "2 / span 2"
      : "2 / -1";
  return (
    <div
      className={classNames(styles.slot, styles.fixed, styles[slot.type])}
      style={{
        gridColumn,
        gridRow: slotToRow(slot as Slot),
        zIndex: 0,
      }}
    >
      <h3>{SlotTypeLabel[slot.type]}</h3>
    </div>
  );
};


// @see https://github.com/GDG-Nantes/Devfest2023/blob/main/src/components/session/sessionPageTemplate.tsx
export const LargeSchedule = ({ sessions, allHoursSlots, fixedSlots }: { sessions: FullSession[], allHoursSlots: Slot[], fixedSlots: Slot[] }) => {
  const hoursStart = allHoursSlots.map((slot) => slot.start);
  const hoursSlots = hoursStart.map(
    (start) => allHoursSlots.find((slot) => slot.start === start) as Slot
  );
  const sessionsByHours: { [k: string]: Array<FullSession> } = {};
  const fixedSlotsByHours: { [k: string]: Array<Slot> } = {};
  hoursSlots.forEach((hourSlot) => {
    sessionsByHours[hourSlot.start] = sessions
      .filter((s) => s.slot.start === hourSlot.start)
      .sort((s1, s2) => rooms.indexOf(s1.room) - rooms.indexOf(s2.room));
    fixedSlotsByHours[hourSlot.start] = fixedSlots.filter(
      (s) => s.start === hourSlot.start
    );
  });



  return (

    <div className={styles.scheduleLarge}>
      {rooms.map((room) => (
        <Room key={room} name={room} />
      ))}
      {hoursSlots.map((hourSlot) => {
        return (
          <React.Fragment key={hourSlot.start}>
            <Hour key={hourSlot.key} slot={hourSlot} />
            {fixedSlotsByHours[hourSlot.start].map((slot) => (
              <FixedSlot slot={slot} key={slot.key} />
            ))}
            {sessionsByHours[hourSlot.start].map((session) => (
              <Session session={session} key={session.id} />
            ))}
          </React.Fragment>
        );
      })}

    </div>)
}

function columnFromRoom(room: string) {
  return rooms.indexOf(room) + 2 + " / " + (rooms.indexOf(room) + 2);
}

function slotToRow(slot: Slot) {
  const firstRow = 1;
  const rowStart = slot.display.row + firstRow;
  const spanRow = slot.display.size;
  return `${rowStart} / span ${spanRow}`;
}