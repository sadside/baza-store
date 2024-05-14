import { Address } from "@shared/api/__generated__/generated-api.schemas";
import React from "react";
import { Pickup, pickupChangeClicked } from "@widgets/create-order-form/model/second-step/step";

type Props = {
  address: Pickup;
};

const addressDeliveryType: Record<"cdek" | "personal" | "pickup", string> = {
  ["cdek"]: "В пункте ПВЗ СДЕК",
  ["personal"]: "Курьером",
  ["pickup"]: "В магазине BAZA"
};

export const AddressItem = ({ address }: Props) => {
  return (
    <div className=" border-[1px] border-backBazaLogo px-[20px] py-[20px] flex mt-5 justify-between">
      <div className="text-[12px] ">
        <div className="font-medium ">Способ получения</div>
        <div className="font-semibold uppercase">
          {addressDeliveryType[address.type as "cdek" | "personal" | "pickup"]}
        </div>
        <div className="font-medium mt-[16px]">Адрес</div>
        <div className="font-semibold uppercase ">{address.address}</div>
      </div>
      <div className="flex items-start text-[12px] text-black-300">
        <button className="mr-2.5" onClick={() => pickupChangeClicked()}>
          Изменить
        </button>
      </div>
    </div>
  );
};
