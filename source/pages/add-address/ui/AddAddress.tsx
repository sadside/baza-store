"use client";
import React from "react";
import { TypeOfObtainAddress } from "@widgets/type-of-obtain-address";
import { useUnit } from "effector-react";
import { $activeTypeAddressesSelf } from "@/stores/addresses/init";
import { AddAddressCdek } from "@/source/features/add-address-cdek";
import { AddAddressCourier } from "@/source/features/add-address-courier";

export const AddAddress = () => {
  const typeOfObtain = useUnit($activeTypeAddressesSelf);
  console.log(typeOfObtain);
  return (
    <div>
      <div className="uppercase font-medium">Новый адрес</div>
      <div className="font-medium text-[12px] mt-1.5">Добавьте Ваши адреса и удобные способы доставки для быстрого
        оформления покупок.
      </div>
      <TypeOfObtainAddress />
      {
        typeOfObtain === "cdek" ?
          <>
            <AddAddressCdek />
          </>
          :
          <>
            <AddAddressCourier />
          </>
      }
    </div>
  );
};

