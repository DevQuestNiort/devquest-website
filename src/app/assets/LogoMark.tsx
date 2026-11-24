"use client";

import {
  DevQuestLogoEpee,
  DevQuestLogoLongDate,
  DevQuestLogoShortDate,
} from "@/components/DevQuestLogo";
import {
  HALO_COLORS,
  type LogoOptions,
  resolveColors,
  selectedEdition,
} from "./logoOptions";

interface LogoMarkProperties
  extends Omit<React.SVGProps<SVGSVGElement>, "fill" | "viewBox" | "xmlns"> {
  readonly options: LogoOptions;
}

/**
 * Le logo DevQuest correspondant aux options (modèle, couleurs, texte de
 * l'édition, halo). Les autres props (height, style…) passent au <svg>.
 * Les couleurs « thème » se résolvent selon le data-theme d'un ancêtre.
 */
export function LogoMark({ options, ...svgProps }: LogoMarkProperties) {
  const { dark, light } = resolveColors(options);
  const edition = selectedEdition(options);
  const city = options.text ? edition.city : undefined;
  const date = options.text ? edition.date : undefined;
  const common = {
    ...svgProps,
    darkColor: dark,
    lightColor: light,
    haloColor: options.halo
      ? HALO_COLORS.find((c) => c.value === options.haloColor)!.color
      : undefined,
    haloSize: options.haloSize,
  };

  if (options.model === "long") {
    return <DevQuestLogoLongDate {...common} city={city?.toUpperCase()} date={date} />;
  }
  if (options.model === "epee") {
    return <DevQuestLogoEpee {...common} />;
  }
  return <DevQuestLogoShortDate {...common} city={city} date={date} />;
}
