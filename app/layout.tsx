import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Silent Architect | Strategic Exit Blueprint',
  description: 'A blueprint for mental sovereignty and cognitive clarity in a world designed for distraction.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://the-silent-architect.vercel.app/" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden bg-[#0a0a0a] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  )
}
