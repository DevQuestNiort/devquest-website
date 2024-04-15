import { Session } from "./Session";
import { Slot } from "./Slot";

export type FullSession = Omit<Session, 'slot'> & {slot: Slot};