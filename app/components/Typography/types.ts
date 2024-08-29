import React, {HTMLAttributes} from "react";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  element?: keyof JSX.IntrinsicElements;
  children: React.ReactNode
}

