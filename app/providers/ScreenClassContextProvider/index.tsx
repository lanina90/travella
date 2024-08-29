"use client"

import {ScreenClass} from "@/app/providers/ScreenClassContextProvider/constants";
import {ScreenClassContext} from "./ScreenClassContext";
import React from "react";
import { useScreenClass } from "react-grid-system";

interface ScreenClassContextProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ScreenClassContextProvider: React.FC<ScreenClassContextProviderProps> = ({ children }) => {
  const screenClass = useScreenClass();

  return (
    <ScreenClassContext.Provider value={screenClass as ScreenClass}>
      {children}
      </ScreenClassContext.Provider>
  );
};