import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DreadBike - Unleash the Fear. Ride Dread.',
  description:
    "Professional motorcycle tuning, custom builds, and performance upgrades. Transform your bike into a beast that commands the road with DreadBike's expert craftsmanship.",
  keywords: [
    'motorcycle tuning',
    'custom bikes',
    'performance upgrades',
    'bike modification',
    'DreadBike',
  ],
  authors: [{ name: 'DreadBike' }],
  creator: 'DreadBike',
  publisher: 'DreadBike',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dreadbike.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-96x96.svg', sizes: '96x96', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon-57x57.svg', sizes: '57x57' },
      { url: '/apple-touch-icon-60x60.svg', sizes: '60x60' },
      { url: '/apple-touch-icon-72x72.svg', sizes: '72x72' },
      { url: '/apple-touch-icon-76x76.svg', sizes: '76x76' },
      { url: '/apple-touch-icon-114x114.svg', sizes: '114x114' },
      { url: '/apple-touch-icon-120x120.svg', sizes: '120x120' },
      { url: '/apple-touch-icon-144x144.svg', sizes: '144x144' },
      { url: '/apple-touch-icon-152x152.svg', sizes: '152x152' },
      { url: '/apple-touch-icon-180x180.svg', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ffff00' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'DreadBike - Unleash the Fear. Ride Dread.',
    description:
      'Professional motorcycle tuning, custom builds, and performance upgrades. Transform your bike into a beast that commands the road.',
    url: 'https://dreadbike.com',
    siteName: 'DreadBike',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DreadBike - Professional Motorcycle Tuning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreadBike - Unleash the Fear. Ride Dread.',
    description:
      'Professional motorcycle tuning, custom builds, and performance upgrades.',
    images: ['/images/og-image.png'],
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffff00' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1c1c' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Additional favicon meta tags for better compatibility */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon-180x180.svg' />
        <meta name='msapplication-TileColor' content='#1c1c1c' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased prevent-horizontal-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
