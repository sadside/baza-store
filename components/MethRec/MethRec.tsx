"use client";

import React from "react";
import s from "./index.module.scss";
import ZakazDannie from "../ZakazDannie/ZakazDannie";
import { useUnit } from "effector-react";
import { $activeMeth, clickSam, clickDost } from "@/stores/zakaz/init";
type Props = {
  adres: string;
  timeOfHran: string;
  gifted: string;
  errors?: any;
  reset?: any;
  register?: any;
  resetField?: any;
};
const MethRec = ({
  adres,
  timeOfHran,
  gifted,
  errors,
  reset,
  register,
  resetField,
}: Props) => {
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
  const method = useUnit($activeMeth);
  return (
    <>
      <div className={s.root}>
        <span className={s.poluch}>Способ получения</span>
        <ul>
          <li
            onClick={() => clickSam()}
            className={method === "pickup" ? s.active : undefined}
          >
            Самовывоз
          </li>
          <li
            onClick={() => clickDost()}
            className={method === "delivery_address" ? s.active : undefined}
          >
            Доставка
          </li>
        </ul>
        {method === "pickup" && (
          <div className={s.sam}>
            <div className={s.content}>
              <div className={s.card}>
                <span className={s.title}>Пункт выдачи BAZA STORE</span>
                <span className={s.adres}>{adres}</span>
                <div className={s.frame}>
                  <span className={s.bolt}>Работает:</span>
                  <span className={s.def}>Ежедневно с 09:00 до 20:00</span>
                </div>
                <div className={s.frame}>
                  <span className={s.bolt}>Срок хранения:</span>
                  <span className={s.def}>{timeOfHran}</span>
                </div>
                <span className={s.bottom}>{gifted}</span>
              </div>
              <iframe
                className={s.img}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd70a90e377a46f5f3040a4a6915c917266450f70d058a8f1f6aa6c555bb1b53&amp;source=constructor"
                width="359"
                height="327"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        )}
        {method === "delivery_address" && (
          <ZakazDannie
            register={register}
            resetField={resetField}
            reset={reset}
            setValue={null}
            errors={errors}
          />
        )}
      </div>
    </>
  );
};

export default MethRec;
