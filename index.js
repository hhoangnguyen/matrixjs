// hot reload
module.hot.accept();

// es6 import
import Test from './Sample/Test';
import Matrix from './Class/Matrix';

// new test object
new Test();

const data = [[1, 2], [3, 4, 7]];
const matrix = new Matrix(data);