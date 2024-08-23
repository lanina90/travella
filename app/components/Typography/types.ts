import {HTMLAttributes} from "react";

export interface TypographyProps extends Partial<HTMLAttributes<HTMLDivElement>> {
  element?: string;
}