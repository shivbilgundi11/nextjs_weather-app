'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
}

interface WeatherContextType {
  currentWeather: WeatherData | null;
  // forecast: object | null;
  // airPollution: object | null;
  // eslint-disable-next-line no-unused-vars
  fetchWeatherData: (city: string) => void;
  unit: 'metric' | 'imperial';

  // eslint-disable-next-line no-unused-vars
  setUnit: (unit: 'metric' | 'imperial') => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null,
  );
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  // const [forecast, setForecast] = useState<object | null>(null);
  // const [airPollution, setAirPollution] = useState<object | null>(null);

  const fetchWeatherData = async (city: string) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}&units=${unit}`,
      );
      if (!geoRes.ok) {
        throw new Error('Failed to fetch geolocation data');
      }
      const geoData = await geoRes.json();
      const { lat, lon } = geoData[0];

      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`,
      );
      if (!weatherRes.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await weatherRes.json();
      setCurrentWeather(weatherData);

      // const forecastRes = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      // );
      // if (!forecastRes.ok) {
      //   throw new Error('Failed to fetch forecast data');
      // }
      // const forecastData = await forecastRes.json();
      // setForecast(forecastData);

      // const airPollutionRes = await fetch(
      //   `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      // );
      // if (!airPollutionRes.ok) {
      //   throw new Error('Failed to fetch air pollution data');
      // }
      // const airPollutionData = await airPollutionRes.json();
      // setAirPollution(airPollutionData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather, fetchWeatherData, setUnit, unit }}
      // value={{ currentWeather, forecast, airPollution, fetchWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
