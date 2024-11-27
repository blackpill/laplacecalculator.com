import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { BASE_URL } from './config'
import 'katex/dist/katex.min.css'; // 引入 KaTeX 样式

export const metadata: Metadata = {
  title: 'Laplace Transform Calculator - Free',
  description: 'Fast and accurate Laplace transform & inverse Laplace transform calculations for engineering and mathematics',
  alternates: {
    canonical: `${BASE_URL}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

