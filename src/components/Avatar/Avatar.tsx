import style from './Avatar.module.scss';

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
      <img className={style.avatar} height="128" width="128" src={img} alt="" />
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
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
