"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputNameMask } from "@/components/inputNameMask/InputNameMask";
import { Button } from "@shared/theme/button";
import { InputDateMask } from "@/components/InputDateMask/InputDateMask";
import s from "@/components/LcForm/LcForm.module.scss";
import classNames from "classnames";
import { PhoneInput } from "@shared/ui/PhoneInput";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  surname: yup.string().required("Введите Фамилию"),
  date: yup
    .string()
    .required("Введите дату рождения")
    .min(10, "Введите дату в формате дд.мм.гггг"),
  mail: yup
    .string()
    .required("Введите почту")
    .email("Введите корректную почту"),
  phone: yup
    .string()
    .required("Введите номер телефона")
    .min(5, "Введите номер телефона")
});

export const LcProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async (data: any) => {
    alert(data.name);
  };
  console.log(errors);
  return (
    <form
      className="mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative ">
        <div>Имя</div>
        <InputNameMask error={!!errors.name} register={register} name="name" />
        {errors.name && (
          // @ts-ignore
          <div className="absolute text-red">{errors.name.message}</div>
        )}
      </div>
      <div className="relative mt-[18px]">
        <div>Имя</div>
        <InputNameMask error={!!errors.surname} register={register} name="surname" />
        {errors.surname && (
          // @ts-ignore
          <div className="absolute text-red">{errors.surname.message}</div>
        )}
      </div>
      <div className="relative mt-[18px]">
        <div>Дата</div>
        <InputDateMask error={!!errors.date} register={register} name="date" />
        {errors.date && (
          // @ts-ignore
          <div className="absolute text-red">{errors.date.message}</div>
        )}
      </div>

      <div className="relative mt-[18px]">
        <div>E-mail</div>
        <input
          {...register("mail")}
          className={classNames(s.input, errors.mail && s.error)}
        />
        {errors.mail && (
          //@ts-ignore
          <div className="absolute text-red">{errors.mail?.message}</div>
        )}

      </div>
      <div className="relative mt-[18px]">
        <div>Телефон</div>
        <PhoneInput register={register} name="phone" error={!!errors.phone} />
        {errors.phone && (
          //@ts-ignore
          <div className="absolute text-red">{errors.phone?.message}</div>
        )}

      </div>


      <div className="w-[267px] max-[470px]:w-full mt-5">
        <Button.Primary>
          Сохранить изменения
        </Button.Primary>
      </div>

    </form>
  );
};
