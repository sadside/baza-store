import styles from "./PhoneInput.module.scss";
import arrow from "@shared/assets/icons/authInputArrow.svg";

import classNames from "classnames/bind";
import {
  ChangeEvent,
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { handlePhoneDelete, handlePhoneInput } from "../lib/inputLogic";

import { useUnit } from "effector-react";

import { useOutside } from "@/source/shared/lib/utils/hooks/useOutside";
import {
  $countryCodes,
  $currentCountryCode,
  $isSelectCodeOpened,
  codeClicked,
  codesSelectOpened,
} from "@shared/ui/PhoneInput/model/countryCodes";

interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: boolean;
  register?: any;
  resetFiled?: any;
}

const cx = classNames.bind(styles);

export const PhoneInput = ({
  className,
  name,
  type,
  error,
  register,
  resetFiled,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { isShow, setIsShow, ref } = useOutside(false);

  const currentCountry = useUnit($currentCountryCode);
  const codes = useUnit($countryCodes);
  const isSelectOpened = useUnit($isSelectCodeOpened);

  let value = "";

  const inputFocused = () => {
    setIsFocused(true);
  };

  const inputUnFocused = () => {
    setIsFocused(false);
  };

  const inputClassName = cx({
    input: true,
    error: error,
  });

  const regionCodeHandlerClassName = cx({
    regionCodeHandler: true,
    focused: isFocused,
  });

  const regionCodeSelectClassName = cx({
    codeSelect: true,
    focused: isFocused,
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    handlePhoneInput(event, currentCountry);
  };

  const handlePhoneCode = () => {
    codesSelectOpened(true);
    setIsShow(true);
  };

  const handlePhoneCodeClick = (code: string) => {
    codeClicked(code);
    setIsShow(false);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={inputClassName}
        placeholder="Номер телефона"
        type={type}
        maxLength={18}
        onInput={handleInput}
        onKeyDown={(event) => handlePhoneDelete(event, resetFiled)}
        onFocus={inputFocused}
        {...register(name)}
        {...props}
        onBlur={inputUnFocused}
      />
      <div className={regionCodeHandlerClassName}>
        <div className={styles.regionCode}>{currentCountry}</div>
        {/*<Image src={arrow} alt="icon" />*/}
      </div>
      {isSelectOpened && isShow && (
        <div
          className={regionCodeSelectClassName}
          ref={ref}
          tabIndex={0}
          onKeyDown={(event) => console.log(event)}
        >
          {codes.length ? (
            codes?.map((code) => (
              <div
                className={styles.selectCodeItem}
                onClick={() => handlePhoneCodeClick(code.phone_code)}
              >
                {code.phone_code + " " + code.country_code}
              </div>
            ))
          ) : (
            <div className={styles.selectCodeItem}>Ничего не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};
