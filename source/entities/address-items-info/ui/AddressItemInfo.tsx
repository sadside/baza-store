import React from "react";

type Props = {
  address: {
    typeOfObtain: string
    address: string
  }

}

export const AddressItemInfo = ({ address }: Props) => {
  return (
    <div className="text-[12px] ">
      <div className="font-medium ">Способ получения</div>
      <div className="font-semibold uppercase">{address.typeOfObtain}</div>
      <div className="font-medium mt-[16px]">Адрес</div>
      <div className="font-semibold uppercase ">{address.address}</div>
    </div>
  );
};

