import sum from "#/rangeSum";

it("rangeSum Test", (): void => {
  expect(sum([1], [1], 0)).toBe(0);
  expect(sum([1, 11], [1, 2], 20)).toBe(30);
  expect(sum([1, 11, 21], [1, 2, 3], 30)).toBe(60);
  expect(sum([1, 11], [1, 2], 100)).toBe(190);
  expect(sum([1, 1001, 5001], [1, 2, 3], 5001)).toBe(9003);
});
