import { doSomething } from "./utils";

describe("soSomething", () => {
  it("should return undefined", () => {
    expect(doSomething()).toBeUndefined();
  });
});
