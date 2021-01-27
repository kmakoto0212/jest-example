import { callErrorFun, callErrorAsyncFun } from "#/error";
describe("error test", () => {
  it("throw New error", () => {
    expect(callErrorFun).toThrow();
  });

  it("async throw error", () => {
    expect(callErrorAsyncFun()).rejects.toThrow();
  });
});
