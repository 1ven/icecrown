import * as array from "../../built-in/Array";
import * as object from "../../built-in/Object";
import { PlainObject } from "../../built-in/Object";

export interface Functor<T> {
  map: <T1>(fn: (a: T) => T1) => Functor<T1>;
}

export function map<T, T1>(f: (x: T) => T1, a: PlainObject<T>): PlainObject<T1>;
export function map<T, T1>(f: (x: T) => T1, a: Array<T>): Array<T1>;
export function map<T, T1>(f: (x: T) => T1, a: Functor<T>): Functor<T1>;

export function map(f, a) {
  const apply = obj => obj.extended.prototype.map.apply(a, [f]);

  if (object.is(a)) {
    return apply(object);
  }

  if (array.is(a)) {
    return apply(array);
  }

  return a.map(f);
}
