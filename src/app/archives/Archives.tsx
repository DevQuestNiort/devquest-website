import Link from "next/link";
import { Card } from "@/components/Card";
import { DevQuestLogoEpee, DevQuestLogoShortDate } from "@/components/DevQuestLogo";
import Dummy from "@/components/dummy/Dummy";
import { Galery } from "@/components/Galery";
import { Section } from "@/components/Section";




export default function Archives() {

    return (
        <>
            <Section variant="Main" >
                <Card variant="Main">
                    <h1>Les archives</h1>
                    <p>Trois chapitres ont déjà été écrits avec la participation de tous : partenaires, participants, speakers et bénévoles.</p>
                </Card>

            </Section>
            <Section variant="Main">
                <Link href="/archives/2024" aria-label="Voir l'édition 2024" style={{ display: "inline-block" }}>
                    <DevQuestLogoEpee
                        width={64}
                        darkColor="var(--vert)"
                        lightColor="var(--main-color)"
                        haloColor="var(--vert)"
                        haloSize={20}
                    />
                </Link>
                <Card variant="Main">
                    <h2>Chapitre 1 (DevQuest 2024) : La genèse</h2>
                    <p>L&apos;année une : on part de rien. On ne sait pas trop si ça va prendre, ni comment s&apos;y prendre, tant en communication qu&apos;en organisation et en administratif. Mais les partenaires étaient présents, les participants et les speakers aussi. Grosse victoire !</p>
                </Card>
            </Section>

            <Section variant="Main">
                <Link href="/archives/2025" aria-label="Voir l'édition 2025" style={{ display: "inline-block" }}>
                    <DevQuestLogoEpee
                        width={64}
                        darkColor="var(--violet)"
                        lightColor="var(--main-color)"
                        haloColor="var(--violet)"
                        haloSize={20}
                    />
                </Link>
                <Card variant="Main">
                    <h2>Chapitre 2 (DevQuest 2025) : Et si on doublait</h2>
                    <p>L&apos;année où l&apos;on a doublé le nombre de jours de l&apos;événement, et donc le nombre de conférences, pour offrir encore plus de contenu à nos visiteurs.</p>
                </Card>
            </Section>

            <Section variant="Main">
                <Link href="/archives/2026" aria-label="Voir l'édition 2026" style={{ display: "inline-block" }}>
                    <DevQuestLogoEpee
                        width={64}
                        darkColor="var(--rouge)"
                        lightColor="var(--main-color)"
                        haloColor="var(--rouge)"
                        haloSize={20}
                    />
                </Link>
                <Card variant="Main">
                    <h2>Chapitre 3 (DevQuest 2026) : On peaufine et on stabilise</h2>
                    <p>La formule nous semble stable. On s&apos;interroge sur la façon d&apos;améliorer la qualité de l&apos;événement sans en dénaturer le cœur. Les retours étaient plutôt bons.</p>
                </Card>
            </Section>

        </>
    );
}