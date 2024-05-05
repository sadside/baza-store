import React from 'react';
import { useUnit } from 'effector-react';
import { $loyalty } from '@entities/loyalty/model/loyalty-model';

export const BonusLoyalty = () => {
  const loyaltyInfo = useUnit($loyalty);

  return (
    <div className="flex w-full h-[74px">
      <div className="h-[74px] w-1/2 bg-black-5 flex-col flex justify-center items-center ">
        <span className="font-semibold">{loyaltyInfo?.balance ? loyaltyInfo?.balance / 100 : 0}</span>
        <span> Активных баллов</span>
      </div>
      <div className="w-1/2 ml-2 bg-black-5 flex-col flex justify-center items-center text-[#777777]">
        <span className="font-semibold">{loyaltyInfo?.awaiting_balance ? loyaltyInfo?.awaiting_balance / 100 : 0}</span>
        <span> В ожидании</span>
      </div>
    </div>
  );
};
