# `@akashalib/use-qr-code`

React hook to generate QR code link.

## Install

```bash
npm install @akashalib/use-qr-code
# OR
yarn add @akashalib/use-qr-code
```

## Usage

```tsx
import { useQrCode } from "@akashalib/use-qr-code";

const Example = ({ size = 400 }) => {
  const qrCodeSrc = useQrCode("https://something.com", size)

  return <img src={qrCodeSrc} width={size} height={size} />
}
```
