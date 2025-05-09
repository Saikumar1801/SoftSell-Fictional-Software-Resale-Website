// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head'; // Note: For App router, metadata API is preferred for <head> tags

// If you have a ThemeProvider for dark mode, import and wrap children
// For simplicity, we'll rely on class on <html> set by client-side script in page.js

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Metadata object (Next.js 13 App Router way)
export const metadata = {
  title: 'SoftSell - Resell Your Software Licenses Easily',
  description: 'SoftSell helps you resell your unused software licenses and find great deals on pre-owned software. Secure, simple, and cost-effective.',
  keywords: 'software resale, sell software licenses, buy used software, SoftSell',
  openGraph: {
    title: 'SoftSell - Resell Your Software Licenses Easily',
    description: 'Secure, simple, and cost-effective software license resale.',
    type: 'website',
    // url: 'https://yourdomain.com', // Replace with your actual domain
    // images: ['https://yourdomain.com/og-image.jpg'], // Replace with your OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftSell - Resell Your Software Licenses Easily',
    description: 'Secure, simple, and cost-effective software license resale.',
    // site: '@yourtwitterhandle', // Replace with your Twitter handle
    // images: ['https://yourdomain.com/twitter-image.jpg'], // Replace with your Twitter image
  },
  // Add a link for a favicon
  icons: {
    icon: '/favicon.ico', // Make sure you have a favicon.ico in your /public folder
    // You can also provide apple-touch-icon, etc.
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        The <html> tag can have the 'dark' class toggled.
        A client-side script in page.js will handle this for persistence.
      */}
      <body>
        {children}
      </body>
    </html>
  );
}