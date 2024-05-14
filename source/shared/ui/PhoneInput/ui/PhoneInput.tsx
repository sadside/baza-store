import styles from "./PhoneInput.module.scss";

import classNames from "classnames/bind";
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { handlePhoneDelete, handlePhoneInput } from "../lib/inputLogic";

import { useUnit } from "effector-react";
import { $currentCountryCode } from "@shared/ui/PhoneInput/model/countryCodes";

interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: boolean;
  register?: any;
  resetFiled?: any;
  disabled?: boolean;
}

const cx = classNames.bind(styles);

export const PhoneInput = ({ className, name, type, error, register, resetFiled, disabled, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const currentCountry = useUnit($currentCountryCode);

  const inputFocused = () => {
    setIsFocused(true);
  };

  const inputUnFocused = () => {
    setIsFocused(false);
  };

  const inputClassName = cx({
    input: true,
    error: error
  });

  const regionCodeHandlerClassName = cx({
    regionCodeHandler: true,
    focused: isFocused
  });

  const regionCodeSelectClassName = cx({
    codeSelect: true,
    focused: isFocused
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    handlePhoneInput(event, currentCountry);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={`${inputClassName} ${className} text-[12px]`}
        placeholder="Номер телефона"
        type={type}
        maxLength={18}
        onInput={handleInput}
        onKeyDown={(event) => handlePhoneDelete(event, resetFiled)}
        onFocus={inputFocused}
        disabled={disabled}
        {...register(name)}
        onBlur={inputUnFocused}
      />
      <div className={regionCodeHandlerClassName}>
        <div className={styles.regionCode}>{currentCountry}</div>
      </div>
    </div>
  );
};
