import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/Navbar'

export const metadata: Metadata = {
  title: 'Zaprolink',
  description: 'Cyfrowe zaproszenia online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
