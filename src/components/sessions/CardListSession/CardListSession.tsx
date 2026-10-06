import { Galery } from "@/components/Galery";
import { CardSession } from "@/components/sessions/CardSession/CardSession";
import { Session } from "@/model/Session";
import { Speaker } from "@/model/Speaker";

interface CardListSessionProperties {
  readonly sessions: Session[];
  readonly speakers: Speaker[];
  readonly columns?: number;
}

export function CardListSession({ sessions, speakers, columns }: CardListSessionProperties) {
  return (
    <Galery columns={columns}>
      {sessions.map((session) => (
        <CardSession key={session.id} session={session} speakers={speakers} />
      ))}
    </Galery>
  );
}
