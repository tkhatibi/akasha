const { renderHook } = require("@testing-library/react-hooks");
const { useQrCode } = require("../dist/use-qr-code");

describe("useQrCode", () => {
  it("should return undefined if input was undefined", () => {
    const { result } = renderHook(() => useQrCode(undefined));
    expect(result.current).toBeUndefined();
  });

  it("should return undefined if input was null", () => {
    const { result } = renderHook(() => useQrCode(null));
    expect(result.current).toBeUndefined();
  });

  it("should return undefined if input was empty string", () => {
    const { result } = renderHook(() => useQrCode(""));
    expect(result.current).toBeUndefined();
  });

  it("should return correct link when input is a valid string", () => {
    const { result } = renderHook(() => useQrCode("https://testvalue.com"));
    expect(result.current).toEqual(
      "https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=https%3A%2F%2Ftestvalue.com"
    );
  });

  it("should return correct link when custom size is changed", () => {
    const { result } = renderHook(() => useQrCode("test", 300));
    expect(result.current).toEqual(
      "https://chart.googleapis.com/chart?chs=300x300&chld=L|2&cht=qr&chl=test"
    );
  });
});
