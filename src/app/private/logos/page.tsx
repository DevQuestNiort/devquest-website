import Link from "next/link";
import { Card } from "@/components/Card";
import { Galery } from "@/components/Galery";
import { Section } from "@/components/Section";
import {
  DevQuestLogoLongDate,
  DevQuestLogoShortDate,
  DownloadLogoPng,
} from "@/components/DevQuestLogo";

const CITY = { short: "Niort", long: "NIORT" };
const DATE = "10 & 11 Juin";

const colorVariants = [
  { slug: "noir-blanc", label: "Noir et blanc", darkColor: "black", lightColor: "white" },
  {
    slug: "chapter-main",
    label: "Chapter et Main",
    darkColor: "var(--chapter-color)",
    lightColor: "var(--main-color)",
  },
  {
    slug: "chapter-main-inverse",
    label: "Chapter et Main inversé",
    darkColor: "var(--main-color)",
    lightColor: "var(--chapter-color)",
  },
];

const textVariants = [
  { slug: "avec-texte", label: "avec texte", withText: true },
  { slug: "sans-texte", label: "sans texte", withText: false },
];

export default function LogosCatalog() {
  return (
    <Section variant="Main">
      <h1>Catalogue des logos</h1>
      <p>
        <Link href="/private">← Page privée</Link>
      </p>

      <h2>Logo court</h2>
      <Galery columns={2}>
        {colorVariants.flatMap((color) =>
          textVariants.map((text) => (
            <Card variant="ChapterLight" key={`${color.slug}-${text.slug}`}>
              <h3>
                {color.label}, {text.label}
              </h3>
              <DownloadLogoPng filename={`devquest-logo-court-${color.slug}-${text.slug}`}>
                <DevQuestLogoShortDate
                  darkColor={color.darkColor}
                  lightColor={color.lightColor}
                  city={text.withText ? CITY.short : undefined}
                  date={text.withText ? DATE : undefined}
                  height={200}
                />
              </DownloadLogoPng>
            </Card>
          )),
        )}
      </Galery>

      <h2>Logo long</h2>
      <Galery columns={2}>
        {colorVariants.flatMap((color) =>
          textVariants.map((text) => (
            <Card variant="ChapterLight" key={`${color.slug}-${text.slug}`}>
              <h3>
                {color.label}, {text.label}
              </h3>
              <DownloadLogoPng filename={`devquest-logo-long-${color.slug}-${text.slug}`}>
                <DevQuestLogoLongDate
                  darkColor={color.darkColor}
                  lightColor={color.lightColor}
                  city={text.withText ? CITY.long : undefined}
                  date={text.withText ? DATE : undefined}
                  width={320}
                />
              </DownloadLogoPng>
            </Card>
          )),
        )}
      </Galery>
    </Section>
  );
}
