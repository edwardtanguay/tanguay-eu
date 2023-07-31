import { Header } from '@/components/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '../AppContext'

const inter = Inter({ subsets: ['latin'] })

const pageTitle = "Edward's Tech Site";

export const metadata: Metadata = {
  title: pageTitle,
  openGraph: {
    title: pageTitle,
    description: 'This is where I keep all my code, links and information about web development.',
    images: ['https://tanguay-eu.vercel.app/images/siteIcon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} bg-slate-800 container mx-auto p-4 text-gray-400`}>
        <AppProvider>
          <>
            <Header />
            {children}
        </>
        </AppProvider>
      </body>
    </html>
  )
}
