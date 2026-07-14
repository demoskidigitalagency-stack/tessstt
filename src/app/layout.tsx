import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Media Buying Masterclass | Demoski Digital Agency',
  description: 'Learn high-income digital marketing skills that can pay you in Naira & Dollars. Master Facebook & Instagram Ads with Demoski.',
  keywords: 'media buying, digital marketing, facebook ads, instagram ads, online course',
  openGraph: {
    title: 'Media Buying Masterclass | Demoski Digital Agency',
    description: 'Learn high-income digital marketing skills that can pay you in Naira & Dollars.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`${inter.className} bg-brand-black text-brand-white overflow-x-hidden`}>
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0f1535',
              color: '#f8fafc',
              border: '1px solid #1e293b',
            },
          }}
        />
      </body>
    </html>
  );
}
