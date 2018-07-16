import sum from './sum.js';
import createObj from './createObj';

describe('Sum',() => {
  it("adds 1 and 3 to get 4",() => {
    expect(sum(1,3)).toBe(4);
  });
});


test('Truthiness',() => {
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();
});


describe('createObj',()=> {
  it("['a','b'],[1,2] => {a: 1, b: 2}",() => {
    expect(createObj(['a','b'],[1,2])).toEqual({a: 1,b: 2});
  });
});
