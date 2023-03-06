# `@akasha/without-empty-values`

Helper function to return undefined instead of null, empty string, empty array or object with empty values. It also emits undefined elements from an array and does all these things recursively.

## Install

```bash
npm install @akasha/without-empty-values
# OR
yarn add @akasha/without-empty-values
```

## Usage

```typescript
import { withoutEmptyValues } from "@akasha/without-empty-values";

console.log(withoutEmptyValues(undefined)); // undefined
console.log(withoutEmptyValues(null)); // undefined
console.log(withoutEmptyValues("")); // undefined
console.log(withoutEmptyValues({})); // undefined
console.log(withoutEmptyValues([])); // undefined
console.log(withoutEmptyValues([1, null, "a", ""])); // [1, "a"]
console.log(
  withoutEmptyValues({
    a: null,
    b: "",
    c: { ca: [null, 1, "", undefined] },
    d: []
  })
); // {c: { ca: [1]} }
console.log(
  withoutEmptyValues({
    a: null,
    b: "",
    c: { ca: [null, "", undefined] },
    d: []
  })
); // undefined
```
