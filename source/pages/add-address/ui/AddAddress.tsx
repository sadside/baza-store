"use client";
import React from "react";
import { useUnit } from "effector-react";
import { AddAddressCdek } from "@/source/features/add-address-cdek";
import { AddAddressCourier } from "@/source/features/add-address-courier";
import { Select } from "@/source/features/add-address-cdek/ui/select/ui/select";
import { deliveryTypeSelect } from "@pages/add-address/model/add-address-model";

export const AddAddress = () => {
  const deliveryType = useUnit(deliveryTypeSelect.$selectedItem);
  return (
    <div>
      <div className="uppercase font-medium">Новый адрес</div>
      <div className="font-medium text-[12px] mt-1.5">
        Добавьте Ваши адреса и удобные способы доставки для быстрого оформления покупок.
      </div>
      <div className="mt-5 mb-1 text-[14px]">Способ получения</div>
      <Select model={deliveryTypeSelect} placeholder="Выберите способ получения"
              className=" max-[465px]:w-full w-[425px]" />
      {deliveryType?.type === "cdek" && <AddAddressCdek />}
      {deliveryType?.type === "personal" && <AddAddressCourier />}
    </div>
  );
};
