import Matrix from '../../Class/Matrix';
import Message from '../../Class/Message';
import Result from '../../Class/Result';
import Vector from '../../Class/Vector';

describe('New Matrix tests', () => {
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
    let data = [1, 1.3, 9];
    let vector = new Matrix(data, true);

    // dimension
    expect(vector.getDimension()).toBe(data.length);

    // size in case of vector
    let dataSize = new Matrix([1, 3], true);
    expect(vector.getSize()).toMatchObject(dataSize);

    // get
    const func = () => {
      const vector = new Matrix(data);
      vector.get(4);
    };
    expect(func).toThrow(new Error(Message.vector.outOfBound));
    expect(vector.get(1)).toBe(data[1]);

    // size for 2 dimensional matrix
    data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let matrix = new Matrix(data);
    expect(matrix.getNumRows()).toBe(3);
    expect(matrix.getNumColumns()).toBe(3);

    dataSize = new Matrix([3, 3], true);
    expect(matrix.getSize()).toMatchObject(dataSize);
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

describe('Identity Matrix', () => {
  it('creates a 3x3 identity matrix', () => {
    let data = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    let matrix = new Matrix(data);
    expect(Matrix.identity(3)).toMatchObject(matrix);
  });

  it('throws error if size is not a positive integer', () => {
    let func = () => Matrix.identity(-3);
    expect(func).toThrow(new Error(Message.matrix.invalidSize));
    func = () => Matrix.identity(2.8);
    expect(func).toThrow(new Error(Message.matrix.invalidSize));
  });
});

describe('Matrix with value', () => {
  it('throws error if rows or columns is not positive', () => {
    let func = () => Matrix.matrixWithValue(-9, 3, -3);
    expect(func).toThrow(new Error(Message.matrix.invalidRows));
    func = () => Matrix.matrixWithValue(0, -4, -3);
    expect(func).toThrow(new Error(Message.matrix.invalidColumns));
  });
  it('throws error if both rows and columns are 0', () => {
    let func = () => Matrix.matrixWithValue(0, 0, -3);
    expect(func).toThrow(new Error(Message.matrix.bothRowsAndColumnsZero));
  });
  it('creates a 2x3 zero matrix', () => {
    let data = [[0, 0, 0], [0, 0, 0]];
    let matrix = new Matrix(data);
    expect(Matrix.matrixWithValue(2, 3, 0)).toMatchObject(matrix);
  });
});

describe('Check if data is a Matrix', () => {
  it('is a Matrix', () => {
    let data = [[0, 0, 0], [0, 0, 0]];
    let matrix = new Matrix(data);
    expect(Matrix.isMatrix(2)).toBe(false);
    expect(Matrix.isMatrix(matrix)).toBe(true);
  });
});