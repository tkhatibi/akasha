"use strict";

const { withoutEmptyValues } = require("../dist/without-empty-values");

describe("withoutEmptyValues", () => {
  it("should return undefined if input was undefined", () =>
    expect(withoutEmptyValues(undefined)).toBeUndefined());

  it("should return undefined if input was null", () =>
    expect(withoutEmptyValues(null)).toBeUndefined());

  it("should return undefined if input was empty string", () =>
    expect(withoutEmptyValues("")).toBeUndefined());

  it("should return undefined if input was {}", () =>
    expect(withoutEmptyValues({})).toBeUndefined());

  it("should return undefined if input was []", () =>
    expect(withoutEmptyValues([])).toBeUndefined());

  it("should return [1, 'a'] if input was [1, null, 'a', '']", () =>
    expect(withoutEmptyValues([1, null, "a", ""])).toEqual([1, "a"]));

  it("should return {a: 1, c: 'c' } if input was {a: 1, b: null, c: 'c', d: ''}", () =>
    expect(withoutEmptyValues({ a: 1, b: null, c: "c", d: "" })).toEqual({
      a: 1,
      c: "c",
    }));

  it("should return undefined if input was {a: null, b: '', c: { ca: [null, '', undefined] }, d: [] }", () =>
    expect(
      withoutEmptyValues({
        a: null,
        b: "",
        c: { ca: [null, "", undefined] },
        d: [],
      })
    ).toBeUndefined());

  it("should return {c: { ca: [1]} } if input was {a: null, b: '', c: { ca: [null, 1, '', undefined] }, d: [] }", () =>
    expect(
      withoutEmptyValues({
        a: null,
        b: "",
        c: { ca: [null, 1, "", undefined] },
        d: [],
      })
    ).toEqual({ c: { ca: [1] } }));
});
