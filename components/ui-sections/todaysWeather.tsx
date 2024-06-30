import IconComp from '../imageIcon';

interface DataType {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility?: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface TodaysProps {
  forecast: DataType | null;
  unit: string;
}

export default function TodaysWeather({ forecast }: TodaysProps) {
  const visibility = (forecast?.visibility as number) / 1000;
  return (
    <>
      <section className='h-auto w-full rounded-2xl'>
        <div className='flex flex-wrap justify-center gap-2 md:justify-start md:gap-3'>
          {/* Humidity */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/humidity1.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Humidity
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {forecast?.main?.humidity} <small>%</small>
            </p>
          </div>

          {/* Feels-Like */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/temperature1.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Feels Like
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {forecast?.main?.feels_like.toFixed(1)}{' '}
              <small className='font-light'>
                <sup className='text-lg'>°</sup>
              </small>
            </p>
          </div>

          {/* Visibility */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/visibility1.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Visibility
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {visibility} <small className='font-light'>km</small>
            </p>
          </div>

          {/* Pressure */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/pressure.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Pressure
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {forecast?.main?.pressure}{' '}
              <small className='font-light'>hPa</small>
            </p>
          </div>

          {/* Min-Temp */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/min-temperature.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Min Temp
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {forecast?.main?.temp_min}{' '}
              <small className='font-light'>
                <sup className='text-lg'>°</sup>
              </small>
            </p>
          </div>

          {/* Max-Temp */}
          <div className='rounded-2xl border bg-white p-4 dark:bg-darkVoilet md:p-5'>
            <div className='flex items-center gap-x-2 md:gap-x-3'>
              <IconComp path={'/assets/max-temperature.png'} />
              <p className='text-sm font-semibold tracking-wide text-gray-700 dark:text-white md:text-base'>
                Max Temp
              </p>
            </div>
            <p className='mt-3 text-center text-lg font-medium md:text-xl lg:text-2xl'>
              {forecast?.main?.temp_max}{' '}
              <small className='font-light'>
                <sup className='text-lg'>°</sup>
              </small>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
