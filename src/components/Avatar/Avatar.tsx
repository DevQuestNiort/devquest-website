import style from "./Avatar.module.scss";
import Image from "next/image";

interface AvartarProperties {
  readonly img: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly github?: string;
  readonly linkedin?: string;
}

export default function Avatar({
  img,
  firstName,
  lastName,
  role,
  github,
  linkedin,
}: AvartarProperties) {
  return (
    <div>
      <Image
        className={style.avatar}
        height="128"
        width="128"
        src={img}
        alt=""
      />
      <p className={style.name}>
        {firstName} {lastName}
      </p>
      <p className={style.role}>{role}</p>
      <div className={style.infos}>
        {github && (
          <a target="_blank" aria-label={`Github de ${firstName} ${lastName}`} href={`https://github.com/${github}`}>
            <span className="icon-github" style={{ color: "black" }}></span>
          </a>
        )}
        {linkedin && (
          <a target="_blank" aria-label={`Linkedin de ${firstName} ${lastName}`} href={`https://www.linkedin.com/in/${linkedin}`}>
            <span className="icon-linkedin" style={{ color: "black" }}></span>
          </a>
        )}
      </div>
    </div>
  );
}
