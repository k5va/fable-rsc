import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { AuthProvider } from '@/components/auth-provider/auth-provider';
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
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
