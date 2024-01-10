import type { Metadata } from 'next';
import { ibm, vt323, start_2p } from './ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Arasawa\'s website',
  description: 'Hobbies, projects, and designs by Alex Arasawa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  )
}
