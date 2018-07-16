const sum = require('./sum');


describe('Sum',() => {
  it("adds 1 and 3 to get 4",() => {
    expect(sum(1,3)).toBe(4);
  });
});
