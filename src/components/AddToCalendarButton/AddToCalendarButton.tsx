"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./AddToCalendarButton.module.scss";

type Props = {
  title: string;
  startISO: string;
  endISO: string;
  location: string;
  description: string;
  slug: string;
  compact?: boolean;
  className?: string;
};

const toICSDate = (iso: string) =>
  iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const buildGoogleUrl = ({ title, startISO, endISO, location, description }: Omit<Props, "slug" | "compact">) => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toICSDate(startISO)}/${toICSDate(endISO)}`,
    details: description,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const buildOutlookUrl = ({ title, startISO, endISO, location, description }: Omit<Props, "slug" | "compact">) => {
  const params = new URLSearchParams({
    subject: title,
    startdt: startISO,
    enddt: endISO,
    body: description,
    location,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

const downloadICS = ({ title, startISO, endISO, location, description, slug }: Props) => {
  const uid = `${slug}@devquest.fr`;
  const url = `https://devquest.fr/sessions/${slug}`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DevQuest//DevQuest 2026//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTART:${toICSDate(startISO)}`,
    `DTEND:${toICSDate(endISO)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `LOCATION:${location}`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slug}.ics`;
  link.click();
  URL.revokeObjectURL(link.href);
};

export const AddToCalendarButton = (props: Props) => {
  const { compact = false, className } = props;
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const inWrapper = wrapperRef.current?.contains(target);
      const inDropdown = document.getElementById("atcb-dropdown")?.contains(target);
      if (!inWrapper && !inDropdown) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleTrigger = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (compact && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 6, left: rect.left });
    }
    setOpen((v) => !v);
  };

  const Dropdown = () => (
    <div
      id="atcb-dropdown"
      className={styles.dropdown}
      style={compact && dropdownPos ? { position: "fixed", top: dropdownPos.top, left: dropdownPos.left } : undefined}
      role="menu"
    >
      <a
        href={buildGoogleUrl(props)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.option}
        role="menuitem"
        onClick={(e) => { e.stopPropagation(); setOpen(false); }}
      >
        Google Agenda
      </a>
      <a
        href={buildOutlookUrl(props)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.option}
        role="menuitem"
        onClick={(e) => { e.stopPropagation(); setOpen(false); }}
      >
        Outlook (web)
      </a>
      <button
        className={styles.option}
        role="menuitem"
        onClick={(e) => { e.stopPropagation(); downloadICS(props); setOpen(false); }}
      >
        Fichier .ics (Apple, Outlook…)
      </button>
    </div>
  );

  if (compact) {
    return (
      <div className={styles.compactWrapper} ref={wrapperRef}>
        <button
          ref={triggerRef}
          className={styles.compactTrigger}
          onClick={handleTrigger}
          aria-expanded={open}
          aria-haspopup="true"
          title="Ajouter au calendrier"
        >
          📅
        </button>
        {open && <Dropdown />}
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ""}`} ref={wrapperRef}>
      <button
        className={styles.trigger}
        onClick={handleTrigger}
        aria-expanded={open}
        aria-haspopup="true"
      >
        📅 Ajouter au calendrier
      </button>
      {open && <Dropdown />}
    </div>
  );
};
