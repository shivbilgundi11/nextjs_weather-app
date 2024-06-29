export interface WeatherDataType {
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

export interface AirPollutionDataType {
  coord: {
    lon: number;
    lat: number;
  };
  list: Array<{
    main: {
      aqi: number; // Air Quality Index
    };
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
    dt: number;
  }>;
}

export interface WeatherContextType {
  unit: 'metric' | 'imperial';
  // eslint-disable-next-line no-unused-vars
  setUnit: (unit: 'metric' | 'imperial') => void;
  forecast: WeatherDataType | null;
  airPollution: AirPollutionDataType | null;
}
