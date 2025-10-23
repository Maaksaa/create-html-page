export function cleanString(str: string): string {
  return str
    .replace(/^[\s\x00-\x1F]+|[\s\x00-\x1F]+$/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
