# `@akashalib/qrcode`

Helper function to generate QR code link.

## Install

```bash
npm install @akashalib/qrcode
# OR
yarn add @akashalib/qrcode
```

## Usage

```typescript
import { generateQrCodeLink } from "@akashalib/qrcode";

console.log(generateQrCodeLink(undefined)); // undefined

console.log(generateQrCodeLink(null)); // undefined

console.log(generateQrCodeLink("")); // undefined

console.log(generateQrCodeLink("something")) // "https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=something"

console.log(generateQrCodeLink("https://something.com", /* size */ 400)) // "https://chart.googleapis.com/chart?chs=400x400&chld=L|2&cht=qr&chl=https%3A%2F%2Fsomething.com"
```
