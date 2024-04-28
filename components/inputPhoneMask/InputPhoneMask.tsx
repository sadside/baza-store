import styles from './InputPhoneMask.module.scss';

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

export const InputPhoneMask = ({ className, name, type, error, register, resetFiled, ...rest }: IProps) => {
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

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        inputNumbersValue = '7' + inputNumbersValue;
      }

      const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';

      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };

  const handlePhoneDelete = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
      input.value = '';
    }

    return input;
  };

  return (
    <>
      <input
        className={classNames(`${styles.input}`, {
          [styles.error]: error,
        })}
        placeholder="Номер телефона.."
        type={type}
        maxLength={18}
        onInput={handlePhoneInput}
        onKeyDown={handlePhoneDelete}
        {...register(name, {
          required: 'phone is require field!',
        })}
        {...rest}
      />
    </>
  );
};
