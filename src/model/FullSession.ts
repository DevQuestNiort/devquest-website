import { Session } from "./Session";
import { Slot } from "./Slot";
import { Speaker } from "./Speaker";

export type MaitreDeConf = {
  uid: string;
  name: string;
  picture: string;
};

export type FullSession = Omit<Session, 'slot'> & {
  slot: Slot;
  speakers: Speaker[];
  startISO: string;
  endISO: string;
  maitreDeConf?: MaitreDeConf;
};