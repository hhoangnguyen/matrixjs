import Message from '../../Class/Message';
import Result from '../../Class/Result';
import Vector from '../../Class/Vector';

describe('New Vector tests', () => {
  it('throws error if data not an array', () => {
    const func = () => new Vector('a string');
    expect(func).toThrow(new Error(Message.vector.notArray));
  });
  it('throws error if data array is empty', () => {
    const func = () => new Vector([]);
    expect(func).toThrow(new Error(Message.vector.dataArrayIsEmpty));
  });
  it('throws error if data not consist of numbers nor a floats', () => {
    const func = () => new Vector([1, 1.3, 'a string', 9]);
    expect(func).toThrow(new Error(Message.vector.notNumberOrFloat + Result.dataPrefix() + 'a string'));
  });
  it('creates vector', () => {
    const data = [1, 1.3, 9];
    const vector = new Vector(data);

    // dimension
    expect(vector.getDimension()).toBe(data.length);

    // rowVector
    expect(vector.isRowVector()).toBe(false);
    expect(vector.setRowVector(true).isRowVector()).toBe(true);

    // size
    const dataSize = new Vector([1, 3], true);
    expect(vector.getSize()).toMatchObject(dataSize);

    // get
    const func = () => {
      const vector = new Vector(data);
      vector.get(4);
    };
    expect(func).toThrow(new Error(Message.vector.outOfBound));
    expect(vector.get(1)).toBe(data[1]);
  });
});