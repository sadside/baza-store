import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";
import s from "./InputForm.module.scss";
import { convertType } from "@shared/utils/convertType";
import { convertTypeTwo } from "@shared/utils/convertTypeTwo";


interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
  error?: boolean | undefined;
  register?: any;
  resetFiled?: any;
  reset?: any;
  form?: boolean;
}

const InputForm = ({ type, error, register, form }: IProps) => {
  const Baze = ({ children }: { children: any }) => (
    <>
      <div className={classNames(s.all, form && s.form)}>
        <span className={s.title}>{convertType(type)}</span>
        <span className={s.prov}>{children}</span>
      </div>
    </>
  );
  return (
    <Baze>
      <input
        {...register(type, {
          required: `Введите ${convertType(type)}`
        })}
        className={classNames(s.input, error && s.error)}
        placeholder={`Введите ${convertTypeTwo(type)}`}
      />
    </Baze>
  );
};

export default InputForm;
