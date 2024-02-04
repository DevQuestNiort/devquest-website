import style from "./Thematiques.module.scss";

interface ThematiqueProperties {
    img: string;
    name: string;
    details: string;
}

export default function Thematique({img, details, name}: ThematiqueProperties) {
    return <div className={style.theme}>
        <img src={img} alt=""/>
        <div className={style.themeName}>{name}</div>
        <div>{details}</div>
    </div>

}