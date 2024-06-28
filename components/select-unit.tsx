'use client';

import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useWeather } from '@/context/state';

export function SelectUnit() {
  const { unit, setUnit } = useWeather();
  console.log(unit);
  return (
    <Select
      defaultValue='metric'
      onValueChange={(value: 'metric' | 'imperial') => setUnit(value)}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a unit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Units</SelectLabel>
          <SelectItem value='metric'>° C Celsius</SelectItem>
          <SelectItem value='imperial'>° F Fahrenheit</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
