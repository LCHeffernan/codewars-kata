const {
  monkeyCount,
  maps,
  removeChar,
  number
} = require('../8kyuKatas');

describe('monkeyCount', () => {
  it('adds the numbers 1 to n to an array', () => {
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5]);
    expect(monkeyCount(8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('maps', () => {
  it('returns the array elements doubled', () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6]);
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8]); 
  });
});

describe('removeChar', () => {
  it('remove the first and last character from a string', () => {
    expect(removeChar('eloquent')).toEqual('loquen');
    expect(removeChar('country')).toEqual('ountr');
  });
});

describe('number' , () => {
  it('finds the total number of people on the bus', () => {
    expect(number([[10,0],[3,5],[5,8]])).toEqual(5);
    expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17);
  })
});