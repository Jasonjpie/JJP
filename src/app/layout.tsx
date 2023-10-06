import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JJP Construction Inc',
  description: 'Your Trusted Construction Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type='image/svg+xml' href="/Icons/jjp-small-logo.svg" />
      </head>
      <body className='max-w-auto mx-auto'>{children}</body>
    </html>
  )
}
