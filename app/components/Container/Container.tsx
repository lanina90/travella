import React, {useMemo} from 'react';
import styles from "./style.module.scss"
import {Container} from "@mui/system";
import classNames from "classnames";


const SectionContainer = (props) => {
  const { className, noVerticalPadding, verticalPadding, style,  ...rest } = props;

  const containerClassName = classNames(
    className,
    styles["container"],
    !noVerticalPadding && styles["container-with-vertical-padding"]
  );

  const containerStyles = useMemo(() => {
    return {
      ...style,
      paddingTop: verticalPadding ? `${verticalPadding}px` : undefined,
      paddingBottom: verticalPadding ? `${verticalPadding}px` : undefined
    }
  }, [verticalPadding, style])

  return <Container className={containerClassName} style={containerStyles} {...rest} />;
};

export default SectionContainer;