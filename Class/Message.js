export default class Message {

}

Message.vector = {
  dataArrayIsEmpty: 'Data array is empty',
  notArray: 'Data must be an array',
  notNumberOrFloat: 'Data must be an array or 2-dimensional array of numbers or floats',
  outOfBound: 'Out of bound',
  vector: 'Vector'
};

Message.matrix = {
  bothRowsAndColumnsZero: 'Both rows and columns are 0',
  invalidSize: 'Invalid size, must be a positive integer',
  invalidRows: 'Invalid rows, must be an integer',
  invalidColumns: 'Invalid columns, must be an integer',
  matrix: 'Matrix',
  rowDimensionNotMatch: 'Row dimensions not match'
};

Message.common = {
  dataMustBeMatrixOrVector: 'Data must be Matrix or Vector',
  notSameDimensions: 'Matrix must have same matching number of rows and columns'
};