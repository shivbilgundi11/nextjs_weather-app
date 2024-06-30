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
import { useWeatherContext } from '@/context/state';

export function SelectUnit() {
  const { setUnit } = useWeatherContext();
  return (
    <Select
      defaultValue='metric'
      onValueChange={(value: string) => setUnit(value)}
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
