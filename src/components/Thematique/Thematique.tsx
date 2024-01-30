
import style from "./Thematique.module.scss";

export interface ThematiqueProperties {
    readonly img: string
    readonly name: string
}

export default function Thematique({ img, name }: ThematiqueProperties) {
    return <div>
        <div class={style.theme}>
            <img src={img} alt={name} />
            <span >{name}</span>
        </div>
    </div>
}