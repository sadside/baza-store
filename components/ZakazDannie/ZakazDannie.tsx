"use client";

import React, { useEffect } from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import { InputPhoneMask } from "@/components/ui/inputPhoneMask/InputPhoneMask";
import InputForm from "@/components/inputForm/InputForm";
import { InputNameMask } from "@/components/inputNameMask/InputNameMask";
import { orderPageMounted } from "@/stores/order/init";

interface IProps {
  title?: string;
  main?: boolean;
  errors?: any;
  reset?: any;
  register?: any;
  resetField?: any;
}
const ZakazDannie = ({
  title,
  main,
  errors,
  reset,
  register,
  resetField,
}: IProps) => {
  return (
    <div className={s.root}>
      <span>{title}</span>
      <div className={s.form}>
        {main ? (
          <div className={s.inputs}>
            <div className={s.all}>
              <span className={s.title}>Имя*</span>
              <span className={s.prov}>
                <InputNameMask
                  style={{ width: "100%" }}
                  name="name"
                  register={register}
                  error={Boolean(errors.name)}
                  placeholder={`Введите Имя..`}
                />
                {errors.name && (
                  <span className={s.txt}>{errors.name?.message}</span>
                )}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>Фамилия*</span>
              <span className={s.prov}>
                <InputNameMask
                  style={{ width: "100%" }}
                  name="surname"
                  register={register}
                  error={Boolean(errors.surname)}
                  placeholder={`Введите Фамилию..`}
                />
                {errors.surname && (
                  <span className={s.txt}>{errors.surname?.message}</span>
                )}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>E-mail*</span>
              <span className={s.prov}>
                <input
                  {...register("mail", {
                    required: "Введите E-mail",
                  })}
                  className={classNames(s.input, errors.mail && s.error)}
                  placeholder={"Введите E-mail.."}
                />
                {errors.mail && (
                  <span className={s.txt}>{errors.mail?.message}</span>
                )}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>Телефон*</span>
              <span className={s.prov}>
                <InputPhoneMask
                  style={{ width: "100%" }}
                  resetFiled={reset}
                  error={!!errors.phone}
                  register={register}
                  className={classNames(s.input, errors.phone && s.error)}
                  name="phone"
                  type="tel"
                />
                {errors.phone && (
                  <span className={s.txt}>{errors.phone?.message}</span>
                )}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className={s.inputs}>
              <InputForm
                register={register}
                type={"city"}
                reset={resetField}
                form={true}
              />{" "}
              <InputForm
                register={register}
                type={"street"}
                reset={resetField}
                form={true}
              />
            </div>
            <div className={s.bot}>
              <InputForm
                placeholder={"№"}
                register={register}
                type={"house"}
                reset={resetField}
                form={true}
              />
              <InputForm
                register={register}
                placeholder={"№"}
                type={"frame"}
                reset={resetField}
                form={true}
              />
              <InputForm
                register={register}
                placeholder={"№"}
                type={"room"}
                reset={resetField}
                form={true}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ZakazDannie;
