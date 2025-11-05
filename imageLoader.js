/**
 * Custom image loader for Next.js static export with GitHub Pages basePath
 * This automatically prepends the basePath to relative image paths
 */
export default function imageLoader({ src }) {
  // basePath for GitHub Pages - matches next.config.js
  // cSpell:ignore synirgy
  const basePath = process.env.NODE_ENV === 'production' ? '/synirgy-workshop.github.io' : ''

  // Don't modify external URLs (CDN images, etc.)
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src
  }

  // Remove leading slash if present to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src

  // In production: prepend basePath with leading slash
  // In development: return path without leading slash (relative to public/)
  return basePath ? `${basePath}/${cleanSrc}` : cleanSrc
}
