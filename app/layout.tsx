import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, STIX_Two_Text } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const stixTwoText = STIX_Two_Text({
  variable: '--font-stix-two-text',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Morgan Selbekk',
    template: '%s | Morgan Selbekk',
  },
  description:
    'Designer & Developer living in San Fransisco. Currently running Selbekk Studio.',
  keywords: [
    'Web Development',
    'Web Design',
    'Software Development',
    'AI Development',
    'AI Products',
  ],
  authors: [{ name: 'Morgan Selbekk' }],
  creator: 'Morgan Selbekk',
  publisher: 'Morgan Selbekk',

  metadataBase: new URL('https://www.mselbekk.com'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mselbekk.com',
    title: 'Morgan Selbekk',
    description:
      'Designer & Developer living in San Fransisco. Currently running Selbekk Studio.',
    siteName: 'Morgan Selbekk',
    images: [
      {
        url: 'https://www.mselbekk.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Morgan Selbekk',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Morgan Selbekk',
    description:
      'Designer & Developer living in San Fransisco. Currently running Selbekk Studio.',
    creator: '@mselbekk1',
    images: ['https://www.mselbekk.com/og-image.png'],
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

  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${stixTwoText.variable} antialiased min-h-screen max-w-screen p-4 md:p-6 flex flex-col`}
      >
        <div className=''>{children}</div>
        {/* Desktop: fixed rotated text */}
        <div className='hidden md:block fixed bottom-88 right-4 -rotate-90 origin-bottom-right text-5xl text-muted opacity-20 font-stix-two-text'>
          Morgan Selbekk
        </div>
        {/* Mobile: sits at bottom but never overlaps content */}
        <div className='block md:hidden mt-auto pt-16 text-4xl text-muted opacity-20 font-stix-two-text'>
          Morgan Selbekk
        </div>
      </body>
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
    </html>
  );
}
