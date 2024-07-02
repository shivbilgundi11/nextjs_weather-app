'use client';

import axios from 'axios';
import { debounce } from 'lodash';
import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  AirPollutionDataType,
  FiveDayForecast,
  GeoCodedList,
  WeatherContextType,
  WeatherDataType,
} from '@/lib/types';
import { defaultStates } from '@/lib/utils';

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [geoCodedList, setGeoCodedList] =
    useState<GeoCodedList[]>(defaultStates);
  const [searchValue, setSearchValue] = useState<string>('');
  const [unit, setUnit] = useState<string>('metric');
  const [forecast, setForecast] = useState<WeatherDataType | null>(null);
  const [airPollution, setAirPollution] = useState<AirPollutionDataType | null>(
    null,
  );
  const [fiveDayForecast, setFiveDayForecast] =
    useState<FiveDayForecast | null>(null);
  const [activeCoords, setActiveCoords] = useState([12.97, 77.6]);

  const fetchForecast = async (lat: number, lon: number, unit: string) => {
    try {
      const res = await axios.get(
        `/api/weather?lat=${lat}&lon=${lon}&unit=${unit}`,
      );
      setForecast(res.data);
    } catch (error) {
      alert('Error fetching forecast data, Refresh please.');
      console.error('Error fetching forecast data:', error);
    }
  };
  const fetchAirPollution = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`);

      setAirPollution(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };
  const fetchFiveDayForecast = async (
    lat: number,
    lon: number,
    unit: string,
  ) => {
    try {
      const res = await axios.get(
        `api/fiveday?lat=${lat}&lon=${lon}&unit=${unit}`,
      );

      setFiveDayForecast(res.data);
    } catch (error: unknown) {
      console.log('Error fetching forecast data');
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);

    if (inputValue === '') {
      setGeoCodedList(defaultStates);
    }
  };

  //geocoded list
  const fetchGeoCodedList = async (search: string) => {
    try {
      const res = await axios.get(`/api/geocoded?search=${search}`);

      setGeoCodedList(res.data);
    } catch (error) {
      console.log('Error fetching geocoded list: ');
    }
  };

  // debounce function
  useEffect(() => {
    const debouncedFetch = debounce((search: string) => {
      fetchGeoCodedList(search);
    }, 500);

    if (searchValue) {
      debouncedFetch(searchValue);
    }

    // cleanup
    return () => debouncedFetch.cancel();
  }, [searchValue]);

  useEffect(() => {
    fetchForecast(activeCoords[0], activeCoords[1], unit);
    fetchAirPollution(activeCoords[0], activeCoords[1]);
    fetchFiveDayForecast(activeCoords[0], activeCoords[1], unit);
  }, [activeCoords, unit]);

  return (
    <WeatherContext.Provider
      value={{
        setUnit,
        unit,
        forecast,
        airPollution,
        fiveDayForecast,
        geoCodedList,
        searchValue,
        handleInput,
        setActiveCoords,
      }}
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
