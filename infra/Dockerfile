# --- Build stage -----------------------------------------------------------
# This site has no API routes, middleware, or server actions (next.config.mjs
# sets output: 'export'), so `next build` produces plain static HTML/CSS/JS
# in out/ - no Node runtime needed in the final image.
FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10 --activate

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# --- Runtime stage -----------------------------------------------------------
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="Cyfamod SMS Landing Page" \
      org.opencontainers.image.description="Public marketing site for Cyfamod SMS, a school management system"

WORKDIR /usr/share/nginx/html

# Copy custom nginx configuration
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the static export - build/repo metadata never enters the runtime
# image.
COPY --from=builder /app/out/ ./

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
