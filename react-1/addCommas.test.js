const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("works with 1 digit number", () => {
    expect(addCommas(6)).toEqual("6");
  });
  test("works with 3 digit number", () => {
    expect(addCommas(123)).toEqual("123");
  });
  test("works with 4 digit number", () => {
    expect(addCommas(1234)).toEqual("1,234");
  });
  test("works with 7 digit number", () => {
    expect(addCommas(1000000)).toEqual("1,000,000");
  });
  test("works with 10 digit number", () => {
    expect(addCommas(1234567890)).toEqual("1,234,567,890");
  });
  test("works with 4 digit negative number", () => {
    expect(addCommas(-2345)).toEqual("-2,345");
  });
  test("works with 5 digit number with decimals", () => {
    expect(addCommas(-45000.65)).toEqual("-45,000.65");
  });
  test("works with 7 digit number with decimals", () => {
    expect(addCommas(-2345000.65)).toEqual("-2,345,000.65");
  });
});
