import React from "react";
import {ButtonClassKey} from "@/app/components/Button/types";

export type InputClassKey =
  | "root"
  | "label"
  | "icon"
  | "input"

type InputPropsBase = {
  label?: string;
  icon?: React.ReactNode;
  classes?: Partial<Record<InputClassKey, string>>;
};

type TextareaProps = InputPropsBase & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  textarea: true;
};

type RegularInputProps = InputPropsBase & React.InputHTMLAttributes<HTMLInputElement> & {
  textarea?: false;
};

export type InputProps = TextareaProps | RegularInputProps;
