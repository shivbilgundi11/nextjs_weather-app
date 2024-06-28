import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { SearchCommand } from './search-command';
import { ThemeToggle } from './theme-toggler';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <>
      <header className='mx-auto h-16 rounded-2xl border-b bg-white sm:container dark:bg-inherit md:h-20'>
        <nav className='flex h-full items-center justify-between gap-2 md:gap-4'>
          {/* <-----------Logo-With-Site-Name-----------> */}
          <div className='flex items-center justify-center gap-2 md:gap-5'>
            {/* ---Logo--- */}
            <Link href={'/'} className='relative'>
              <Image
                src={'/assets/cloud-icon.svg'}
                alt='logo'
                width={25}
                height={25}
                priority={false}
                quality={50}
              />
              <span className='absolute right-0 top-0 h-4 w-4 rounded-full bg-yellow-300'></span>
            </Link>

            {/* ---Site-Name-&-Date--- */}
            <div className='flex flex-col'>
              <h1 className='text-md font-semibold tracking-wide md:text-lg'>
                Weather Forecast
              </h1>
              <p className='text-xs font-medium tracking-wide text-muted-foreground sm:text-sm'>
                Saturday 26, December 2020
              </p>
            </div>
          </div>

          {/* <-----------SearchBar-ThemeToggle-GitHubButton-----------> */}
          <div className='flex h-full items-center justify-center gap-x-1 md:gap-x-2'>
            {/* -----Search-Modal----- */}
            <SearchCommand />

            {/* -----Theme-Toggler----- */}
            <ThemeToggle />

            {/* -----GitHub-Link-Button----- */}
            <a
              href='https://github.com/shivbilgundi11/nextjs_weather-app'
              target='blank'
            >
              <Button>
                <FaGithub />{' '}
                <span className='ml-2 hidden text-[16px] md:inline'>
                  Source Code
                </span>
              </Button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
