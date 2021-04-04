export function detectWebP() {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // Was able or not to get WebP representation.
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}
