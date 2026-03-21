"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DEFAULT_AVATAR = "/icons-rp/role-playing.png";

type SpeakerAvatarImageProps = {
  src?: string;
  name: string;
};

export const SpeakerAvatarImage = ({ src, name }: SpeakerAvatarImageProps) => {
  const initialSrc = src?.trim() ? src : DEFAULT_AVATAR;
  const [resolvedSrc, setResolvedSrc] = useState(initialSrc);

  useEffect(() => {
    setResolvedSrc(initialSrc);
  }, [initialSrc]);

  return (
    <Image
      src={resolvedSrc}
      alt={name}
      width={48}
      height={48}
      onError={() => {
        if (resolvedSrc !== DEFAULT_AVATAR) {
          setResolvedSrc(DEFAULT_AVATAR);
        }
      }}
    />
  );
};
