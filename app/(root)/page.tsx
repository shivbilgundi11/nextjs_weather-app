'use client';

import { useState } from 'react';

import { ComboboxDemo } from '@/components/new-search';
import { SelectUnit } from '@/components/select-unit';
import { Skeleton } from '@/components/ui/skeleton';
import AirQuality from '@/components/ui-sections/airQuality';
import SunRiseSet from '@/components/ui-sections/sunRiseSet';
import TemperatureBox from '@/components/ui-sections/temperature-box';
import TodaysWeather from '@/components/ui-sections/todaysWeather';
import WeeksWeather from '@/components/ui-sections/weeksWeather';
import WindSpeed from '@/components/ui-sections/wind';
import { useWeatherContext } from '@/context/state';

export default function Page() {
  const { forecast, unit, airPollution, fiveDayForecast } = useWeatherContext();
  const [tabs, setTabs] = useState<'Today' | 'Week'>('Today');

  return (
    <>
      <div className='mx-auto mt-3 flex h-auto w-full items-center justify-between sm:container'>
        <ComboboxDemo />
        <SelectUnit />
      </div>
      <div className='mx-auto grid h-auto w-full grid-cols-1 gap-3 bg-grayShade p-3 sm:container dark:bg-inherit sm:p-4 md:grid-cols-1 md:gap-5 md:py-5 lg:grid-cols-5 xl:grid-cols-6'>
        {/* -----Left-Column----- */}
        <div className='flex h-full w-full flex-col gap-y-3 rounded-xl md:gap-y-5 lg:col-span-3 xl:col-span-4'>
          <TemperatureBox forecast={forecast} unit={unit} />

          {forecast === null ? (
            <Skeleton className='h-[300px] w-full' />
          ) : (
            <section className='h-auto w-full rounded-2xl py-4 md:p-6 lg:py-10'>
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
                  <WeeksWeather fiveday={fiveDayForecast} unit={unit} />
                )}
              </div>
            </section>
          )}
        </div>

        {/* -----Right-Column----- */}
        <div className='h-auto w-full rounded-xl p-3 md:p-4 lg:col-span-2 lg:p-5 lg:pt-2 xl:col-span-2'>
          <h2 className='mb-5 rounded-2xl border p-2 text-center text-xl font-bold text-slate-800 dark:text-white md:text-xl'>
            Today&apos;s Highlight
          </h2>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-1'>
            <SunRiseSet sunData={forecast?.sys} />

            <AirQuality airPollution={airPollution} />

            <WindSpeed windData={forecast?.wind} unit={unit} />
          </div>
        </div>
      </div>
    </>
  );
}
