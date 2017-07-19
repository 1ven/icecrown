import * as array from "../../built-in/Array";
import { Functor } from "../Functor";
import { Foldable } from "../Foldable";
import { Applicative, ApplicativeConstructor } from "../Applicative";

export interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <T1>(
    A: ApplicativeConstructor,
    f: (a: T) => Applicative<T1>
  ) => Applicative<T1 | Traversable<T>>;
}

export const traverse = function<T, T1>(
  A: ApplicativeConstructor,
  f: (a: T) => Applicative<T1>,
  a: Traversable<T>
) {
  if (array.is(a)) {
    return array.extended.prototype.traverse.apply(a, [A, f]);
  }

  return a.traverse(A, f);
};