import styles from "./CodeInputs.module.scss";
import { useUnit } from "effector-react";
import { $codeDigits, clearDigits, digitIntroduced, digitRemoved } from "@/stores/auth/auth";
import React, { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import classNames from "classnames/bind";
import { $loginError, loginErrorChanged } from "@/stores/cart/init";

interface CodeInputsProps {
}

const cx = classNames.bind(styles);

export const CodeInputs = forwardRef(({}: CodeInputsProps, ref) => {
  const digits = useUnit($codeDigits);

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const length = digits.length;

  const error = useUnit($loginError);

  const inputClassname = cx({
    error: error !== null,
    codeInput: true
  });

  useImperativeHandle(ref, () => ({
    focus: () => inputRefs.current[0].focus()
  }));

  useEffect(() => {
    inputRefs.current[0].focus();

    return () => {
      clearDigits();
      loginErrorChanged(null);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    loginErrorChanged(null);
    const value = e.target.value;
    if ((value < "0" || value > "9") && value !== "") return;

    digitIntroduced({
      value,
      position: index
    });

    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    } else {
      inputRefs.current[index].blur();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      if (digits[index].match(/^[0-9]$/)) digitRemoved(index);
      else if (index > 0) inputRefs.current[index - 1].focus();
    }

    if (event.key === "ArrowRight" && index < length - 1)
      inputRefs.current[index + 1].focus();
    if (event.key === "ArrowLeft" && index > 0)
      inputRefs.current[index - 1].focus();
  };

  return (
    <div className={styles.wrapper}>
      {digits.map((digit, index) => {
        return (
          <>
            <div className={styles.error}>
              <input
                type="text"
                className={inputClassname}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={(element) =>
                  (inputRefs.current[index] = element as HTMLInputElement)
                }
              />
            </div>
            {index === 2 && <div className={styles.delimiter}></div>}
          </>
        );
      })}
    </div>
  );
});
