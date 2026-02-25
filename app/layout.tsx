import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'   // ← dodaj ten import

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
      <body className="flex flex-col min-h-screen">  {/* ← dodaj flex żeby footer był na dole */}
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />   {/* ← dodaj tutaj */}
      </body>
    </html>
  )
}