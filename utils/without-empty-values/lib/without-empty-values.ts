export function withoutEmptyValues<T extends any>(value: T): T {
  if (value === undefined || value === null || value === '') {
    return undefined as T;
  } else if (value instanceof Array) {
    const array = value.map(withoutEmptyValues).filter((e) => e !== undefined);
    return (array.length > 0 ? array : undefined) as T;
  } else if (typeof value === 'object') {
    const obj = Object.keys(value).reduce(
      (temp, key) => ({
        ...temp,
        // @ts-ignore
        [key]: withoutEmptyValues(value[key]),
      }),
      {}
    );
    return (Object.values(obj).some((e) => e !== undefined) ? obj : undefined) as T;
  } else {
    return value;
  }
};
