import style from "./Sponsor.module.scss";

export interface SponsorProperties {
    readonly img: string
    readonly name: string
    readonly websiteUrl: string
    readonly level: "unique" | "rare" | "commun"
}

export default function Sponsor({ img, name, websiteUrl, level }: SponsorProperties) {
    let styleClass;
    switch (level) {
        case "unique":
            styleClass = style.unique;
            break;
        case "rare":
            styleClass = style.rare;
            break;
        case "commun":
            styleClass = style.commun;
            break;
        default:
            styleClass = style.commun;
    }
    return <div>
        <a href={websiteUrl} target="_blank">
            <img class={styleClass} height="128" width="128" src={img} alt={name} />
        </a>
        <h2>{name}</h2>
    </div>
}
