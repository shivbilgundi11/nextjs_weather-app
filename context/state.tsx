'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface WeatherContextType {
  unit: 'metric' | 'imperial';
  // eslint-disable-next-line no-unused-vars
  setUnit: (unit: 'metric' | 'imperial') => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  return (
    <WeatherContext.Provider value={{ setUnit, unit }}>
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
