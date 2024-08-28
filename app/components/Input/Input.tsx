import React from "react";
import { InputProps } from "@/app/components/Input/types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input: React.FC<InputProps> = ({ datePicker, textarea, label, icon, id, classes, ...props }) => {

  const Tag = textarea ? "textarea" : "input"

  const inputProps = textarea
    ? props as React.TextareaHTMLAttributes<HTMLTextAreaElement>
    : props as React.InputHTMLAttributes<HTMLInputElement>;

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
          className={classNames(
            styles["container-input"],
            !textarea && datePicker && styles["container-input-date-picker"],
            classes?.input
          )}
        />
        {icon && <span className={classNames(styles["container-icon"], classes?.icon)}>{icon}</span>}
      </div>
    </div>
  );
};

export default Input;
