'use client';

import moment from 'moment';

import { useWeatherContext } from '@/context/state';

import { Skeleton } from './ui/skeleton';

export default function LogoWithDate() {
  const { forecast } = useWeatherContext();
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-md font-semibold tracking-wide md:text-lg'>
          Weather Forecast
        </h1>
        {forecast ? (
          <p className='text-xs font-medium tracking-wide text-muted-foreground sm:text-sm'>
            {moment.unix(forecast.dt).format('dddd DD, MMMM YYYY')}
          </p>
        ) : (
          <Skeleton className='h-3 w-28 rounded-xl' />
        )}
      </div>
    </>
  );
}
