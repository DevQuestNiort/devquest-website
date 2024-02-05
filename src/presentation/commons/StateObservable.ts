import { StateChangedHandler } from './StateChangedHandler.ts';

export interface StateObservable {
  subscribeStateChanged(onStateChanged: StateChangedHandler): void;

  unsubscribeStateChanged(onStateChanged: StateChangedHandler): void;
}
