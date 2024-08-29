import React from "react";
import { InputProps } from "@/app/components/Input/types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input: React.FC<InputProps> = ({ datePicker, label, icon, id, classes, ...props }) => {

  return (
    <div className={classNames(styles["container"], classes?.root)}>
      {label && (
        <label htmlFor={id} className={classNames(styles["container-label"], classes?.label)}>
          {label}
        </label>
      )}
      <div className={styles["container-input-wrapper"]}>
        <input
          id={id}
          {...props}
          className={classNames(
            styles["container-input"],
            datePicker && styles["container-input-date-picker"],
            classes?.input
          )}
        />
        {icon && <span className={classNames(styles["container-icon"], classes?.icon)}>{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
