import { concat } from "../../";

export const associativity = (a, b, c, exp = expect) => {
  exp(concat(c, concat(b, a))).toEqual(concat(concat(c, b), a));
};
