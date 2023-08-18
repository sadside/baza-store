import React from "react";
import s from "./index.module.scss";
import { useForm } from "react-hook-form";
import { RegisterFormValues } from "@/components/screens/authPage/AuthPage";
import InputForm from "@/components/inputForm/InputForm";

interface IProps {
  title?: string;
  main?: boolean;
}
const ZakazDannie = ({ title, main }: IProps) => {
  let aaaarrrr = {
    main: [
      { val: "Геннадий", type: "name" },
      { val: "Васькин", type: "surname" },
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
    resetField,
  } = useForm<RegisterFormValues>({
    defaultValues: defValMain,
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className={s.root}>
      <span>{title}</span>
      <form className={s.inputs} onSubmit={handleSubmit(onSubmit)}>
        {main
          ? aaaarrrr.main.map((p) => {
              // @ts-ignore
              return (
                <InputForm
                  //@ts-ignore
                  error={errors[p.type] && errors[p.type].message}
                  register={register}
                  type={p.type}
                  reset={resetField}
                  form={true}
                />
              );
            })
          : aaaarrrr.adres.map((p) => {
              // @ts-ignore
              return (
                <InputForm
                  //@ts-ignore
                  error={errors[p.type] && errors[p.type].message}
                  register={register}
                  type={p.type}
                  reset={resetField}
                  form={true}
                />
              );
            })}
      </form>
    </div>
  );
};

export default ZakazDannie;
