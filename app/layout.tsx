import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  title: '庞燃 | AI研究助理',
  description:
    '智能科学与技术专业。致力于将前沿 RAG 架构与自动化技术落地为业务生产力。',
  openGraph: {
    title: '庞燃 | AI研究助理',
    description:
      '智能科学与技术专业。致力于将前沿 RAG 架构与自动化技术落地为业务生产力。',
    url: baseUrl,
    siteName: '庞燃的个人主页',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-CN"
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased">
        <main className="page-shell mx-auto w-full max-w-4xl px-4 sm:px-6 pt-10">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}

