import { ChangeEvent, KeyboardEvent } from 'react';

const PATTERN = /\D/g;

const getInputNumbersValue = (value: string) => {
  return value.replace(PATTERN, '');
};

const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>, currentCountry: string) => {
  const input = event.target;

  let inputNumbersValue = getInputNumbersValue(input.value);

  let formattedInputValue = '';
  const selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = '');
  }

  if (currentCountry === '+7') {
    if (inputNumbersValue.length === 11) {
      inputNumbersValue = inputNumbersValue.substring(1, inputNumbersValue.length);
    }

    if (input.value.length !== selectionStart) {
      return;
    }

    if (inputNumbersValue.length >= 0) {
      formattedInputValue += '(' + inputNumbersValue.substring(0, 3);
    }

    if (inputNumbersValue.length >= 4) {
      formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
    }

    if (inputNumbersValue.length >= 7) {
      formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
    }

    if (inputNumbersValue.length >= 9) {
      formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
    }
  } else {
    formattedInputValue += inputNumbersValue;
  }

  input.value = formattedInputValue;
};

const handlePhoneDelete = (event: KeyboardEvent<HTMLInputElement>, resetFiled: (inputName: string) => void) => {
  const input = event.target as HTMLInputElement;

  if (event.key === 'Backspace' && getInputNumbersValue(input.value).length === 1) {
    input.value = '';
    resetFiled('phoneNumber');
  }

  return input;
};

export { handlePhoneDelete, handlePhoneInput };
