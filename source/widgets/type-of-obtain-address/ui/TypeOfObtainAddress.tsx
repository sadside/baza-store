"use client";
import React from "react";
import { Select } from "@shared/ui/select";
import { useUnit } from "effector-react";
import { $activeTypeAddressesSelf, changeTypeAddresses } from "@/stores/addresses/init";

export const TypeOfObtainAddress = () => {
  const value = useUnit($activeTypeAddressesSelf);
  const options = [
    {
      name: "в пункте сдэк",
      value: "cdek"
    },
    {
      name: "Курьером",
      value: "personal"
    }
  ];
  // @ts-ignore
  return (
    <div>
      <div className="mt-5">Способ получения</div>
      <div className="w-[463.63px] max-[470px]:w-full">
        {
          // @ts-ignore
          <Select
            onChange={(e: any) => changeTypeAddresses(e.target.value)}
            value={value}
            color={"white"}
            options={options}
          />
        }
      </div>
    </div>
  );
};
