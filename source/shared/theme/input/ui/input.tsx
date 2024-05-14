import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

export const Input = ({ className, error, ...otherProps }: InputProps) => {
  return (
    <>
      <input
        className={twMerge(
          "border border-black-50 h-11 w-[425px] px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none",
          Boolean(error) && "border-red",
          className
        )}
        {...otherProps}
      />
      {error && <div className="text-red mt-1">{error}</div>}
    </>
  );
};
