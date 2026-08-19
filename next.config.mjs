/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - this site has no API routes, middleware, or server
  // actions, so it builds to plain HTML/CSS/JS and can be served by nginx
  // instead of running a Node server. See infra/Dockerfile.
  output: 'export',
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
