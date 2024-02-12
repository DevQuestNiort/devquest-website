import style from './Avatar.module.scss';
import Image from "next/image";

interface AvartarProperties {
  readonly img: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
  readonly github?: string;
  readonly linkedin?: string;
}

export default function Avatar({ img, firstName, lastName, role, github, linkedin }: AvartarProperties) {
  return (
    <div>
      <Image className={style.avatar} height="128" width="128" src={img} alt="" />
      <p className="h2">{firstName}</p>
      <p className="h2">{lastName}</p>
      <div className={style.infos}>
        <p>{role}</p>
        {github && (
          <a target="_blank" href={`https://github.com/${github}`}>
            <span className="icon-github"></span>
          </a>
        )}
        {linkedin && (
          <a target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}>
            <span className="icon-linkedin"></span>
          </a>
        )}
      </div>
    </div>
  );
}
