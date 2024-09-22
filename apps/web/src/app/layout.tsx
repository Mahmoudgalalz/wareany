import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Dancing_Script, Playfair_Display } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: '400',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Wareany',
  description: 'Wareany - Your AI-powered Styler',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${dancingScript.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
