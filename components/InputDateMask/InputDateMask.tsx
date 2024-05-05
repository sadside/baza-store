import styles from '../inputPhoneMask/InputPhoneMask.module.scss';

import classNames from 'classnames';
import { ChangeEvent, DetailedHTMLProps, HTMLAttributes, KeyboardEvent } from 'react';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: boolean;
  register?: any;
  resetFiled?: any;
}

export const PATTERN = /\D/g;

export const InputDateMask = ({ className, name, type, error, register, resetFiled, ...rest }: IProps) => {
  const getInputNumbersValue = (value: string) => {
    return value.replace(PATTERN, '');
  };

  const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let inputNumbersValue = getInputNumbersValue(input.value);

    let formattedInputValue = '';
    const selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length !== selectionStart) {
      return;
    }

    if (inputNumbersValue.length > 0) {
      if (Number(inputNumbersValue[0]) > 3) {
      } else formattedInputValue = inputNumbersValue[0];
    }
    if (inputNumbersValue.length > 1) {
      if (Number(inputNumbersValue[0]) === 3) {
        if (Number(inputNumbersValue[1]) > 1) {
        } else formattedInputValue += inputNumbersValue[1] + '.';
      } else formattedInputValue += inputNumbersValue[1] + '.';
    }
    if (inputNumbersValue.length > 2) {
      if (Number(inputNumbersValue[2]) > 1) {
      } else formattedInputValue += inputNumbersValue[2];
    }
    if (inputNumbersValue.length > 3) {
      if (Number(inputNumbersValue[2]) === 1) {
        if (Number(inputNumbersValue[3]) > 2) {
        } else formattedInputValue += inputNumbersValue[3] + '.';
      } else if (Number(inputNumbersValue[2]) === 0) {
        if (Number(inputNumbersValue[3]) === 0) {
        } else formattedInputValue += inputNumbersValue[3] + '.';
      } else formattedInputValue += inputNumbersValue[3] + '.';
    }
    if (inputNumbersValue.length > 4) {
      if (Number(inputNumbersValue[4]) > 2) {
      } else if (Number(inputNumbersValue[4]) !== 0) {
        formattedInputValue += inputNumbersValue[4];
      }
    }
    if (inputNumbersValue.length > 5) {
      if (Number(inputNumbersValue[4]) === 2) {
        if (Number(inputNumbersValue[5]) > 0) {
        } else formattedInputValue += inputNumbersValue[5];
      } else formattedInputValue += inputNumbersValue[5];
    }
    if (inputNumbersValue.length > 6) {
      if (Number(inputNumbersValue[4]) === 2) {
        if (Number(inputNumbersValue[6]) > 2) {
        } else formattedInputValue += inputNumbersValue[6];
      } else formattedInputValue += inputNumbersValue[6];
    }
    if (inputNumbersValue.length > 7) {
      if (Number(inputNumbersValue[4]) === 2) {
        if (Number(inputNumbersValue[6]) < 2) {
          formattedInputValue += inputNumbersValue[7];
        } else if (Number(inputNumbersValue[6]) === 2 && Number(inputNumbersValue[7]) < 4) {
          formattedInputValue += inputNumbersValue[7];
        }
      } else formattedInputValue += inputNumbersValue[7];
    }

    input.value = formattedInputValue;
  };
  const handlePhoneDelete = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
      input.value = '';
    } else if (event.key === 'Backspace' && input.value[input.value.length - 1] === '.') {
      input.value = input.value.substring(0, input.value.length - 1);
    }

    return input;
  };

  return (
    <>
      <input
        className={classNames(
          `${styles.input}`,
          {
            [styles.error]: error,
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
