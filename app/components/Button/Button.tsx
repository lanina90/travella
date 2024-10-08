import React, {useMemo} from 'react';
import Link from "next/link";
import {ButtonProps} from "@/app/components/Button/types";
import ButtonStyles from "./styles.module.scss";
import classNames from "classnames";

const ButtonBase = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(function Button(
  props,
  ref
) {
  return <button {...props} ref={ref} />;
});


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    buttonStyle,
    classes,
    shape,
    onMouseEnter,
    onMouseLeave,
    text,
    StartIconComponent,
    EndIconComponent,
    href,
    target,
    fullWidth,
    layout = "text",
    className,
    noWrap,
    children,
    disabled = false,
    render,
    ...rest
  } = props;

  const startIconElement =(["icon", "icon-text", null].includes(layout) && StartIconComponent ? <StartIconComponent /> : null)

  const endIconElement = (["icon", "text-icon", null].includes(layout) && EndIconComponent ? <EndIconComponent /> : null);

  const rootClassName = classNames(
    {
      [ButtonStyles[`button-root`]]: true,
      [ButtonStyles[`button-no-wrap`]]: !!noWrap,
      [ButtonStyles[`button-href`]]: !!href,
      [ButtonStyles[`button-full-width`]]: fullWidth,
      [ButtonStyles[`button-${shape}`]]: shape,
      [ButtonStyles[`button-${buttonStyle}`]]: buttonStyle && !disabled,
      [ButtonStyles[`button-root-disabled`]]: disabled,
    },
    className,
    classes?.root
  );

  const startIconClassName = classNames(ButtonStyles["button-start-icon"], classes?.startIcon);
  const endIconClassName = classNames(ButtonStyles["button-end-icon"], classes?.endIcon);
  const textClassName = classNames(ButtonStyles["button-text"], classes?.text);

  const Component = href ? Link : ButtonBase;

  return (
    <Component
      {...({
        ...rest,
        ref,
        onMouseEnter,
        onMouseLeave,
        className: rootClassName,
        href,
        target,
      } as any)}
    >
      {children}

      {render ? (
        render(props)
      ) : (
        <React.Fragment>
          {startIconElement && (layout === "icon" || layout === "icon-text") ? (
            <span className={startIconClassName}>
                {startIconElement}
              </span>
          ) : null}

          {text && (layout === "text" || layout === "icon-text") ? (
            <span className={textClassName}>{text}</span>
          ) : null}

          {endIconElement && layout === "text-icon" ? (
            <span className={endIconClassName}>
                {endIconElement}
              </span>
          ) : null}
        </React.Fragment>
      )}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;