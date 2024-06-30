import moment from 'moment';

import { FiveDayForecast } from '@/lib/types';

import NextDayCard from '../nextDayWeatherCard';

interface WeeksWeatherProps {
  fiveday: FiveDayForecast | null;
  unit: 'metric' | 'imperial';
}

export default function WeeksWeather({ fiveday, unit }: WeeksWeatherProps) {
  const forecastData = fiveday;

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

  const groupedByDay: { [key: string]: ForecastItem[] } = {};

  {
    forecastData &&
      forecastData.list.forEach((item: ForecastItem) => {
        const date = moment(item.dt_txt).format('YYYY-MM-DD');
        if (!groupedByDay[date]) {
          groupedByDay[date] = [];
        }
        groupedByDay[date].push(item);
      });
  }

  const nextFiveDaysForecast: ForecastItem[] = [];

  Object.keys(groupedByDay)
    .slice(0, 5)
    .forEach((date) => {
      nextFiveDaysForecast.push(groupedByDay[date][0]);
    });

  return (
    <>
      <section className='h-auto w-full rounded-2xl'>
        <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:justify-start'>
          {/* ------Weather-Cards------ */}
          {nextFiveDaysForecast &&
            nextFiveDaysForecast.map((cardData) => {
              return (
                <NextDayCard
                  key={cardData?.dt}
                  cardData={cardData}
                  unit={unit}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
