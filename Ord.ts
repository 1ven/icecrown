import { Setoid } from "./Setoid";

export interface Ord extends Setoid {
  lte: (a: Ord) => boolean;
}
