import React from "react";
import {ButtonClassKey} from "@/app/components/Button/types";

export type InputClassKey =
  | "root"
  | "label"
  | "icon"
  | "input"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  classes?: Partial<Record<InputClassKey, string>>;
  textarea?: boolean
}
