export class Util {
  static isServer() {
    return typeof window === 'undefined';
  }

  static isEqualJSON(objectOne, objectTwo) {
    const isObject = value => value !== null && typeof value === 'object';

    if (isObject(objectOne) && isObject(objectTwo)) {
      const keysOne = Object.keys(objectOne);
      const keysTwo = Object.keys(objectTwo);

      if (keysOne.length !== keysTwo.length) {
        return false;
      }

      for (const key of keysOne) {
        const valueOne = objectOne[key];
        const ValueTwo = objectTwo[key];

        if (
          isObject(valueOne) &&
          isObject(ValueTwo) &&
          !this.isEqualJSON(valueOne, ValueTwo)
        ) {
          return false;
        }
        if (
          !isObject(valueOne) &&
          !isObject(ValueTwo) &&
          valueOne !== ValueTwo
        ) {
          return false;
        }
      }

      return true;
    }
    return false;
  }
}
