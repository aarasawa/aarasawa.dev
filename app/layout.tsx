import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | aarasawa.dev",
  },
  description: "A new engineer trying to learn how to use some tools.",
  openGraph: {
    title: "aarasawa.dev",
    description: "A new engineer trying to learn how to use some tools.",
    url: "https://aarasawa.dev",
    siteName: "aarasawa.dev",
  },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "Alex Arasawa",
      card: "summary_large_image",
    },
    icons: {
      shortcut: "/favicon.png",
    },
    metadataBase: new URL('https://aarasawa.dev')
};

const loRes28 = localFont({
  src: '../public/fonts/LoRes12OTNarrow.ttf'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={loRes28.className}>{children}</body>
    </html>
  )
}
