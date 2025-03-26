import { Session } from "./Session";
import { Slot } from "./Slot";
import { Speaker } from "./Speaker";

export type FullSession = Omit<Session, 'slot'> & {slot: Slot, speakers: Speaker[]};