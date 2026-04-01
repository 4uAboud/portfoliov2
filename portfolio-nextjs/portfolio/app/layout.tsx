import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdullah AlJuhani — UX Researcher',
  description: 'UX Researcher turning complex user behavior into clear product decisions. Based in Saudi Arabia.',
  metadataBase: new URL('https://Abdullah.AlJuhani.com'),
  openGraph: {
    title: 'Abdullah AlJuhani — UX Researcher',
    description: 'UX Researcher turning complex user behavior into clear product decisions.',
    url: 'https://Abdullah.AlJuhani.com',
    siteName: 'Abdullah AlJuhani',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah AlJuhani — UX Researcher',
    description: 'UX Researcher turning complex user behavior into clear product decisions.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
