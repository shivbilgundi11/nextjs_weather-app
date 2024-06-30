import moment from 'moment';
import { PiDropBold, PiWaves } from 'react-icons/pi';

import WeatherIcon from './weatherIcon';

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  clouds: { all: number };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: { pod: string };
  dt_txt: string;
}

export default function NextDayCard({
  cardData,
  unit,
}: {
  cardData: ForecastItem;
  unit: string;
}) {
  return (
    <>
      <div className='flex flex-col gap-y-2 rounded-2xl border bg-white p-2 dark:bg-darkVoilet md:gap-y-3 md:p-4'>
        <div className='flex gap-x-3 lg:gap-x-12'>
          <div className='flex flex-col items-start'>
            <p className='font-semibold tracking-wide md:text-lg'>
              {moment.unix(cardData?.dt).format('dddd')}
            </p>
            <p className='text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400'>
              {cardData?.weather[0]?.main}
            </p>
          </div>

          <WeatherIcon id={cardData?.weather[0]?.icon} />
        </div>

        <div className='flex justify-between gap-x-3 lg:gap-x-8'>
          <div className='flex flex-col items-start'>
            <p className='inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
              <PiWaves className='text-sm text-crimsonRed' />{' '}
              {cardData?.wind?.speed} {unit === 'metric' ? 'm/s' : 'mh'}
            </p>
            <p className='inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
              <PiDropBold className='text-sm text-crimsonRed' />{' '}
              {cardData?.main?.humidity}%
            </p>
          </div>

          <p className='text-lg md:text-2xl'>
            {cardData?.main?.temp.toFixed(1)} °
          </p>
        </div>
      </div>
    </>
  );
}
