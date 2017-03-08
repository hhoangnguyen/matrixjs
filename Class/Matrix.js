import Message from './Message';
import Util from './Util';
import Vector from './Vector';

/**
 * Class Matrix
 * @extends Vector
 */
export default class Matrix extends Vector {
  /**
   * Constructor
   * @param data
   * @param rowVector
   */
  constructor(data, rowVector) {
    if (!Util.isArray(data[0])) { // column or row Vector
      super(data, rowVector);
    }
    else { // Matrix is just a multi-row Vector
      // initialized the matrix as a row Vector first
      super(data[0], true);

      // create matrix
      this.createMatrix(data);
    }
  }

  /**
   * Helper function to create the matrix
   */
  createMatrix(data) {
    // override parent data (2-dimensional array) property
    this.setData(data);

    // check if row dimensions match
    if (!this.isValidMatrixRowDimension()) {
      throw new Error(Message.matrix.rowDimensionNotMatch + this.result.getData());
    }
    else {
      if (!this.isValidMatrixData()) {
        throw new Error(Message.matrix.notNumberOrFloat);
      }
    }
  }

  /**
   * Helper function to check if matrix data is valid
   * using Vector's isValidVectorData() over each row of the matrix
   * @param data
   * @returns {*}
   */
  isValidMatrixData(data) {
    if (!Util.isExisted(data)) data = this.data;

    this.result.setValid(true);
    data.map((rowData) => {
      if (!this.isValidVectorData(rowData)) {
        this.result.setValid(false);
        this.result.setData(rowData);
      }
    });
    return this.result.isValid();
  }

  /**
   * Helper function to check if each row has same dimension as getDimension()
   * @param data
   * @returns {*}
   */
  isValidMatrixRowDimension(data) {
    if (!Util.isExisted(data)) data = this.data;

    const rowDimension = this.getDimension();

    this.result.setValid(true);
    data.map((rowData) => {
      if (rowDimension !== rowData.length) {
        this.result.setValid(false);
        this.result.setData(rowData);
      }
    });
    return this.result.isValid();
  }

  /**
   * Override Vector's getSize returning a row Vector of rows and columns
   * @returns {Vector}
   */
  getSize() {
    const rowData = this.getData();
    // if it is a Vector, use Vector's getSize
    if (!Util.isArray(rowData[0])) {
      return super.getSize();
    }
    else {
      return new Vector([rowData.length, rowData[0].length], true);
    }
  }

  /**
   * Return number of rows
   * @returns Integer
   */
  getNumRows() {
    return this.getSize().getData()[0];
  }

  /**
   * Return number of columns
   * @returns Integer
   */
  getNumColumns() {
    return this.getSize().getData()[1];
  }

  /**
   * Create an identity matrix of size n
   * @param size
   * @returns {Matrix}
   */
  static identity(size) {
    let dataArray = [];
    let currentIndexOfOne = 0;
    for (var row = 0; row < size; row++) {
      let rowArray = new Array(size);
      // fill array with 0s
      rowArray.fill(0);
      // update appropriate index to 1
      rowArray[currentIndexOfOne] = 1;
      // push to dataArray
      dataArray[row] = rowArray;
      // increase current index of 1
      currentIndexOfOne++;
    }
    return new Matrix(dataArray);
  }
}