export default function imageLoader({
  src,
  width,
  quality
}: {
  src: string
  width: number
  quality?: number
}): string {
  // If src is already an absolute URL (http/https) or external, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // Get basePath from environment (set in next.config.js)
  // In production: '/synirgy-workshop.github.io'
  // In development: '' (empty string)
  const basePath = process.env.NODE_ENV === 'production'
    ? '/synirgy-workshop.github.io'
    : ''

  // If src already includes the basePath, return as-is to avoid duplication
  if (basePath && src.startsWith(basePath)) {
    return src
  }

  // Ensure src starts with '/' for proper path resolution
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`

  // Combine basePath with the image src
  return `${basePath}${normalizedSrc}`
}
