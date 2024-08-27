import React from 'react';
import styles from "./style.module.scss"
import {Container} from "@mui/system";
import classNames from "classnames";


const SectionContainer = (props) => {
  const { className, noVerticalPadding, ...rest } = props;

  const containerClassName = classNames(
    className,
    styles["container"],
    !noVerticalPadding && styles["container-with-vertical-padding"]
  );

  return <Container className={containerClassName} {...rest} />;
};

export default SectionContainer;