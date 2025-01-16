import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

// metadata
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// font
const fontYekanBakh = localFont({
  src: [
    {
      path: '../public/fonts/yekanbakh/regular-fanum.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/yekanbakh/bold-fanum.woff',
      weight: '700',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontYekanBakh.className}>{children}</body>
    </html>
  );
}
