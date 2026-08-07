import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

/* Trust-and-authority pairing: Lexend carries headings and display moments,
   Source Sans 3 carries body copy. Lexend deliberately ships only 500-700 —
   older inline styles still ask for weight 400 on display type, and the
   browser resolving that to 500+ is what keeps those titles from going thin.

   Self-hosted rather than loaded through next/font/google: this build's font
   optimizer mangles the "latin" subset's unicode-range down to `U+??`
   (should be `U+0000-00FF`), which drops every accented character — é, à,
   ö, ñ — to a mismatched fallback font. Fetching the same variable woff2
   files Google actually serves and loading them with next/font/local
   sidesteps that broken rewrite entirely. */
const lexend = localFont({
  src: './fonts/lexend-latin.woff2',
  weight: '500 700',
  display: 'swap',
  variable: '--font-display',
});

const sourceSans = localFont({
  src: './fonts/source-sans-3-latin.woff2',
  weight: '200 900',
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Mariot Kitchen Equipment — Commercial Kitchen Solutions UAE & GCC',
  description:
    'Turnkey commercial kitchen solutions for restaurants, hotels, cafes and palaces. Equipment supply, stainless steel fabrication and maintenance across the UAE and GCC.',
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
