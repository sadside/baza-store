import classNames from "classnames";
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, KeyboardEvent } from "react";
import { PATTERN } from "../inputPhoneMask/InputPhoneMask";
import styles from "./InputCodeMask.module.scss";

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  error?: boolean;
  register?: any;
  resetFiled?: any;
}

const InputCodeMask = ({
                         name,
                         error,
                         register,
                         resetFiled,
                         ...props
                       }: IProps) => {
  const getNumberValue = (value: string) => {
    return value.replace(PATTERN, "");
  };

  const inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    const inputNumbersValue = getNumberValue(input.value);

    let formattedInputValue = "";
    formattedInputValue += inputNumbersValue.substring(0, 3);

    if (inputNumbersValue.length > 3) {
      formattedInputValue += "-" + inputNumbersValue.substring(3, 6);
    }

    input.value = formattedInputValue;
  };

  const handleInputDelete = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    if (event.key === "Backspace" && getNumberValue(input.value).length === 1) {
      input.value = "";
      resetFiled("code");
    }

    return input;
  };

  return (
    <>
      <input
        className={classNames(`${styles.input}`, {
          [styles.error]: error
        })}
        placeholder="Код из СМС"
        type="text"
        maxLength={18}
        onInput={inputHandleChange}
        // onKeyDown={handlePhoneDelete}
        {...register(name)}
        {...props}
      />
    </>
  );
};

export default InputCodeMask;
