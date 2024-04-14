import React from "react";
import { changeVisibleAddress } from "@/stores/areYouSure/address";


export const AddressItemActions = () => {
  return (
    <div className="flex items-start text-[12px] text-black-300">
      <button className="mr-2.5">Изменить</button>
      <button onClick={() => changeVisibleAddress(true)}>Удалить</button>
    </div>
  );
};

