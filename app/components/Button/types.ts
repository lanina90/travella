import React from "react";

export type ButtonClassKey =
  | "root"
  | "text"
  | "startIcon"
  | "endIcon";

export type ButtonShape = "rounded" | "circular" | "rectangular";
export type ButtonLayout = "icon" | "icon-text" | "text" | "text-icon";
export type ButtonStyle = "primary" | "secondary";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  layout: ButtonLayout;
  buttonStyle?: ButtonStyle;
  disabled?: boolean
  shape: ButtonShape;
  classes?: Partial<Record<ButtonClassKey, string>>;
  noWrap?: boolean;
  text?: string | null;
  startIconName?: string;
  StartIconComponent?: any;
  startIconColor?: string;
  startIconSize?: number;
  endIconName?: string;
  EndIconComponent?: any;
  endIconColor?: string;
  endIconSize?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: string;
  fullWidth?: boolean;
  navigationPath?: string;
  render?: (props?: any) => React.ReactNode;
}