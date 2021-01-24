import sum from "#/sum";

describe("sum", (): void => {
  test("sum safuty", (): void => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
