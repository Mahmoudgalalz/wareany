import type { Metadata } from 'next';
import { Dancing_Script, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
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
        className={`${montserrat.variable}  ${dancingScript.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
