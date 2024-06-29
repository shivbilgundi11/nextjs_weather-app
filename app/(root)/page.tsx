'use client';

import { useState } from 'react';

import { SelectUnit } from '@/components/select-unit';
import { Skeleton } from '@/components/ui/skeleton';
import TemperatureBox from '@/components/ui-sections/temperature-box';
import TodaysWeather from '@/components/ui-sections/todaysWeather';
import WeeksWeather from '@/components/ui-sections/weeksWeather';
import { useWeatherContext } from '@/context/state';

export default function Page() {
  const { forecast, unit } = useWeatherContext();
  const [tabs, setTabs] = useState<'Today' | 'Week'>('Today');
  return (
    <>
      <div className='mx-auto mt-3 flex h-auto w-full items-center justify-end sm:container'>
        <SelectUnit />
      </div>
      <div className='mx-auto grid min-h-[80vh] w-full grid-cols-1 gap-3 bg-grayShade p-3 sm:container dark:bg-inherit sm:p-4 md:grid-cols-5 md:gap-5 md:py-5 xl:grid-cols-6'>
        {/* -----Left-Column----- */}
        <div className='flex h-full w-full flex-col gap-y-3 rounded-xl md:col-span-3 md:gap-y-5 xl:col-span-4'>
          <TemperatureBox forecast={forecast} unit={unit} />

          {forecast === null ? (
            <Skeleton className='w-full h-[300px]' />
          ) : (
            <section className='h-auto w-full rounded-2xl p-2 md:p-6 lg:py-10'>
              {/* -----Tabs-Button----- */}
              <div className='flex flex-col gap-y-4 md:gap-y-6'>
                <div className='flex items-center gap-x-4'>
                  <button
                    className={`w-max border-b-2 text-lg font-semibold ${tabs === 'Today' ? 'border-gray-700' : 'border-transparent text-gray-400'}`}
                    onClick={() => setTabs('Today')}
                  >
                    Today
                  </button>
                  <button
                    className={`w-max border-b-2 text-lg font-semibold ${tabs === 'Week' ? 'border-gray-700' : 'border-transparent text-gray-400'}`}
                    onClick={() => setTabs('Week')}
                  >
                    Week
                  </button>
                </div>

                {tabs === 'Today' ? (
                  <TodaysWeather forecast={forecast} unit={unit} />
                ) : (
                  <WeeksWeather />
                )}
              </div>
            </section>
          )}
        </div>

        {/* -----Right-Column----- */}
        <div className='h-[400px] w-full rounded-xl bg-white dark:bg-darkVoilet md:col-span-2 xl:col-span-2'></div>
      </div>
    </>
  );
}
