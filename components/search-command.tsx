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

import { Button } from './ui/button';
import { DialogTitle } from './ui/dialog';

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);

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
        <CommandInput placeholder='Type a command or search...' />
        <CommandList aria-describedby='search-results-list'>
          <CommandEmpty>No Suggestions.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
