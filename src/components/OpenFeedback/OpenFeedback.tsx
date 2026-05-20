"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./OpenFeedback.module.scss";

type Props = {
  sessionId: string;
  activeFrom: string; // ISO date string, ex: "2026-06-11"
};

const OpenFeedbackInner = ({ sessionId, activeFrom }: Props) => {
  const searchParams = useSearchParams();
  const forced = searchParams.get("OPENFEEDBACK") === "actif";

  if (!forced && new Date() < new Date(activeFrom)) return null;

  return (
    <iframe
      src={`https://openfeedback.io/X6Zd1NPDkMkDZHl003Yu/undefined/${sessionId}?hideHeader=true&forceColorScheme=dark`}
      className={styles.iframe}
    />
  );
};

export const OpenFeedback = (props: Props) => (
  <Suspense>
    <OpenFeedbackInner {...props} />
  </Suspense>
);
