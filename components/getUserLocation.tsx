'use client';

import { FaLocationDot } from 'react-icons/fa6';

import { useWeatherContext } from '@/context/state';

import { Button } from './ui/button';

export default function GetUserLoca() {
  const { setActiveCoords } = useWeatherContext();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setActiveCoords([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Button onClick={handleClick}>
        <FaLocationDot />
      </Button>
    </>
  );
}
