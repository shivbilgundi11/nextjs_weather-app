'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

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
  visibility: number;
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

interface WeatherContextType {
  unit: 'metric' | 'imperial';
  // eslint-disable-next-line no-unused-vars
  setUnit: (unit: 'metric' | 'imperial') => void;
  forecast: DataType | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [forecast, setForecast] = useState<DataType | null>(null);

  const fetchForecast = async () => {
    try {
      const res = await axios.get(`api/weather`);
      console.log(res.data);

      setForecast(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  return (
    <WeatherContext.Provider value={{ setUnit, unit, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
