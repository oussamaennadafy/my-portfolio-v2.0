import { Header } from '@/components/Header'
import clsx from 'clsx'
import { Inter, Lexend, Gochi_Hand } from 'next/font/google'
import '@/styles/globals.css'
import { ToastSlot } from '@/components/common/toasts'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: {
    template: '%s - oussama ennadafy',
    default:
      'oussama - Developer, freelancer, and general technology enthusiast',
  },
}

export default function RootLayout({ children }) {
  return (
    <html className='dark' lang="en">
      <body
        className={clsx(
          'font-sans',
          inter.variable,
          lexend.variable,
          gochiHand.variable,
          "bg-white dark:bg-gray-950"
        )}
      >
        <ToastSlot />
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  )
}
