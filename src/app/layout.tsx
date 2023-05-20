import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { Footer, Header } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fable store',
  description: 'Fable internet store prototype',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'min-h-screen grid grid-cols-1, grid-rows-[auto,1fr,auto]'
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
