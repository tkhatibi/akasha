export function withoutEmptyValues<T = never>(value: T): T | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  } else if (value instanceof Array) {
    const array = value.map(withoutEmptyValues).filter((e) => e !== undefined);
    return array.length > 0 ? (array as T) : undefined;
  } else if (typeof value === "object") {
    const obj = Object.keys(value).reduce(
      (temp, key) => ({
        ...temp,
        [key]: withoutEmptyValues(value[key as keyof T]),
      }),
      {}
    );
    return Object.values(obj).some((e) => e !== undefined)
      ? (obj as T)
      : undefined;
  } else {
    return value;
  }
}
