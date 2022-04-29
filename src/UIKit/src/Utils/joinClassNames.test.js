import { joinClassNames } from '.';

const testData = [
  { test: undefined, result: '' },
  { test: null, result: '' },
  { test: [], result: '' },
  {
    test: ['class-one', { 'class-two': true }, 'class-three'],
    result: 'class-one class-two class-three',
  },
  {
    test: ['class-one', { 'class-two': false }, 'class-three'],
    result: 'class-one class-three',
  },
  {
    test: ['class-one', 'class-two', { 'class-three': false }],
    result: 'class-one class-two',
  },
  {
    test: [
      'class-one',
      'class-two',
      { 'class-three': true, 'class-four': true },
    ],
    result: 'class-one class-two class-three class-four',
  },
];

describe('Функция JoinClassNames', () => {
  testData.forEach(({ test: testItem, result }) => {
    test(`с параметром ${JSON.stringify(testItem)}, должна вернуть "${
      result || 'пустую строку'
    }"`, () => {
      expect(joinClassNames(testItem)).toBe(result);
    });
  });
});
