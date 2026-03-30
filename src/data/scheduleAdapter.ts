import { promises as fs } from "fs";
import { FullSession } from "@/model/FullSession";
import { Slot } from "@/model/Slot";
import { Speaker } from "@/model/Speaker";
import { Format, Tags } from "@/model/Session";

type RawSpeaker = {
  id: string;
  name: string;
  bio?: string | null;
  company?: string | null;
  picture?: string | null;
  socialLinks?: string[];
};

type RawProposal = {
  id: string;
  abstract?: string | null;
  title?: string | null;
  formats?: string[];
  categories?: string[];
  speakers?: RawSpeaker[];
};

type RawScheduleSession = {
  id: string;
  start: string;
  end: string;
  track: string;
  title?: string | null;
  language?: string | null;
  proposal?: RawProposal | null;
};

type RawScheduleFile = {
  name: string;
  days: string[];
  timeZone: string;
  sessions: RawScheduleSession[];
};

export type ScheduleDay = {
  slug: string;
  idDay: string;
  label: string;
  dateKey: string;
};

export type AdaptedScheduleData = {
  days: ScheduleDay[];
  sessions: FullSession[];
  allHoursSlots: Slot[];
  fixedSlots: Slot[];
};

const DAY_LABELS = ["Jeudi 11", "Vendredi 12"];
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}/;
const GRID_STEP_MINUTES = 30;

const categoryMap: Record<string, Tags | undefined> = {
  "Méthodo & Architecture": "architecture",
  "Methodo & Architecture": "architecture",
  "Cloud & DevOps": "cloud_devops",
  "Cloud & DevSecOps": "cloud_devops",
  Frontend: "frontend",
  Backend: "backend",
  IA: "ia",
  "UX / UI": "ux_ui",
  "UX/UI": "ux_ui",
  Discovery: "discovery",
};

const pad2 = (value: number) => value.toString().padStart(2, "0");

const toScheduleDateKey = (isoDate: string) => {
  const match = isoDate.match(ISO_DATE_RE);
  if (match?.[0]) {
    return match[0];
  }
  return new Date(isoDate).toISOString().slice(0, 10);
};

const toScheduleTime = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${pad2(date.getUTCHours())}:${pad2(date.getUTCMinutes())}`;
};

const toScheduleMinutes = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.getUTCHours() * 60 + date.getUTCMinutes();
};

const toSlug = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "session";

const toTags = (categories?: string[], title?: string | null): Tags[] => {
  const mapped = (categories ?? [])
    .map((category) => categoryMap[category])
    .filter(Boolean) as Tags[];

  if ((title ?? "").toLowerCase().includes("keynote")) {
    return mapped;
  }

  return Array.from(new Set(mapped));
};

const toSocial = (socialLinks?: string[]) => {
  const links = socialLinks ?? [];
  return {
    x: links.find((link) => link.includes("x.com") || link.includes("twitter.com")) ?? "",
    linkedin: links.find((link) => link.includes("linkedin.com")) ?? "",
    github: links.find((link) => link.includes("github.com")) ?? "",
    instagram: links.find((link) => link.includes("instagram.com")) ?? "",
    website:
      links.find(
        (link) =>
          !link.includes("x.com") &&
          !link.includes("twitter.com") &&
          !link.includes("linkedin.com") &&
          !link.includes("github.com") &&
          !link.includes("instagram.com"),
      ) ?? "",
  };
};

const detectSlotType = (session: RawScheduleSession): Slot["type"] => {
  const title = (session.title ?? session.proposal?.title ?? "").toLowerCase();
  if (title.includes("keynote")) {
    return "keynote";
  }
  if (session.track.toLowerCase().includes("workshop")) {
    return "codelab";
  }
  return "conference";
};

const getRoomDisplayOrder = (trackName: string) => {
  const order = ["Forge" , "Laboratoire" , "Observatoire" , "Beffroi" ];
  const index = order.indexOf(trackName);
  return index === -1 ? 999 : index;
};

export const loadScheduleFile = async (): Promise<RawScheduleFile> =>
  JSON.parse(
    await fs.readFile(
      process.cwd() + "/src/data/devquest-2026-schedule.json",
      "utf8",
    ),
  ) as RawScheduleFile;

export const getScheduleDays = async (): Promise<ScheduleDay[]> => {
  const schedule = await loadScheduleFile();
  return schedule.days.map((dayIso, index) => ({
    slug: `day-${index + 1}`,
    idDay: `day-${index + 1}`,
    label:
      DAY_LABELS[index] ??
      new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(new Date(dayIso)),
    dateKey: toScheduleDateKey(dayIso),
  }));
};

export const getAdaptedScheduleForDay = async (
  daySlug: string,
): Promise<AdaptedScheduleData> => {
  const schedule = await loadScheduleFile();
  const days = await getScheduleDays();
  const selectedDay = days.find((day) => day.slug === daySlug) ?? days[0];

  const daySessions = schedule.sessions
    .filter((session) => toScheduleDateKey(session.start) === selectedDay.dateKey)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const uniqueStarts = Array.from(
    new Set(daySessions.map((session) => session.start)),
  ).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  );
  const firstStart = Math.min(
    ...uniqueStarts.map((start) => toScheduleMinutes(start)),
  );

  const allHoursSlots: Slot[] = uniqueStarts.map((startIso, index) => {
    const row = Math.max(
      1,
      Math.floor((toScheduleMinutes(startIso) - firstStart) / GRID_STEP_MINUTES) + 1,
    );
    return {
      key: `${selectedDay.idDay}-hour-${index + 1}`,
      day: selectedDay.idDay,
      start: toScheduleTime(startIso),
      type: "conference",
      display: {
        row,
        size: 1,
      },
    };
  });

  const slotBySessionId: Record<string, Slot> = {};
  daySessions.forEach((session, index) => {
    const row = Math.max(
      1,
      Math.floor((toScheduleMinutes(session.start) - firstStart) / GRID_STEP_MINUTES) + 1,
    );
    const durationMinutes = Math.max(
      10,
      Math.round(
        (new Date(session.end).getTime() - new Date(session.start).getTime()) / 60000,
      ),
    );
    const size = Math.max(1, Math.ceil(durationMinutes / GRID_STEP_MINUTES));

    slotBySessionId[session.id] = {
      key: `${selectedDay.idDay}-session-${index + 1}`,
      day: selectedDay.idDay,
      start: toScheduleTime(session.start),
      type: detectSlotType(session),
      display: {
        row,
        size,
      },
    };
  });

  const sessions: FullSession[] = daySessions
    .map((session) => {
      const proposal = session.proposal ?? null;
      const title = proposal?.title ?? session.title ?? "Session a venir";
      const slug = `${toSlug(title)}-${session.id.slice(0, 8)}`;

      const speakers: Speaker[] = (proposal?.speakers ?? []).map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
        picture: speaker.picture ?? "/icons-rp/role-playing.png",
        company: speaker.company ?? "",
        bio: speaker.bio ?? "",
        sessionsId: [session.id],
        social: toSocial(speaker.socialLinks),
      }));

      const format: Format = session.track.toLowerCase().includes("workshop")
        ? "Workshop"
        : "Quickie";

      return {
        id: session.id,
        slug,
        title,
        abstract: proposal?.abstract ?? "Description a venir.",
        room: session.track,
        speakersId: speakers.map((speaker) => speaker.id),
        speakers,
        tags: toTags(proposal?.categories, title),
        cancelled: false,
        day: selectedDay.idDay,
        slot: slotBySessionId[session.id],
        format,
        categorie: proposal?.categories?.[0] ?? "",
        hour: toScheduleTime(session.start),
      };
    })
    .sort((a, b) => {
      const byStart = a.slot.display.row - b.slot.display.row;
      if (byStart !== 0) {
        return byStart;
      }
      return getRoomDisplayOrder(a.room) - getRoomDisplayOrder(b.room);
    });

  return {
    days,
    sessions,
    allHoursSlots,
    fixedSlots: [],
  };
};

export const getAllAdaptedSessions = async (): Promise<FullSession[]> => {
  const days = await getScheduleDays();
  const allByDay = await Promise.all(
    days.map((day) => getAdaptedScheduleForDay(day.slug).then((d) => d.sessions)),
  );
  return allByDay.flat();
};

export const getAllAdaptedSpeakers = async (): Promise<Speaker[]> => {
  const sessions = await getAllAdaptedSessions();
  const speakersById = new Map<string, Speaker>();

  sessions.forEach((session) => {
    session.speakers.forEach((speaker) => {
      const existing = speakersById.get(speaker.id);
      if (!existing) {
        speakersById.set(speaker.id, {
          ...speaker,
          sessionsId: [session.id],
        });
        return;
      }

      const mergedSessions = Array.from(new Set([...existing.sessionsId, session.id]));
      speakersById.set(speaker.id, {
        ...existing,
        name: existing.name || speaker.name,
        picture: existing.picture || speaker.picture,
        company: existing.company || speaker.company,
        bio: existing.bio || speaker.bio,
        social: existing.social ?? speaker.social,
        sessionsId: mergedSessions,
      });
    });
  });

  return Array.from(speakersById.values());
};

export const getAdaptedSpeakerById = async (speakerId: string) => {
  const [speakers, sessions] = await Promise.all([
    getAllAdaptedSpeakers(),
    getAllAdaptedSessions(),
  ]);
  const speaker = speakers.find((item) => item.id === speakerId);
  if (!speaker) {
    return null;
  }

  const speakerSessions = sessions.filter((session) =>
    session.speakers.some((speakerItem) => speakerItem.id === speakerId),
  );

  return {
    speaker,
    sessions: speakerSessions,
  };
};
