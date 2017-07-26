import * as Z from "sanctuary-type-classes";

export default function equals(other: RegExp) {
  return (
    other.source === this.source &&
    other.global === this.global &&
    other.ignoreCase === this.ignoreCase &&
    other.multiline === this.multiline &&
    other.sticky === this.sticky &&
    other.unicode === this.unicode
  );
}