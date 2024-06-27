'use client';

import { createContext, useContext } from 'react';

interface GlobalContext {
  forecast: string;
}

export const GlobalContext = createContext<string | null>(null);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GlobalContext.Provider value={'ddd'}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const state = useContext(GlobalContext);

  if (!state) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider.',
    );
  }

  return state;
};
