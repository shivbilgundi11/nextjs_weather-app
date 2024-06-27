'use client';

import { useEffect } from 'react';

import { ThemeToggle } from '@/components/theme-toggler';
import { useWeather } from '@/context/state';

export default function Page() {
  const { currentWeather, fetchWeatherData } = useWeather();

  console.log(currentWeather);

  useEffect(() => {
    fetchWeatherData('Bengaluru');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='flex items-center justify-center gap-4'>
        <h1>Hello World...!</h1>
        <ThemeToggle />
      </div>
    </>
  );
}
