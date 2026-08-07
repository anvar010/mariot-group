import SmoothScroll from '@/components/SmoothScroll';
import LanguageProvider from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Header />
        {children}
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
