"use client"


import React, { createContext, useContext } from "react";

interface ISectionsContext {
  header: React.RefObject<any>;
  about: React.RefObject<any>;
  services: React.RefObject<any>;
  testimonials: React.RefObject<any>;
  contacts: React.RefObject<any>;
  destinations: React.RefObject<any>;
}

interface SectionsProviderProps {
  children: React.ReactNode;
  refs: ISectionsContext;
}

const SectionsContext = createContext<ISectionsContext | undefined>(undefined);

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionsProvider');
  }
  return context;
};

export const SectionsProvider: React.FC<SectionsProviderProps> = ({ children, refs }) => (
  <SectionsContext.Provider value={refs}>
    {children}
  </SectionsContext.Provider>
);