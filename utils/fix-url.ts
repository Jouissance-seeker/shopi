export function fixUrl(url: string): string {
  return url.replace(/\s+/g, '-');
}
