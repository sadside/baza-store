"use client";
import React from "react";
import { ItemAddress } from "@widgets/item-address";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $addresses } from "@entities/address/model/address-model";
import { RemoveAddressConfirm } from "@/source/features/remove-address-confirm/ui/remove-address-confirm";

export const AddressesPage = () => {
  const address = useUnit($addresses);
  console.log(address, 'adress')
  return (
    <>
      <div>
        <div className="uppercase font-medium">Адреса</div>
        <div className="font-medium text-[12px]">
          Добавьте Ваши адреса и удобные способы доставки для быстрого оформления покупок.
        </div>
      </div>
      {!address?.length ? (
        <div className="mt-8 w-[251px]">
          <Link
            className="uppercase px-[50px] font-semibold py-[14px] text-[12px] bg-black text-white"
            href={"/lk/addresses/add"}
          >
            добавить адрес
          </Link>
        </div>
      ) : (
        <div className="mt-5">
          {address.map((address) => (
            <ItemAddress key={address.id} address={address} />
          ))}
          <div className="mt-7"></div>
          <Link
            className="uppercase px-[50px]  font-semibold border-[1px] border-black w-full flex justify-center	 py-[14px] text-[12px] bg-white text-black"
            href={"/lk/addresses/add"}
          >
            добавить адрес
          </Link>
        </div>
      )}
      <RemoveAddressConfirm />
    </>
  );
};
