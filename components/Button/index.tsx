import clsx from "clsx";
import React, { memo } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  radius?: number;
}

function Button({
  title,
  onClick,
  disabled,
  isActive,
  radius,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.container, {
        [styles.active]: isActive,
      })}
      {...rest}
    >
      {title}
    </button>
  );
}

export default memo(Button);
