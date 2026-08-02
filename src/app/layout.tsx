import type { Metadata } from 'next';
import { Anton, Archivo } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Mariot Kitchen Equipment — Commercial Kitchen Solutions UAE & GCC',
  description:
    'Turnkey commercial kitchen solutions for restaurants, hotels, cafés and palaces. Equipment supply, stainless steel fabrication and maintenance across the UAE and GCC.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
