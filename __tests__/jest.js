import Test from '../Sample/Test';

describe('jest test', () => {
  const test = new Test();
  it('adds 1 + 2 to equal 3', () => {
    expect(test.sum(1, 2)).toBe(3);
  });
});