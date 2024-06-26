"use client";

import React, { useEffect } from "react";
import s from "./LcForm.module.scss";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputDateMask } from "../InputDateMask/InputDateMask";
import InputForm from "../inputForm/InputForm";
import { InputNameMask } from "../inputNameMask/InputNameMask";
import { useUnit } from "effector-react";
import { toast } from "react-toastify";
import { $user, postUserFx } from "@entities/user/model/user-model";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  surname: yup.string().required("Введите Фамилию"),
  date: yup.string().required("Введите дату рождения").min(10, "Введите дату в формате дд.мм.гггг"),
  mail: yup.string().required("Введите почту").email("Введите корректную почту")
  //   phone: yup
  //     .string()
  //     .required("Введите номер телефона")
  //     .min(5, "Введите номер телефона"),
});

const LcForm = () => {
  const user = useUnit($user);

  let aaaarrrr = {
    main: [
      { val: "Геннадий", type: "name" },
      { val: "Васькин", type: "surname" },
      { val: "24.04.2022", type: "dateOfBth" },
      { val: "ebanarot@gmail.com", type: "mail" }
      //   { val: "+7(123) 123‒45‒67", type: "phoneNumber" },
    ],
    adres: [
      { val: "Самара", type: "city" },
      { val: "пр-т Кирова", type: "street" },
      { val: "322a", type: "house" },
      { val: "6", type: "frame" },
      { val: "97", type: "room" }
    ]
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (user) {
      setValue("name", user?.name);
      setValue("mail", user.email);
      setValue("surname", user?.surname);
      setValue("date", user?.birthday_date);
      setValue("city", user?.city);
      setValue("street", user?.street);
      setValue("house", user?.house);
      setValue("frame", user?.frame);
      setValue("room", user?.apartment);
    }
  }, [user]);

  const onSubmit = async (data: any) => {
    toast.promise(postUserFx(data), {
      pending: "Отправка данных на сервер...",
      error: "Упс... При отправке произошла ошибка...",
      success: "Данные успешно изменены!"
    });
  };

  return (
    <form style={{ margin: "0" }} className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputs}>
        <div className={s.main}>
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
                //@ts-ignore
                <span className={s.txt}>{errors.name.message}</span>
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
                //@ts-ignore
                <span className={s.txt}>{errors.surname?.message}</span>
              )}
            </span>
          </div>
          <div className={s.all}>
            <span className={s.title}>Дата рождения*</span>
            <span className={s.prov}>
              <InputDateMask
                style={{ width: "100%" }}
                register={register}
                error={!!errors.date}
                placeholder="дд.мм.гггг"
                type={"text"}
                name="date"
              />
              {errors.date && (
                //@ts-ignore
                <span className={s.txt}>{errors.date?.message}</span>
              )}
            </span>
          </div>
          <div className={s.all}>
            <span className={s.title}>E-mail*</span>
            <span className={s.prov}>
              <input
                {...register("mail", {
                  required: "Введите E-mail"
                })}
                className={classNames(s.input, errors.mail && s.error)}
                placeholder={"Введите E-mail.."}
              />
              {errors.mail && (
                //@ts-ignore
                <span className={s.txt}>{errors.mail?.message}</span>
              )}
            </span>
          </div>
          {/* <div className={s.all}>
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
          </div> */}
        </div>
        <div className={classNames(s.main, s.right)}>
          {aaaarrrr.adres.map((p) => (
            <InputForm key={p.type} register={register} type={p.type} />
          ))}
        </div>
      </div>
      <div className={s.btns}>
        <button className={s.btn}>Сохранить</button>
        <button
          className={s.btn}
          type="button"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black"
          }}
        >
          Отменить
        </button>
      </div>
    </form>
  );
};

export default LcForm;
