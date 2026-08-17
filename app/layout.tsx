import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cyfamod SMS | School Management System for Nigerian Schools',
  description: 'Cyfamod SMS helps Nigerian schools manage student records, attendance, results, fees, staff, classes, and communication in one connected platform.',
  keywords: ['school management system Nigeria', 'school management software', 'student result management', 'school fees management'],
  generator: 'Cyfamod Technologies',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d1b3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('cyfamod_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('theme-light');
                  } else {
                    document.documentElement.classList.remove('theme-light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
