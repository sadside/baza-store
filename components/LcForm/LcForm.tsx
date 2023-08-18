"use client";

import React from "react";
import s from "./LcForm.module.scss";
import { useForm } from "react-hook-form";
import Button from "../ui/button/Button";
import classNames from "classnames";
import { RegisterFormValues } from "@/components/screens/authPage/AuthPage";
import InputForm from "../inputForm/InputForm";

const LcForm = () => {
  let aaaarrrr = {
    main: [
      { val: "Геннадий", type: "name" },
      { val: "Васькин", type: "surname" },
      { val: "24.04.2022", type: "dateOfBth" },
      { val: "ebanarot@gmail.com", type: "mail" },
      { val: "+7(123) 123‒45‒67", type: "phoneNumber" },
    ],
    adres: [
      { val: "Самара", type: "city" },
      { val: "пр-т Кирова", type: "street" },
      { val: "322a", type: "house" },
      { val: "6", type: "frame" },
      { val: "97", type: "room" },
    ],
  };
  let defValMain = {
    ...Object.fromEntries(aaaarrrr.main.map((n) => [n.type, n.val])),
    ...Object.fromEntries(aaaarrrr.adres.map((n) => [n.type, n.val])),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<RegisterFormValues>({
    defaultValues: defValMain,
  });
  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputs}>
        <div className={s.main}>
          {aaaarrrr.main.map((p) => {
            // @ts-ignore
            return (
              <InputForm
                key={p.type}
                //@ts-ignore
                error={errors[p.type] ? errors[p.type].message : undefined}
                register={register}
                type={p.type}
                reset={resetField}
              />
            );
          })}
        </div>
        <div className={classNames(s.main, s.right)}>
          {aaaarrrr.adres.map((p) => (
            <InputForm key={p.type} register={register} type={p.type} />
          ))}
        </div>
      </div>
      <div className={s.btns}>
        <Button text="Сохранить" />
        <Button
          text="Отменить"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
          onClick={() => reset()}
        />
      </div>
    </form>
  );
};

export default LcForm;
