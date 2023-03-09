# `@akashalib/react-qr-code`

React component to display QR code.

## Install

```bash
npm install @akashalib/react-qr-code
# OR
yarn add @akashalib/react-qr-code
```

## Usage

```tsx
import { QrCode } from "@akashalib/react-qr-code";

const Example = ({ value = "https://example.com", size = 400 }) => {
  // By default it renders an "img" tag and accepts all props of "img"
  return <QrCode value={value} size={size} />;
}
```

If you want to use next `Image` instead of default `img` tag:

```tsx
import { QrCode } from "@akashalib/react-qr-code";
import Image from "@next/image";

const Example = ({ value = "https://example.com", size = 400 }) => {
  // Now you can pass props of next Image to it
  return <QrCode as={Image} value={value} size={size} layout="fill" />;
}
```
