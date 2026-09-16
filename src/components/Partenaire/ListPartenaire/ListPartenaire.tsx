import { Galery } from "@/components/Galery";
import { LogoPartenaire } from "@/components/LogoPartenaire";
import { LevelPartenaire } from "@/model/LevelPartenaire";
import { Partenaire } from "@/model/Partenaire";
import Image from "next/image";

interface PartnersListProperties {
    readonly partenaires: Partenaire[];
    readonly levelpartenaires: LevelPartenaire[];
}


export default function ListPartenaire(
    partenaires
        : Partenaire[]) {

    return partenaires?.map((partenaire, index) => {
        return <LogoPartenaire
            actif={partenaire.actif}
            key={index}
            name={partenaire.name}
            level={partenaire.level}
            asset={partenaire.asset}
            website={partenaire.site}
        />
    }
    )


}

export function SponsorsByLevel({ partenaires, levelpartenaires }
    : PartnersListProperties) {
    return <>

        {levelpartenaires?.toSorted((l1, l2) => l1.order - l2.order).map((level, index) => {
            return <> <h3>
                <Image
                    height={32}
                    width={32}
                    alt=""
                    src={`/icons-rp/${level.iconName}`}
                    aria-hidden="true"
                />
                <span>{level.label}</span>
            </h3>
                <Galery>

                    {partenaires
                        .filter((p) => p.level === level.code)
                        .map((p, i) => (
                            <LogoPartenaire
                                key={i}
                                showName={true}
                                name={p.name}
                                level={p.level}
                                asset={p.asset}
                                website={p.site}
                                actif={p.actif}
                            />
                        ))}
                </Galery>
            </>
        })}
    </>
}