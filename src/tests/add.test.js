
const add = (a, b) => a + b;

describe("Addition function", () => {
  test("should return the correct sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });
});