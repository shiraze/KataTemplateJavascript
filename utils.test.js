import { escapeDNPartQuoted } from "./utils";

describe("escapeDNPartQuoted", () => {
  it("should return input if no special chars", () => {
    expect(escapeDNPartQuoted("simple string")).toBe("simple string");
  });

  it("should quote simple DNs that have special chars", () => {
    expect(escapeDNPartQuoted("with a comma ,")).toBe('"with a comma ,"');
  });

  it("should quote and escape DNs that have double quotes", () => {
    expect(escapeDNPartQuoted('with a "quote"')).toBe('"with a \\"quote\\""');
  });

  it("should quote and escape DNs that have escape chars", () => {
    expect(escapeDNPartQuoted('with an \\escape\\')).toBe('"with an \\\\escape\\\\"');
  });

  it("should handle DNs that have escape quotes", () => {
    expect(escapeDNPartQuoted('with an \"escape\"')).toBe('"with an \\\"escape\\\""');
  });
});
