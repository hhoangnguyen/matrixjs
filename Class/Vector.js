import Base from './Base';
import Message from './Message';
import Util from './Util';

/**
 * Class Vector
 */
export default class Vector extends Base {
  /**
   * Constructor
   * @param data
   * @param rowVector, default is column Vector
   */
  constructor(data, rowVector) {
    super();

    if (this.isValidVectorData(data)) {
      // create new array contains data
      this.data = data;

      // set dimension
      this.setDimension(data.length);

      // is this a row vector?
      if (rowVector) this.setRowVector(true);
      else this.setRowVector(false);
    }
  }

  /**
   * Return a row Vector where data has length 2:
   * index 0 = number of rows
   * index 1 = number of columns
   * @returns {Vector}
   */
  getSize() {
    if (this.isRowVector()) {
      return new Vector([1, this.getDimension()], true);
    }
    else {
      return new Vector([this.getDimension(), 1], true);
    }
  }

  /**
   * Return data element at specified index
   * @param index
   * @returns {*}
   */
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error(Message.vector.outOfBound);
    }
    return this.data[index];
  }

  setDimension(dimension) {
    this.dimension = dimension;
    return this;
  }

  getDimension() {
    return this.dimension;
  }

  isRowVector() {
    return this.rowVector;
  }

  setRowVector(rowVector) {
    this.rowVector = rowVector;
    return this;
  }

  /**
   * Array, not empty, integer or float
   * @param data
   * @returns {boolean}
   */
  isValidVectorData(data) {
    if (!Util.isExisted(data)) data = this.data;

    // is data an array?
    if (!Util.isArray(data)) {
      throw new Error(Message.vector.notArray);
    }

    // is data an empty array?
    if (Util.isArrayEmpty(data)) {
      throw new Error(Message.vector.dataArrayIsEmpty);
    }

    // is array element not in valid format?
    if (!this.isCorrectFormat(data)) {
      throw new Error(Message.vector.notNumberOrFloat + this.result.getData());
    }

    // all good
    return true;
  }

  isCorrectFormat(data) {
    // is it an array?
    if (!Util.isArray(data)) return false;

    this.result.setValid(true);
    // loop through each element, make sure they're either integer or float
    data.map((value) => {
      if (!Util.isInt(value) && !Util.isFloat(value)) {
        this.result.setValid(false);
        this.result.setData(value);
      }
    });
    return this.result.isValid();
  }

  setData(data) {
    this.data = data;
    return this;
  }

  getData() {
    return this.data;
  }

  /**
   * Check if is Vector object
   * @param data
   * @returns {boolean}
   */
  static isVector(data) {
    return (data !== null && data instanceof Vector);
  }
}