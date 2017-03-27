import Base from '../Base';

/**
 * Matrix Interface
 * Must implement all these methods if subclass (implement) MatrixInterface
 */
export default class MatrixInterface extends Base {

  constructor(data, isRowVector) { super(); }

  isVector() {}

  isRowVector() {}

  getData() {}

  getSize() {}

  getNumRows() {}

  getNumColumns() {}

  static identity(size) {}

  static matrixWithValue(rows, columns, value) {}

  static isMatrix(data) {}

  static haveSameDimension(a, b) {}
}