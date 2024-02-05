import { Controller } from './Controller.ts';
import { StateChangedHandler } from './StateChangedHandler.ts';

export default abstract class BaseController<T> implements Controller<T> {
  private _onStateChanged?: StateChangedHandler;

  abstract get state(): T;

  subscribeStateChanged(onStateChanged: StateChangedHandler): void {
    this._onStateChanged = onStateChanged;
  }

  unsubscribeStateChanged(): void {
    this._onStateChanged = undefined;
  }

  raiseStateChanged() {
    this._onStateChanged && this._onStateChanged();
  }
}
