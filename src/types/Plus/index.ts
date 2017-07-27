import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";
import { Alt } from "../Alt";

export interface Plus<T> extends Alt<T> {}

export interface PlusConstructor {
  // new (): Plus<void>;
  zero: () => Plus<void>;
}

export function zero(P: ObjectConstructor): PlainObject<void>;
export function zero(P: ArrayConstructor): Array<void>;
export function zero(P: PlusConstructor): Plus<void>;

export function zero(P) {
  const apply = obj => obj.methods.zero();

  if (object.isConstructor(P)) {
    return apply(object);
  }

  if (array.isConstructor(P)) {
    return apply(array);
  }

  return P.zero();
}
