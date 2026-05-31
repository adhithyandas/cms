import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Eduvance Academy',
  description: 'Empowering learners with quality education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0a0a0a] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
