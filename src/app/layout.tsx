import { Inter } from 'next/font/google'
import './globals.css'
import { cn, constructMetadata } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/components/providers'
import { Toaster } from "sonner";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn("relative h-full font-sans antialiased",inter.className)}>
        <main className='relatiev flex flex-col min-h-screen'>

          <Providers>
            <Navbar />
            <div className='flex-grow flex-col-1'>
              {children}
            </div>
            <Footer />
          </Providers>
        </main>

        <Toaster position='top-center' richColors/>
      </body>
    </html>
  )
}
