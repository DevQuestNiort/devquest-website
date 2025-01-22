import { FullSession } from "@/model/FullSession";
import { Slot, SlotTypeLabel } from "@/model/Slot";
import { rooms, Speakers, Tags } from "../common";
import classNames from "classnames";
import Link from "next/link";
import { Fragment, PropsWithChildren } from "react";
import styles from "./MobileSchedule.module.scss";

type MobileScheduleProps = {
  sessions: FullSession[];
  allHoursSlots: Slot[];
  fixedSlots: Slot[];
};

export const MobileSchedule = ({
  sessions,
  allHoursSlots,
  fixedSlots,
}: MobileScheduleProps) => {
  const hours = allHoursSlots
    .map((slot) => slot.start) //
    // unicity
    .filter((start, i, l) => l.indexOf(start) === i);

  const sessionsByHours: { [k: string]: Array<FullSession> } = {};
  const fixedSlotsByHours: { [k: string]: Array<Slot> } = {};
  hours.forEach((hour) => {
    sessionsByHours[hour] = sessions
      .filter((s) => s.slot.start === hour)
      .sort((s1, s2) => rooms.map(r => r.name).indexOf(s1.room) - rooms.map(r => r.name).indexOf(s2.room));
    fixedSlotsByHours[hour] = fixedSlots.filter((s) => s.start === hour);
  });

  return (
    <Stack direction="column" spacing={2} classes={styles.mobileSchedule}>
      {hours.map((hour) => {
        return (
          <Fragment key={hour}>
            <Hour hour={hour} />
            {sessionsByHours[hour].map((session) => (
              <Session session={session} key={session.slug} />
            ))}
            {fixedSlotsByHours[hour].map((slot) => (
              <FixedSlot slot={slot} key={slot.key} />
            ))}
          </Fragment>
        );
      })}
    </Stack>
  );
};

const Stack = ({
  direction = "column",
  spacing,
  classes = "",
  alignItems = "inherit",
  children,
}: PropsWithChildren<{
  direction?: "column" | "row";
  alignItems?: "center" | "end" | "start" | "inherit";
  spacing: number;
  classes?: string;
}>) => (
  <div
    style={{
      display: "flex",
      flexDirection: direction,
      alignItems,
      gap: `${spacing}rem`,
    }}
    className={classes}
  >
    {children}
  </div>
);

const Hour = ({ hour }: { hour: string }) => (
  <div className={styles.hour}>
    <h3>{hour}</h3>
  </div>
);

const FixedSlot = ({ slot }: { slot: Slot }) => {
  return (
    <div className={classNames(styles.slot, styles.fixed, styles[slot.type])}>
      <h3>{SlotTypeLabel[slot.type]}</h3>
    </div>
  );
};

const Session = ({ session }: { session: FullSession }) => {
  return (
    <div
      className={classNames(styles.slot, styles.session, styles.slotSession)}
    >
      <SessionInfo session={session} />
    </div>
  );
};

const SessionInfo = ({ session }: { session: FullSession }) => {
  return (
    <Link
      href={"/sessions/" + session.slug}
      className={classNames(
        styles.disableLinkStyle,
        styles.sessionInfo,
        session.cancelled && styles.cancelled,
      )}
    >
      <span className={styles.sessionTitle}>{session.title}</span>
      <Stack spacing={2} alignItems="center" direction="row">
        {session.tags && <Tags tags={session.tags} />}
        <span>{session.room}</span>
      </Stack>
      {session.speakers.length != 0 && <Speakers speakers={session.speakers} />}
    </Link>
  );
};
