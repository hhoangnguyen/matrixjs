import Util from '../../Class/Util';

describe('Util tests', () => {
  it('is Integer', () => {
    expect(Util.isInt(7)).toBe(true);
    expect(Util.isInt(7.1)).toBe(false);
    expect(Util.isInt('a string')).toBe(false);
    expect(Util.isInt(Number(7))).toBe(true);
    expect(Util.isInt(Number(7.1))).toBe(false);
  });
  it('is Float', () => {
    expect(Util.isFloat(7)).toBe(false);
    expect(Util.isFloat(7.1)).toBe(true);
    expect(Util.isFloat('a string')).toBe(false);
    expect(Util.isFloat(Number(7))).toBe(false);
    expect(Util.isFloat(Number(7.1))).toBe(true);
  });
  it('is Array', () => {
    expect(Util.isArray(7)).toBe(false);
    expect(Util.isArray([1, 2])).toBe(true);
    expect(Util.isArray([])).toBe(true);
    expect(Util.isArray({})).toBe(false);
  });
  it('is Array empty', () => {
    expect(Util.isArrayEmpty([1, 2])).toBe(false);
    expect(Util.isArrayEmpty([])).toBe(true);
  });
  it('is valid matrix data', () => {
    expect(Util.isValidMatrixData([1, 2])).toBe(true);
    expect(Util.isValidMatrixData([1, 'a string', 2])).toBe(false);
    expect(Util.isValidMatrixData([])).toBe(true);
    expect(Util.isValidMatrixData({})).toBe(false);
  });
});