import React from "react";

export type InputClassKey =
  | "root"
  | "label"
  | "icon"
  | "input"

export type InputProps = {
  id: string,
  label?: string;
  icon?: React.ReactNode;
  classes?: Partial<Record<InputClassKey, string>>;
  textarea?: boolean;
  datePicker?: boolean;
};
