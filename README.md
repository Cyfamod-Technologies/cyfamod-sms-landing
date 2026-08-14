# Cyfamod SMS Marketing Site

![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-blue?style=for-the-badge&logo=pnpm&logoColor=white)

> Production-facing marketing site for Cyfamod SMS, a modern school management system designed for schools in Nigeria.

---

## 📖 Table of Contents
- [Cyfamod SMS Marketing Site](#cyfamod-sms-marketing-site)
  - [📖 Table of Contents](#-table-of-contents)
  - [🚀 Quick Start](#-quick-start)
  - [🏗️ Project Structure](#-project-structure)
  - [🛠️ Tech Stack & Tooling](#-tech-stack--tooling)
  - [📄 License](#-license)

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/) installed.

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cyfamod-sms-landing-page

# Install dependencies
pnpm install
```

### Development Server
```bash
# Start the local development server on http://localhost:3000
pnpm dev
```

### Production Build
```bash
# Create an optimized production build
pnpm build

# Start the production server
pnpm start
```

## 🏗️ Project Structure

The project uses the **Next.js App Router**. Here are the primary routes and directories:

- **`app/`**: Contains the Next.js application routes.
  - `/` — Main product landing page
  - `/mobile-apps` — Staff and student mobile app status page
  - `/partners` — Referral agent and corporate marketer programme page
  - `/contact` — Contact page
- **`components/`**: Reusable React components (including Shadcn UI components and structural layout components).
- **`public/`**: Static assets.
  - `public/assets/` — Stores images like the `spinner-logo.png` and other branding files.
  - `app/icon.png` — The primary favicon for the site.
- **`lib/`**: Utility functions and shared helpers.

## 🛠️ Tech Stack & Tooling

This project is built for performance and rapid UI iteration:
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** Built using [shadcn/ui](https://ui.shadcn.com/) and `@base-ui/react`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting & Formatting:** ESLint & TypeScript (strict mode)

> **Note for Developers**: When adding new components, try to utilize the existing `shadcn/ui` ecosystem to maintain design consistency.

## 📄 License
Private and Confidential. © Cyfamod Technologies.
