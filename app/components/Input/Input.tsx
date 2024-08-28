import React from "react";
import { InputProps } from "@/app/components/Input/types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input: React.FC<InputProps> = ({ textarea, label, icon, type = "text", id, classes, ...props }) => {

  const inputProps = textarea ? props : { ...props, type };

  const Tag = textarea ? "textarea" : "input"

  return (
    <div className={classNames(styles["container"], classes?.root)}>
      {label && (
        <label htmlFor={id} className={classNames(styles["container-label"], classes?.label)}>
          {label}
        </label>
      )}
      <div className={styles["container-input-wrapper"]}>
        <Tag
          id={id}
          {...inputProps}
          {...props}
          className={classNames(
            styles["container-input"],
            !textarea && type === "date" && styles["container-input-date-picker"],
            classes?.input
          )}
        />
        {icon && <span className={classNames(styles["container-icon"], classes?.icon)}>{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
