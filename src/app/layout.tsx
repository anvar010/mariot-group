import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* One ordinary sans for the whole site. `--font-display` is kept as a separate
   variable — it now resolves to the same family, so headings and figures just
   read as heavier text rather than a different typeface. Pointing it somewhere
   else later is a one-line change. */
const inter = Inter({
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
    <html lang="en" className={inter.variable}>
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
