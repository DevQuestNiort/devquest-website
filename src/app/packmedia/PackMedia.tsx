import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Image from "next/image";



const listeMedia = [
  "DQ2026-AvecDate-Blanc.png",
  "DQ2026-AvecDate-Blanc.svg",
  "DQ2026-AvecDate-Couleur.png",
  "DQ2026-AvecDate-Couleur.svg",
  "DQ2026-AvecDate-CouleurInverse.png",
  "DQ2026-AvecDate-CouleurInverse.svg",
  "DQ2026-AvecDate-CouleurSansSable.png",
  "DQ2026-AvecDate-CouleurSansSable.svg",
  "DQ2026-AvecDate-Noir.png",
  "DQ2026-AvecDate-Noir.svg",
  "DQ2026-AvecDate-NoirEtBlanc.png",
  "DQ2026-AvecDate-NoirEtBlanc.svg",
  "DQ2026-SansDate-Blanc.png",
  "DQ2026-SansDate-Blanc.svg",
  "DQ2026-SansDate-Couleur.png",
  "DQ2026-SansDate-Couleur.svg",
  "DQ2026-SansDate-CouleurInverse.png",
  "DQ2026-SansDate-CouleurInverse.svg",
  "DQ2026-SansDate-CouleurSansSable.png",
  "DQ2026-SansDate-CouleurSansSable.svg",
  "DQ2026-SansDate-Noir.png",
  "DQ2026-SansDate-Noir.svg",
  "DQ2026-SansDate-NoirEtBlanc.png",
  "DQ2026-SansDate-NoirEtBlanc.svg",
]


export function PackMedia() {
  return (
    <Section theme={"Light"}>
      <div >

        <h2>
            Pack Media et usage
        </h2>
        <p>
          voici l&apos;ensemble des logos du devquest pour vos besoins.
        </p>
        <div>
          {listeMedia.map((media, i) => (
            <div   key={media}>
            <Image
              src={`logo/${media}`}
              alt="DevQuest"
              priority
              width={100}
              height={100}
            />
              <h2> {media}</h2>
            </div>
          ))}

        </div>

      </div>
    </Section>
  );
}
