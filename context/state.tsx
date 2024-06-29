'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface WeatherContextType {
  unit: 'metric' | 'imperial';
  // eslint-disable-next-line no-unused-vars
  setUnit: (unit: 'metric' | 'imperial') => void;
  forecast: object | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [forecast, setForecast] = useState(null);

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
  }, [unit]);

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
