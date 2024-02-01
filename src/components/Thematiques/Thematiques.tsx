
import style from "./Thematiques.module.scss";
import { Theme, themes } from '../../data/themes';

export default function Thematiques() {
    return <div class={style.themeContainer}>
        {themes?.map((theme: Theme) =>
            <div class={style.theme}>
                <img src={theme.img} alt="" />
                <span class={style.themeName}>{theme.name}</span>
            </div>)}
    </div>

}