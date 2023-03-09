import type { ComponentPropsWithRef, ElementType } from "react";
import React from "react";
import { useQrCode } from "@akashalib/use-qr-code";

export interface QrCodeProps<T extends ElementType> {
  as?: T;
  value?: string | null;
  size?: number | null;
  alt?: string;
}

export function QrCode<T extends ElementType = "img">({
  as,
  value,
  size,
  alt,
  ...props
}: QrCodeProps<T> & Omit<ComponentPropsWithRef<T>, keyof QrCodeProps<T>>) {
  const Component = as || "img";
  const qrCodeSrc = useQrCode(value, size || 225);
  return !qrCodeSrc ? null : <Component alt={alt} src={qrCodeSrc} {...props} />;
}
