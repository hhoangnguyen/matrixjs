import Base from '../Base';
import Vector from '../Vector';
import Matrix from '../Matrix';
import Message from '../Message';

/**
 * Class Add for matrix addition
 */
export default class Operation extends Base {
  constructor() {
    super();
  }

  operationOneWay() {

  }

  operationTwoWay(a, b) {

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