/**
 * Class Result
 */
export default class Result {
  constructor() {
    this.data = null;
    this.valid = true;
  }

  setValid(valid) {
    this.valid = valid;
  }

  isValid() {
    return this.valid;
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return Result.dataPrefix() + this.data;
  }

  static dataPrefix() {
    return ': ';
  }
}