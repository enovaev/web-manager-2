import { calculate } from './calc';

describe('test', () => {
  test('dfs', () => {
    expect(calculate(5, 5)).toEqual(10);
  });
});
