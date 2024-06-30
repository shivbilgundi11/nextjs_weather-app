import Image from 'next/image';
import { PiWind } from 'react-icons/pi';

import { Skeleton } from '../ui/skeleton';

interface Wind {
  speed: number;
  deg: number;
}

interface WindSpeedProps {
  windData: Wind | undefined;
  unit: string;
}

export default function WindSpeed({ windData, unit }: WindSpeedProps) {
  if (!windData) {
    return <Skeleton className='h-56 w-full' />;
  }
  return (
    <>
      <div className='relative flex h-auto w-full flex-col gap-y-3 overflow-hidden rounded-2xl border bg-gray-200 p-3 dark:bg-darkVoilet md:w-full'>
        <h3 className='mx-auto inline-flex items-center gap-x-2 font-semibold lg:text-lg'>
          <PiWind className='mr-1 text-2xl' />
          Wind
        </h3>

        <div className='relative flex items-center justify-center'>
          <div className='relative'>
            <Image
              src={'/assets/compass_body.svg'}
              alt='compass_image'
              width={140}
              height={140}
            />
            <Image
              src={'/assets/compass_arrow.svg'}
              alt='compass_arrow'
              width={12}
              height={12}
              className='absolute -top-1 left-[45%] transition-all duration-1000 ease-in-out dark:invert'
              style={{
                transform: `rotate(${windData?.deg}deg) translateX(-50%)`,
                height: '100%',
              }}
            />
          </div>
          <p className='absolute left-1/2 top-1/2 ml-[2px] translate-x-[-50%] translate-y-[-50%] font-medium'>
            {Math.round(windData?.speed as number)}{' '}
            <small>{unit === 'metric' ? 'm/s' : 'mh'}</small>
          </p>
        </div>
      </div>
    </>
  );
}
