import average from "#/average";

describe("average", (): void => {
  test("average safuty", (): void => {
    expect(average(2, 2, 2)).toBe(2);
    expect(average()).toBe(0);
  });
});
