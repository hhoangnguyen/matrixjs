import Matrix from '../../../Class/Matrix';
import Add from '../../../Class/Operation/Add';
import Message from '../../../Class/Message';

describe('Check input data', () => {
  it('throws error if data not a Matrix or a Vector', () => {
    let func = () => new Add();
    expect(func).toThrow(new Error(Message.common.dataMustBeMatrixOrVector));
    func = () => new Add(3, 4);
    expect(func).toThrow(new Error(Message.common.dataMustBeMatrixOrVector));
  });
  it('throws error if data not have same number of rows and columns', () => {
    let a = new Matrix([[1, 2], [3, 4]]);
    let b = new Matrix([[1, 2, 3], [3, 4, 5]]);
    let func = () => new Add(a, b);
    expect(func).toThrow(new Error(Message.common.notSameDimensions));

    a = new Matrix([1, 2]);
    b = new Matrix([3, 4, 5]);
    func = () => new Add(a, b);
    expect(func).toThrow(new Error(Message.common.notSameDimensions));
  });
});