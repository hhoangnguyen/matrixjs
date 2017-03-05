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
    this.data = data;

    // check if row dimensions match
    if (!this.isValidMatrixRowDimension()) {
      throw new Error(Message.matrix.rowDimensionNotMatch + this.result.getData());
    }
    else {
      if (this.isValidMatrixData()) {

      }
      else {
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
}