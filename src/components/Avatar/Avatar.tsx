"use client";

import style from "./Avatar.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AvartarProperties {
  readonly img?: string;
  readonly name: string;
  readonly role?: string;
  readonly company? :string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly x?: string;
  readonly classes?: {
    main?: string,
    icon?: string
  }
  withSocials?: boolean,
}

const DEFAULT_AVATAR = "/icons-rp/role-playing.png";

export default function Avatar({
  img,
  name,
  role,
  company,
  github,
  linkedin,
  x,
  classes,
  withSocials = true,
}: AvartarProperties) {
  const safeImg = img?.trim() ? img : DEFAULT_AVATAR;
  const [resolvedSrc, setResolvedSrc] = useState(safeImg);

  useEffect(() => {
    setResolvedSrc(safeImg);
  }, [safeImg]);

  return (
    <div className={classes?.main ?? ''}>
      <Image
        className={style.avatar}
        height="128"
        width="128"
        src={resolvedSrc}
        alt=""
        onError={() => {
          if (resolvedSrc !== DEFAULT_AVATAR) {
            setResolvedSrc(DEFAULT_AVATAR);
          }
        }}
      />
      <p className={style.name}>
        {name}
      </p>
      {role && <p className={style.role}>{role}</p>}
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
