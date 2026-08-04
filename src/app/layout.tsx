import type { Metadata } from 'next';
import { Lexend, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* Trust-and-authority pairing: Lexend carries headings and display moments,
   Source Sans 3 carries body copy. Lexend deliberately ships only 500-700 —
   older inline styles still ask for weight 400 on display type, and the
   browser resolving that to 500+ is what keeps those titles from going thin. */
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

const sourceSans = Source_Sans_3({
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
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable}`}>
      {/* Browser extensions (password managers, ColorZilla's cz-shortcut-listen,
          etc.) stamp attributes onto <body> before React hydrates, which React
          reports as a mismatch we can't fix from here. Suppression is one level
          deep, so real mismatches inside the tree still surface. */}
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
