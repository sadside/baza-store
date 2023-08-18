import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";

import s from "./InputForm.module.scss";
import { convertType } from "@/utils/convertType";
import { InputDateMask } from "../InputDateMask/InputDateMask";
import { InputNameMask } from "../inputNameMask/InputNameMask";
import { InputPhoneMask } from "../inputPhoneMask/InputPhoneMask";

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

interface BProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
  children?: any;
  important?: boolean;
}

const InputForm = ({ type, error, register, reset, form }: IProps) => {
  const Baze = ({ children, type, important }: BProps) => (
    <>
      <div className={classNames(s.all, form && s.form)}>
        <span className={s.title}>
          {convertType(type)}
          {important ? "*" : ""}
        </span>
        <span className={s.prov}>
          {children}
          <span className={classNames(s.txt, error && s.txtErr)}>
            Text error
          </span>
        </span>
      </div>
    </>
  );
  switch (type) {
    case "name":
    case "surname":
      return (
        <Baze type={type} important={true}>
          <InputNameMask
            style={{ width: "100%" }}
            name={type}
            register={register}
            error={!!error}
            placeholder={`Введите ${type === "name" ? "Имя" : "Фамилию"}..`}
          />
        </Baze>
      );
    case "city":
      return (
        <Baze type={type} important={false}>
          <InputNameMask
            name={type}
            register={register}
            error={!!error}
            placeholder={"Введите город.."}
          />
        </Baze>
      );
    case "dateOfBth":
      return (
        <Baze type={type} important={true}>
          <InputDateMask
            style={{ width: "100%" }}
            register={register}
            error={!!error}
            placeholder="дд.мм.гггг"
            type={"text"}
            name={type}
          />
        </Baze>
      );
    case "mail":
      return (
        <Baze type={type} important={true}>
          <input
            {...register(type, {
              required: "Email is require field!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter valid email!",
              },
            })}
            className={classNames(s.input, error && s.error)}
            placeholder={"Введите E-mail.."}
          />
        </Baze>
      );
    case "phoneNumber":
      return (
        <Baze type={type} important={true}>
          <InputPhoneMask
            style={{ width: "100%" }}
            resetFiled={reset}
            error={!!error}
            register={register}
            className={classNames(s.input, error && s.error)}
            name={type}
            type="tel"
          />
        </Baze>
      );
    default:
      return (
        <Baze type={type} important={false}>
          <input
            {...register(type)}
            className={classNames(s.input, error && s.error)}
            placeholder={`Введите ${type}`}
          />
        </Baze>
      );
  }
};

export default InputForm;
