import { useMemo } from "react";
import { generateQrCodeLink } from "@akashalib/qrcode";

export function useQrCode(
  value?: string | null,
  size = 225
): string | undefined {
  return useMemo(() => generateQrCodeLink(value, size), [value, size]);
}
