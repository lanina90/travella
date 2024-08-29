import React from "react";

export type InputClassKey =
  | "root"
  | "label"
  | "icon"
  | "input"


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  classes?: Partial<Record<InputClassKey, string>>;
  textarea?: boolean;
  datePicker?: boolean;
}