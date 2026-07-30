import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/navigation/Header';
import Footer from '@/components/layout/Footer';
import { JsonLd, organizationJsonLd, webSiteJsonLd } from '@/components/seo/JsonLd';
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';
import { SITE_URL } from '@/lib/config';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maqola — Sog'ligingiz haqida ishonchli ma'lumot",
    template: '%s | Maqola',
  },
  description: "Shifokorlar tomonidan tekshirilgan, o'zbek tilidagi tibbiy maqolalar. Sog'ligingiz haqida ishonchli va tushunarli ma'lumot.",
  openGraph: {
    siteName: 'Maqola',
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz-Latn" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
