import axios from "axios";
import getRequest from "#/httpRequest";

describe("getRequest()", () => {
  let httpRequestGetMock: jest.SpyInstance;

  beforeEach(() => {
    httpRequestGetMock = jest.spyOn(axios, "get");
    httpRequestGetMock.mockResolvedValue({ data: { message: "hello!!" } });
  });

  it("mock Request", async () => {
    const res = await getRequest();
    expect(res.message).toBe("hello!!");
    expect(httpRequestGetMock).toHaveBeenCalledWith("http://localhost:5678");
  });
});
