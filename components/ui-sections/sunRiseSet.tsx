import moment from 'moment';
import { GoSun } from 'react-icons/go';
import { IoArrowUpOutline } from 'react-icons/io5';
import { MdArrowDownward } from 'react-icons/md';

import { Skeleton } from '../ui/skeleton';

type Sun = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface SunDataProps {
  sunData: Sun | undefined;
}

export default function SunRiseSet({ sunData }: SunDataProps) {
  if (!sunData) {
    return <Skeleton className='h-28 w-full' />;
  }
  return (
    <>
      <div className='relative flex h-28 w-full flex-col justify-between overflow-hidden rounded-2xl border bg-white p-3 dark:bg-darkVoilet md:w-full'>
        <h3 className='font-semibold lg:ml-2 lg:text-lg'>Sunrise & Sunset</h3>
        <span className='absolute -right-9 -top-9 text-8xl text-gray-300 dark:text-gray-600'>
          <GoSun />
        </span>
        {sunData ? (
          <div className='flex items-center gap-x-2 lg:gap-x-8'>
            <div className='mr-2 flex items-center gap-x-2 lg:gap-x-4'>
              <span className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-300 bg-yellow-400 text-xl font-semibold text-white'>
                <IoArrowUpOutline />
              </span>{' '}
              <div className='flex flex-col'>
                <p className='font-semibold'>
                  {moment.unix(sunData?.sunrise).format('h:mm A')}
                </p>
                <p className='text-sm font-medium text-gray-500'>
                  +{moment.unix(sunData?.sunrise).format('ss')}
                  <small> S</small>
                </p>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <span className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-300 bg-yellow-400 text-xl font-semibold text-white'>
                <MdArrowDownward />
              </span>{' '}
              <div className='flex flex-col'>
                <p className='font-semibold'>
                  {moment.unix(sunData?.sunset).format('h:mm A')}
                </p>
                <p className='text-sm font-medium text-gray-500'>
                  +{moment.unix(sunData?.sunset).format('ss')}
                  <small> S</small>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className='text-center'>No data available</p>
        )}
      </div>
    </>
  );
}
