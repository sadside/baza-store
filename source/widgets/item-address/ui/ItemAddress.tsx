import React from "react";
import { AddressItemInfo } from "@entities/address-items-info";
import { AddressItemActions } from "@/source/features/address-item-actions";

type Address = {
  address: {
    typeOfObtain: string,
    address: string
  }
}

export const ItemAddress = ({ address }: Address) => {
  return (
    <div className=" border-[1px] border-backBazaLogo px-[20px] py-[20px] flex mt-5 justify-between">
      <AddressItemInfo address={address} />
      <AddressItemActions />
    </div>
  );
};

