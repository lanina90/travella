import React, {forwardRef, useMemo} from 'react';
import styles from "./styles.module.scss"
import classNames from "classnames";


interface FlexProps {
  children: any;
  gap?: number;
  column?: boolean;
  grow?: number;
  shrink?: number;
  wrap?: boolean;
  className?: string;
  style?: any;
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  justifyContent?: "flex-start" | "center" | "space-between" | "space-around";
  alignItems?: "flex-start" | "center";
}

const Flex = (props: FlexProps & any, forwardedRef) => {
  const {
    gap,
    wrap,
    column,
    grow,
    shrink,
    className,
    style,
    direction = "row",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    ...rest
  } = props;

  const flexClassName = classNames(
    className,
    styles["flex"],
    styles[`flex-direction-${direction}`],
    styles[`align-items-${alignItems}`],
    styles[`justify-content-${justifyContent}`],
    {
      [styles["flex-column"]]: column,
      [styles["flex-wrap"]]: wrap,
      [styles["flex-grow"]]: typeof grow === "boolean" && grow,
      [styles["flex-no-grow"]]: typeof grow === "boolean" && !grow,
      [styles["flex-shrink"]]: typeof shrink === "boolean" && shrink,
      [styles["flex-no-shrink"]]: typeof shrink === "boolean" && !shrink,
    }
  );

  const flexStyle = useMemo(
    () => ({
      flexGrow: grow ? 1 : undefined,
      flexShrink: shrink ? 1 : undefined,
      gap: gap ?? undefined,
      ...style,
    }),
    [style, grow, shrink]
  );

  return <div ref={forwardedRef} className={flexClassName} style={flexStyle} {...rest} />;
};
export default forwardRef(Flex);