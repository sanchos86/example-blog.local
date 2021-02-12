export default class Model {
  toJSON() { // https://stackoverflow.com/a/61604182
    return Object.getOwnPropertyNames(this).reduce((accumulator, currentValue) => {
      accumulator[currentValue] = this[currentValue];
      return accumulator;
    }, {});
  }
}
