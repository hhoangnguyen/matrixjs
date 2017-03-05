import Matrix from '../../Class/Matrix';
import Message from '../../Class/Message';
import Result from '../../Class/Result';
import Vector from '../../Class/Vector';

describe('New Vector tests', () => {
  it('throws error if data not an array', () => {
    const func = () => new Matrix('a string');
    expect(func).toThrow(new Error(Message.vector.notArray));
  });
  it('throws error if data array is empty', () => {
    const func = () => new Matrix([]);
    expect(func).toThrow(new Error(Message.vector.dataArrayIsEmpty));
  });
  it('throws error if data not consist of numbers nor a floats', () => {
    const func = () => new Matrix([1, 1.3, 'a string', 9]);
    expect(func).toThrow(new Error(Message.vector.notNumberOrFloat + Result.dataPrefix() + 'a string'));
  });
  it('creates vector', () => {
    const data = [1, 1.3, 9];
    const vector = new Matrix(data, true);

    // dimension
    expect(vector.getDimension()).toBe(data.length);

    // rowVector
    expect(vector.isRowVector()).toBe(true);

    // size
    const dataSize = new Matrix([1, 3], true);
    expect(vector.getSize()).toMatchObject(dataSize);

    // get
    const func = () => {
      const vector = new Matrix(data);
      vector.get(4);
    };
    expect(func).toThrow(new Error(Message.vector.outOfBound));
    expect(vector.get(1)).toBe(data[1]);
  });
});

describe('Check Matrix', () => {
  it('throws error if data not consist of numbers nor floats', () => {
    let data = [[1, 2], [3, 'a string 1']];
    const func = () => new Matrix(data);
    expect(func).toThrow(new Error(Message.vector.notNumberOrFloat + Result.dataPrefix() + 'a string 1'));
  });
  it('is row dimensions match', () => {
    let data = [[1, 2], [3, 4]];
    let matrix = new Matrix(data);
    expect(matrix.isValidMatrixRowDimension()).toBe(true);

    data = [[1, 2], [3, 4, 5], [1, 3]];
    let func = () => new Matrix(data);
    expect(func).toThrow(new Error(Message.matrix.rowDimensionNotMatch + Result.dataPrefix() + [3, 4, 5]));
  });
});