const { it, expect } = require('@jest/globals');
const {
    ballCollector,
    countDevelopers,
    XO,
    splitInParts
  } = require('../7kyuKatas');

describe("ballCollector", () =>{
    it('Returns the total weight of the tennis balls', () => {
        expect(ballCollector([58, 68, 62, 69, 58])).toEqual({ weight: 116 });
        expect(ballCollector([60,66,71,68,62])).toEqual({ weight: 0 });
      });
  });


//   const assert = require('chai').assert;
  describe("Sample tests", () => {
      it("should find JavaScript developers from Europe", () => {
    const list1 = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];
    expect(countDevelopers(list1)).toEqual(1);
    });
  });

describe("XO", () =>{
    it('Returns true if same numbers of Xs as there are Os, otherwise returns false', () => {
        expect(XO("xxOo")).toEqual(true);
        expect(XO("xxxm")).toEqual(false);
      });
  });

  describe("splitInParts", () => {
    it("should split string into parts of length partLength", () => {
    expect(splitInParts("supercalifragilisticexpialidocious", 3)).toEqual("sup erc ali fra gil ist ice xpi ali doc iou s")
    expect(splitInParts("HelloKata", 1)).toEqual("H e l l o K a t a")
    });
  });