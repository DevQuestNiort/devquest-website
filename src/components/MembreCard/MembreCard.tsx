import { Membre } from "@/model/Membre";
import { Avatar } from "@/components/Avatar";
import { ReactNode } from "react";
import styles from "./MembreCard.module.scss";

type Props = {
  membre: Membre;
  buttons?: ReactNode;
};

export default function MembreCard({ membre, buttons }: Props) {

    return <div className={styles.membreCard}>
              <Avatar
                img={membre.picture}
                name={membre.name}
                role={membre.role}
                linkedin={membre.linkedin}
                github={membre.github}
                x={membre.x}
                withSocials={!!(membre.linkedin || membre.github || membre.x)}
                classes={{ main: styles.membreAvatarWrapper }}
              />
              {membre.citation && (
                <blockquote className={styles.membreCitation}>
                  {membre.citation}
                </blockquote>
              )}
              {buttons && <div className={styles.membreButtons}>{buttons}</div>}
        </div>
}
