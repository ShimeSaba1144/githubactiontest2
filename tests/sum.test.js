// sum.test.js
const sum = require('./sum'); // テスト対象のモジュールをインポートする

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // テストコードchmod +x node_modules/.bin/jest