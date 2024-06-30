'use client';

import * as React from 'react';
import { FiSearch } from 'react-icons/fi';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useWeatherContext } from '@/context/state';

import { Button } from './ui/button';
import { DialogTitle } from './ui/dialog';

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);

  const { geoCodedList, handleInput } = useWeatherContext();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button variant={'secondary'} onClick={() => setOpen(!open)}>
        <p className='inline-flex items-center justify-center gap-x-1 text-sm text-muted-foreground'>
          <FiSearch className='text-lg' />
          <kbd className='pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 md:inline-flex'>
            <span className='text-xs'>⌘</span>J
          </kbd>
        </p>
      </Button>
      {/* <p className='text-sm text-muted-foreground'>Press </p> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className='hidden'>Weather in your city</DialogTitle>
        <CommandInput
          placeholder='Weather in your city...'
          onChangeCapture={handleInput}
        />
        <CommandList aria-describedby='search-results-list'>
          <CommandEmpty>No Suggestions.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {geoCodedList.length === 0 && <p>No Results</p>}

            {geoCodedList.map((item) => {
              const { country, state, name } = item;
              return (
                <CommandItem key={item.lat}>
                  {name}, {state}, {country}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
