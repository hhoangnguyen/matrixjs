import Result from './Result';

/**
 * Class Base for common properties
 */
export default class Base {
  constructor() {
    this.result = new Result();
    this.data = null;
  }
}