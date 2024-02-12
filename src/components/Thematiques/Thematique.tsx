import style from './Thematiques.module.scss';
import Image from "next/image";

interface ThematiqueProperties {
  img: string;
  name: string;
  details: string;
}

export default function Thematique({ img, details, name }: ThematiqueProperties) {
  return (
    <div className={style.theme}>
      <Image src={img} height={96}
             width={96} alt="" />
      <div className={style.themeName}>{name}</div>
      <div>{details}</div>
    </div>
  );
}
