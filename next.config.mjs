/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The floating dev-mode indicator ("N" logo, bottom-left) is Next.js's
  // own dev toolbar - local-dev-only chrome, never shown in production,
  // not something in our code. Disabled here anyway since it's been
  // flagged as confusing to look at during review.
  devIndicators: false,
}

export default nextConfig
