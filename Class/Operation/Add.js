import Base from '../Base';
import Vector from '../Vector';
import Matrix from '../Matrix';
import Message from '../Message';

/**
 * Class Add for matrix addition
 */
export default class Add extends Base {
  constructor(a, b) {
    super();

    this.a = a;
    this.b = b;

    // must be Matrices or Vectors
    if (!this.isMatrix(a) || !this.isMatrix(b)) {
      throw new Error(Message.common.dataMustBeMatrixOrVector);
    }

    // must have same rows and columns
    if (!Matrix.haveSameDimension(a, b)) {
      throw new Error(Message.common.notSameDimensions);
    }

    // add them
    this.operation();
  }

  operation() {

  }

  /**
   * Check if data is a Matrix or a Vector
   * @param data
   * @returns {boolean}
   */
  isMatrix(data) {
    return (Matrix.isMatrix(data) || Vector.isVector(data));
  }
}