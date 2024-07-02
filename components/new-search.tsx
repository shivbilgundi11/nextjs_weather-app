'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useWeatherContext } from '@/context/state';
import { cn } from '@/lib/utils';

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const { geoCodedList, handleInput, searchValue, setActiveCoords } =
    useWeatherContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between overflow-hidden'
        >
          {value === '' ? 'Search city...' : value}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput
            placeholder='Search framework...'
            onChangeCapture={handleInput}
            value={searchValue}
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {geoCodedList.map((item, index) => (
                <CommandItem
                  key={index}
                  value={`${item.lat.toFixed(1)}-${item.lon.toFixed(1)} ${item.name}`}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    setActiveCoords([item.lat, item.lon]);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value ===
                        geoCodedList[index].lat.toFixed(1) +
                          '-' +
                          geoCodedList[index].lon.toFixed(1) +
                          ' ' +
                          geoCodedList[index].name
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {`${item.name}, ${item.state}, ${item.country}`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
