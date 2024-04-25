import classNames from "classnames";
import style from "./Avatar.module.scss";
import Image from "next/image";

interface AvartarProperties {
  readonly img: string;
  readonly name: string;
  readonly role?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly classes?: {
    main?: string,
    icon?: string
  }
}

export default function Avatar({
  img,
  name,
  role,
  github,
  linkedin,
  classes,
}: AvartarProperties) {
  return (
    <div className={classes?.main ?? ''}>
      <Image
        className={style.avatar}
        height="128"
        width="128"
        src={img}
        alt=""
      />
      <p className={style.name}>
        {name}
      </p>
      {role && <p className={style.role}>{role}</p>}
      <div className={style.infos}>
        {github && (
          <a target="_blank" aria-label={`Github de ${name}`} href={`https://github.com/${github}`}>
            <span className="icon-github" style={{ color: "black" }}></span>
          </a>
        )}
        {linkedin && (
          <a target="_blank" aria-label={`Linkedin de ${name}`} href={`https://www.linkedin.com/in/${linkedin}`}>
            <span className="icon-linkedin" style={{ color: "black" }}></span>
          </a>
        )}
      </div>
    </div>
  );
}
