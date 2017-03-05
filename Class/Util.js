/**
 * Class Util
 * Commonly use functions
 */
export default class Util {
  static isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  static isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  static isExisted(data) {
    return typeof data !== 'undefined' && data !== null;
  }

  static isArray(data) {
    if (!this.isExisted(data)) return false;

    return data.constructor === Array;
  }

  static isArrayEmpty(data) {
    if (!this.isExisted(data)) return false;

    return data.length === 0;
  }

  static isValidMatrixData(data) {
    // is it an array?
    if (!this.isArray(data)) return false;

    let valid = true;
    // loop through each element, make sure they're either integer or float
    data.map((value) => {
      if (!this.isInt(value) && !this.isFloat(value)) {
        valid = false;
      }
    });
    return valid;
  }
}