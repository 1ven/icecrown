import { PlainObject } from "./";

export default <T, T1>(fns: PlainObject<(x: T) => T1>, obj: PlainObject<T>) => {
  let result = {};

  for (let key in obj) {
    if (key in fns) {
      result[key] = fns[key](obj[key]);
    }
  }

  return result;
};
