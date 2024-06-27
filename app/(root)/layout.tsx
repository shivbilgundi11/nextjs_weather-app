import Image from 'next/image';

import { FooterProfile } from '@/components/footer-profile';
import Navbar from '@/components/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className='mx-auto min-h-screen w-full p-4 py-0 sm:container'>
        <Navbar />
        {children}

        {/* -----Footer----- */}
        <footer className='flex flex-wrap items-center justify-center border-t py-3 pb-8 sm:justify-between'>
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
                src={
                  'https://private-user-images.githubusercontent.com/101513013/343707037-e157a43c-e062-457a-887a-fb4a0c1022f5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk0Nzk1ODUsIm5iZiI6MTcxOTQ3OTI4NSwicGF0aCI6Ii8xMDE1MTMwMTMvMzQzNzA3MDM3LWUxNTdhNDNjLWUwNjItNDU3YS04ODdhLWZiNGEwYzEwMjJmNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyN1QwOTA4MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNTMyZTM3MThiOTgzODQyMGIzYTQzZTU0OTFkNGZmNzNlYzkzZDI5MDVlMmZmNjQ5ZDgwZGVmMGFjYzY4NzMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.r0BGTRaduyGlGSBoCPogyOownbGsxypCoDPuU-9_JIs'
                }
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
