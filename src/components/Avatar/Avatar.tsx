import style from "./Avatar.module.scss";
import Image from "next/image";

interface AvartarProperties {
  readonly img: string;
  readonly name: string;
  readonly metier?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly color?: 'YELLOW' |'BLUE' | 'RED'| "NONE" ;
  readonly classes?: {
    main?: string,
    icon?: string
  }
  withSocials?: boolean,
}

export default function Avatar({
  img,
  name,
  role,
  company,
  metier,
  github,
  linkedin,
  x,
  color,
  classes,
  withSocials = true,
}: AvartarProperties) {
  
  let avatarStyle = style.avatar 
switch(color){
  case "BLUE": avatarStyle =  style.blueavatar; break;
  case "RED": avatarStyle =  style.redavatar ; break;
  case "YELLOW": avatarStyle =  style.yellowavatar ; break;
  default : style.avatar
}


  return (
    <div className={classes?.main ?? ''}>
      
      <Image
        className={avatarStyle}
        height="128"
        width="128"
        src={img}
        alt=""
      />
      <p className={style.name}>
        {name}
      </p>
        {metier && <p className={style.metier}>{metier}</p>}
      {company && <p className={style.role}>{company}</p>}

      {withSocials && <div className={style.infos}>
    
        {github && (
          <a target="_blank" aria-label={`Github de ${name}`} href={github}>
            <span className="icon-github" style={{ color: "black" }}></span>
          </a>
        )}
        {linkedin && (
          <a target="_blank" aria-label={`Linkedin de ${name}`} href={linkedin}>
            <span className="icon-linkedin" style={{ color: "black" }}></span>
          </a>
        )}
        {x && (
          <a target="_blank" aria-label={`X de ${name}`} href={x}>
            <span className="icon-x" style={{ color: "black" }}></span>
          </a>
        )}
      </div>}
    </div>
  );
}
