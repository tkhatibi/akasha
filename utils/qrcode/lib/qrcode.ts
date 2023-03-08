export function generateQrCodeLink(
  value?: string | null,
  size = 225
): string | undefined {
  if (!value) return;
  const sizeString = `${size}x${size}`;
  const encodedValue = encodeURIComponent(value);
  return `https://chart.googleapis.com/chart?chs=${sizeString}&chld=L|2&cht=qr&chl=${encodedValue}`;
}
