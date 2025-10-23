import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Classics Electronics Eldoret - Quality Electronics at Best Prices',
  description: 'Shop the latest smartphones, laptops, TVs & electronics in Eldoret, Kenya. Samsung, Tecno, HP & more. WhatsApp orders, fast delivery. Best prices guaranteed!',
  keywords: 'electronics Eldoret, smartphones Kenya, laptops Eldoret, Samsung Tecno, electronics shop Kenya, phone accessories, TV Eldoret',
  authors: [{ name: 'Classics Electronics' }],
  creator: 'Classics Electronics',
  publisher: 'Classics Electronics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://classics-electronics-eldoret.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Classics Electronics Eldoret - Quality Electronics at Best Prices',
    description: 'Shop the latest smartphones, laptops, TVs & electronics in Eldoret, Kenya. WhatsApp orders, fast delivery. Best prices guaranteed!',
    url: 'https://classics-electronics-eldoret.netlify.app',
    siteName: 'Classics Electronics',
    locale: 'en_KE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Classics Electronics - Your trusted electronics store in Eldoret',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classics Electronics Eldoret - Quality Electronics at Best Prices',
    description: 'Shop the latest smartphones, laptops, TVs & electronics in Eldoret, Kenya. WhatsApp orders, fast delivery.',
    images: ['/og-image.jpg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Classics Electronics",
    "description": "Quality electronics store in Eldoret, Kenya specializing in smartphones, laptops, TVs and accessories",
    "url": "https://classics-electronics-eldoret.netlify.app",
    "telephone": "+254799245140",
    "email": "kerrym494@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Eldoret",
      "addressCountry": "Kenya"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.5143",
      "longitude": "35.2697"
    },
    "openingHours": [
      "Mo-Sa 08:00-20:00",
      "Su 10:00-18:00"
    ],
    "priceRange": "KSh 800 - KSh 65,000",
    "paymentAccepted": ["Cash", "M-Pesa", "Bank Transfer"],
    "currenciesAccepted": "KES"
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
