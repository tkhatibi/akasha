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

const Example = ({ src = "https://example.com", size = 400 }) => {
  // By default it renders an "img" tag and accepts all props of "img"
  return <QrCode src={src} size={size} />;
}
```

#### Next Image

If you want to use next `Image` instead of default `img` tag:

```tsx
import { QrCode } from "@akashalib/react-qr-code";
import Image from "next/image";

const Example = ({ src = "https://example.com", size = 400 }) => {
  // Now you can pass props of next Image to it
  return <QrCode as={Image} src={src} size={size} layout="fill" />;
}
```

But keep in mind that you need to add image domain to your `next.config.js`:

```javascript
// next.config.js

module.exports = {
  images: {
    domains: ["chart.googleapis.com"],
  },
}
```
