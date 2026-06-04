import { Membre } from "@/model/Membre";
import { Avatar } from "@/components/Avatar";
import styles from "./MembreCard.module.scss";

export default function MembreCard({ membre }: { membre: Membre }) {

    return <div className={styles.membreCard}>
              <Avatar
                img={membre.picture}
                name={membre.name}
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
        </div>
}
