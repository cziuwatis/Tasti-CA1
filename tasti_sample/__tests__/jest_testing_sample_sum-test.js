const sum = require('../jest_testing_sample_sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
//https://jestjs.io/docs/getting-started