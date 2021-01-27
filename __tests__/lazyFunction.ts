//This is async function
import lazyFunction from "#/lazyFunction";

describe("Promise", () => {
  it("use Promise", () => {
    lazyFunction().then((result) => {
      expect(result).toBe("hello!");
    });
  });
});

describe("async/await", () => {
  describe("beforeEach in async/await", () => {
    let result: string;
    beforeEach(async () => {
      result = await lazyFunction();
    });

    it("result is equal", () => {
      expect(result).toBe("hello!");
    });
  });

  describe("inner async/await", () => {
    it("result is equal", async () => {
      const result = await lazyFunction();
      expect(result).toBe("hello!");
    });

    it("use resolves", () => {
      expect(lazyFunction()).resolves.toBe("hello!");
    });
  });
});
