'use client';

import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  AirPollutionDataType,
  FiveDayForecast,
  WeatherContextType,
  WeatherDataType,
} from '@/lib/types';

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [forecast, setForecast] = useState<WeatherDataType | null>(null);
  const [airPollution, setAirPollution] = useState<AirPollutionDataType | null>(
    null,
  );
  const [fiveDayForecast, setFiveDayForecast] =
    useState<FiveDayForecast | null>(null);

  const fetchForecast = async () => {
    try {
      const res = await axios.get(`api/weather`);

      setForecast(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };
  const fetchAirPollution = async () => {
    try {
      const res = await axios.get(`api/pollution`);

      setAirPollution(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };
  const fetchFiveDayForecast = async () => {
    try {
      const res = await axios.get(`api/fiveday`);

      setFiveDayForecast(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };

  useEffect(() => {
    fetchForecast();
    fetchAirPollution();
    fetchFiveDayForecast();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ setUnit, unit, forecast, airPollution, fiveDayForecast }}
    >
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
