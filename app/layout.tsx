import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { GlobalContextProvider } from '@/context/state';
import { ThemeProvider } from '@/services/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Forecast',
  description:
    'A Next.js app built to display latest weather info about any city and based on user current location too.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
