import React from 'react';
import styles from "./style.module.scss"
import {Container} from "@mui/system";
import classNames from "classnames";


const SectionContainer = (props, forwardedRef) => {
  const { className, noVerticalPadding, ...rest } = props;

  const containerClassName = classNames(
    className,
    styles["container"],
    !noVerticalPadding && styles["container-with-vertical-padding"]
  );

  return <Container className={containerClassName} ref={forwardedRef} {...rest} />;
};

export default SectionContainer;