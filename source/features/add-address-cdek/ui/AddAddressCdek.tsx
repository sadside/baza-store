import React from "react";
import s from "./indexx.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@shared/theme/button";

const schema = yup.object().shape({
  address: yup.string().required("Введите адрес")
});
export const AddAddressCdek = () => {
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
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 mb-5">
        <div>Начните вводить адрес</div>
        <span>
              <input
                {...register("address")}
                className={classNames(s.input, errors.address && s.error)}
              />
          {errors.address && (
            //@ts-ignore
            <div className="text-red absolute">{errors.address?.message}</div>
          )}
            </span>
      </div>
      <div className="bg-black-50 w-[425px] max-[470px]:w-full mt-7 h-[50vh]">

      </div>
      <div className="mt-7 max-[470px]:w-full w-[221px]"><Button.Primary> добавить адрес</Button.Primary></div>

    </form>
  );
};

