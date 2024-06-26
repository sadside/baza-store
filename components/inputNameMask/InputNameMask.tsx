import styles from "../inputPhoneMask/InputPhoneMask.module.scss";

import classNames from "classnames";
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, KeyboardEvent } from "react";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: boolean;
  register?: any;
  resetFiled?: any;
}

export const PATTERN = /[^a-zA-ZА-Яа-яЁё]/g;

export const InputNameMask = ({ className, name, type, error, register, resetFiled, ...rest }: IProps) => {
  const getInputSymvolValue = (value: string) => {
    return value.replace(PATTERN, "");
  };

  const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let val = getInputSymvolValue(input.value);
    input.value = val.replace(/[a-zа-я]+/gi, (match) => match[0].toUpperCase() + match.substr(1));
  };

  const handlePhoneDelete = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    if (event.key === "Backspace" && getInputSymvolValue(input.value).length === 1) {
      input.value = "";
    }

    return input;
  };

  return (
    <>
      <input
        className={classNames(
          `${styles.input}`,
          {
            [styles.error]: error
          },
          className
        )}
        type={type}
        maxLength={18}
        onInput={handlePhoneInput}
        onKeyDown={handlePhoneDelete}
        {...register(name)}
        {...rest}
      />
    </>
  );
};
