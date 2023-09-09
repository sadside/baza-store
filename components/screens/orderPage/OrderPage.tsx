"use client";

import React, { useEffect } from "react";
import s from "./index.module.scss";
import { Hr } from "../../ui/hr/Hr";
import MethOplat from "../../MethOplat/MethOplat";
import Button from "../../ui/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUnit } from "effector-react";
import {
  $orderPaymentData,
  createOrderFx,
  orderPageMounted,
} from "@/stores/order/init";
import { $user } from "@/stores/cart/init";
import MethRec from "@/components/MethRec/MethRec";
import ZakazDannie from "@/components/ZakazDannie/ZakazDannie";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify";
type Props = {};

export type ZakazFormValues = {
  name: string;
  surname: string;
  mail: string;
  phone: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  surname: yup.string().required("Введите Фамилию"),
  mail: yup
    .string()
    .required("Введите почту")
    .email("Введите корректную почту"),
  phone: yup
    .string()
    .required("Введите номер телефона")
    .min(5, "Введите номер телефона"),
});

export const OrderPage = ({}: Props) => {
  let Zakaz = {
    price: { delivery: 700, cost: 12200 },
    adres: "Оренбург, Поляничко 9",
    timeOfHran: "3 Дня",
    gifted: "Забрать можно 8 февраля после 17:00",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
    setValue,
  } = useForm<ZakazFormValues>({
    resolver: yupResolver(schema),
  });

  const { push } = useRouter();

  const onSubmit = (data: ZakazFormValues) => {
    const body = {
      name: data.name,
      surname: data.surname,
      email: data.mail,
      phone: data.phone,
      receiving: "pickup",
      payment_type: "cash",
      city: null,
      street: null,
      house: null,
      frame: null,
      apartment: null,
    };

    // createOrderFx(body)
    //   .then(() => {
    //     push("/lk/orders");
    //     alert("Заказ создан!");
    //   })
    //   .catch(() => {
    //     alert("Произошла ошибка");
    //   });

    toast.promise(createOrderFx(body), {
      pending: "Создание заказа...",
      error: "Упс... При создании заказа произошла ошибка...",
      success: "Заказ успешно создан!"
    }).then(() => push('/lk/orders'))
  };

  const user = useUnit($user);

  useEffect(() => {
    orderPageMounted();
  }, []);

  const orderPaymentData = useUnit($orderPaymentData);

  useEffect(() => {
    if (user) {
      setValue("name", user?.name);
      setValue("surname", user.surname);
      setValue("phone", user?.phone);
      setValue("mail", user.email);
    }
  }, [orderPaymentData]);

  return (
    <div className={s.root}>
      <div className={s.title}>ОФОРМЛЕНИЕ ЗАКАЗА</div>
      <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.blockText}>
          <ZakazDannie
            main={true}
            title={"Данные получателя"}
            register={register}
            resetField={resetField}
            reset={reset}
            errors={errors}
          />
          <MethRec
            adres={Zakaz.adres}
            gifted={Zakaz.gifted}
            timeOfHran={Zakaz.timeOfHran}
            register={register}
            resetField={resetField}
            reset={reset}
            errors={errors}
          />
          <MethOplat />
        </div>
        <Hr />
        <div className={s.oform}>
          <div className={s.contentOform}>
            <div className={s.item}>
              <span>Стоимость </span>
              <span className={s.itemPrice}>
                {" "}
                {orderPaymentData ? orderPaymentData.price / 100 : "Загрузка"} ₽
              </span>
            </div>
            {/* <div className={s.item}>
              <span>Доставка </span>
              <span className={s.itemPrice}> {orderPaymentData ? orderPaymentData. : "Загрузка"} ₽</span>
            </div> */}
            <div className={s.item}>
              <span className={s.Itog}>Итого </span>
              <span className={s.Itog}>
                {orderPaymentData ? orderPaymentData.price / 100 : "Загрузка"} ₽
              </span>
            </div>
          </div>
          <Button text="Оформить заказ" style={{ width: "300px" }} />
        </div>
      </form>
    </div>
  );
};
