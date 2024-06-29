import Image from 'next/image';

import { FooterProfile } from '@/components/footer-profile';
import Navbar from '@/components/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='min-h-screen w-full bg-grayShade dark:bg-inherit'>
        <Navbar />
        {children}

        {/* -----Footer----- */}
        <footer className='mx-auto flex flex-wrap items-center justify-center rounded-2xl border-t bg-white py-3 pb-4 sm:container dark:bg-inherit sm:justify-between'>
          <p className='flex h-full items-center justify-center gap-1 text-[16px]'>
            Made by <FooterProfile />
            <a
              href='https://shivbilgundi.netlify.app/'
              target='_blank'
              className='font-bold text-violet-500'
            >
              shivbilgundi.dev
            </a>
          </p>

          <p className='inline-flex items-center gap-x-2 text-sm text-muted-foreground'>
            Weather data provided by OpenWeather{' '}
            <a href='https://openweathermap.org/' target='_blank'>
              <Image
                src={'/assets/OpenWeather-Logo.png'}
                alt='OpenWeather-logo'
                width={64}
                height={64}
              />
            </a>
          </p>
        </footer>
      </main>
    </>
  );
};

export default Layout;
