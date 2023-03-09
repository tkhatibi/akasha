const React = require("react");
const { render, screen } = require("@testing-library/react");
const each = require("jest-each").default;
const { QrCode } = require("../dist/react-qr-code");

describe("QrCode", () => {
  each([[undefined], [null], [""]]).it(
    "should not to be in the document when src prop is %s",
    (src) => {
      render(<QrCode src={src} />);
      const baseElement = screen.queryByRole("img");
      // eslint-disable-next-line jest/no-standalone-expect
      expect(baseElement).not.toBeInTheDocument();
    }
  );

  it("should return correct link when input is a valid string", () => {
    render(<QrCode src="https://testsrc.com" />);
    const baseElement = screen.getByRole("img");
    expect(baseElement).toHaveAttribute(
      "src",
      "https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=https%3A%2F%2Ftestsrc.com"
    );
  });

  it("should return correct link when input is a valid string and custom size is passed", () => {
    render(<QrCode src="test" size={300} />);
    const baseElement = screen.getByRole("img");
    expect(baseElement).toHaveAttribute(
      "src",
      "https://chart.googleapis.com/chart?chs=300x300&chld=L|2&cht=qr&chl=test"
    );
  });
});
