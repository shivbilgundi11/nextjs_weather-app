import { PiWind } from 'react-icons/pi';

import { AirPollutionDataType } from '@/lib/types';

import { Skeleton } from '../ui/skeleton';

interface AirPollutionProps {
  airPollution: AirPollutionDataType | null;
}

export default function AirQuality({ airPollution }: AirPollutionProps) {
  function getAQIDescription(aqi: 1 | 2 | 3 | 4 | 5): string {
    switch (aqi) {
      case 1:
        return 'Good';
      case 2:
        return 'Fair';
      case 3:
        return 'Moderate';
      case 4:
        return 'Poor';
      case 5:
        return 'Very Poor';
      default:
        return 'Unknown';
    }
  }

  const aqi = airPollution?.list[0]?.main?.aqi as 1 | 2 | 3 | 4 | 5;

  if (!airPollution) {
    return <Skeleton className='h-28 w-full' />;
  }

  return (
    <>
      <div className='relative flex h-28 w-full flex-col justify-between overflow-hidden rounded-2xl border bg-gray-200 p-3 dark:bg-darkVoilet md:w-full'>
        <h3 className='text-center font-semibold lg:text-lg'>
          Air Quality Index
        </h3>
        <span className='absolute -right-8 -top-6 text-8xl text-gray-300 dark:text-gray-600'>
          <PiWind />
        </span>

        <div className='flex items-center justify-between gap-3'>
          <div className='flex flex-col gap-y-1'>
            <span className='inline-flex items-center font-semibold'>
              PM2.5:{' '}
              <p className='ml-1 font-medium'>
                {airPollution?.list[0]?.components?.pm2_5}
              </p>{' '}
              <small className='ml-1'>
                μg/m<sup>3</sup>
              </small>
            </span>
            <span className='inline-flex items-center font-semibold'>
              O3:{' '}
              <p className='ml-1 text-sm font-medium'>
                {airPollution?.list[0]?.components?.o3}
              </p>{' '}
              <small className='ml-1'>
                μg/m<sup>3</sup>
              </small>
            </span>
          </div>
          <div className='h-[20px] w-[2px] border border-gray-600'></div>
          <div className='w-max rounded-xl bg-[#FFDE68] p-3 px-5 text-sm font-semibold tracking-wider text-black md:text-base'>
            <p>{getAQIDescription(aqi)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
