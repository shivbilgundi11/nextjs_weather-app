import { WeatherDataType } from '@/lib/types';

import { Skeleton } from '../ui/skeleton';
import WeatherIcon from '../weatherIcon';

interface Forecast {
  forecast: WeatherDataType | null;
  unit: string;
}

export default function TemperatureBox({ forecast, unit }: Forecast) {
  if (!forecast) {
    return <Skeleton className='h-[350px] w-full' />;
  }

  return (
    <>
      <div className='temp-bg flex h-[350px] w-full flex-col justify-between rounded-2xl border-2 p-4 text-white md:p-6 lg:p-10'>
        <div className='flex flex-col gap-y-1'>
          <p className='text-lg font-medium md:text-2xl'>
            {forecast?.name}, {forecast?.sys?.country}
          </p>
          <p className='text-sm font-medium capitalize text-slate-200 md:text-base'>
            {forecast?.weather[0]?.main}
          </p>
        </div>
        <div className='self-center'>
          {unit === 'metric' ? (
            <p className='text-5xl font-semibold md:text-5xl lg:text-6xl'>
              {forecast?.main?.temp.toFixed(1)}{' '}
              <small className='font-light'>° C</small>
            </p>
          ) : (
            <p className='text-5xl font-semibold md:text-5xl lg:text-6xl'>
              {forecast?.main?.temp.toFixed(1)}{' '}
              <small className='font-light'>° F</small>
            </p>
          )}
        </div>
        <div className='flex flex-col gap-y-1'>
          <WeatherIcon id={forecast?.weather[0]?.icon} />
          <p className='capitalize'>{forecast?.weather[0]?.description}</p>
          <p className='font-medium'>
            Low: {forecast?.main?.temp_min.toFixed(1)} ° High:{' '}
            {forecast?.main?.temp_max.toFixed(1)} °
          </p>
        </div>
      </div>
    </>
  );
}
