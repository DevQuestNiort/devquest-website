import { HasState } from './HasState.ts';
import { StateObservable } from './StateObservable.ts';

export interface Controller<T> extends StateObservable, HasState<T> {}
