export function resolveImagePath(path) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // Allow values like "images/foo.png" or just "foo.png" stored under public/images
  return `/images/${path.replace(/^\/?images\//, '')}`;
}
