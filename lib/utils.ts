import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const defaultStates = [
  {
    name: 'Bangalore',
    country: 'IN',
    state: 'Karnataka',
    lat: 12.9716,
    lon: 77.5946,
  },
  {
    name: 'Delhi',
    country: 'IN',
    state: 'Delhi',
    lat: 28.7041,
    lon: 77.1025,
  },
  {
    name: 'Mumbai',
    country: 'IN',
    state: 'Maharashtra',
    lat: 19.076,
    lon: 72.8777,
  },
  {
    name: 'Goa',
    country: 'IN',
    state: 'Goa',
    lat: 15.2993,
    lon: 74.124,
  },
  {
    name: 'Chennai',
    country: 'IN',
    state: 'Tamil Nadu',
    lat: 13.0827,
    lon: 80.2707,
  },
];
