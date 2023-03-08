const { generateQrCodeLink } = require("../dist/qrcode");

describe("generateQrCodeLink", () => {
  it("should return undefined if input was undefined", () =>
    expect(generateQrCodeLink(undefined)).toBeUndefined());

  it("should return undefined if input was null", () =>
    expect(generateQrCodeLink(null)).toBeUndefined());

  it("should return undefined if input was empty string", () =>
    expect(generateQrCodeLink("")).toBeUndefined());

  it("should return correct link when input is a valid string", () =>
    expect(generateQrCodeLink("https://testvalue.com")).toEqual(
      "https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=https%3A%2F%2Ftestvalue.com"
    ));

  it("should return correct link when custom size is changed", () =>
    expect(generateQrCodeLink("test", 300)).toEqual(
      "https://chart.googleapis.com/chart?chs=300x300&chld=L|2&cht=qr&chl=test"
    ));
});
