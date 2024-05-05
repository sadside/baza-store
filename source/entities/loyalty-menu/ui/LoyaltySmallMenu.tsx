'use client';
import { useUnit } from 'effector-react';
import { $loyalty, getLoyaltyInfoFx } from '@entities/loyalty/model/loyalty-model';
import { Loader } from '@/components/loader/Loader';

export const LoyaltySmallMenu = () => {
  const userLoyalty = useUnit($loyalty);

  const loading = useUnit(getLoyaltyInfoFx.pending);

  if (loading || !userLoyalty) {
    return (
      <div className="h-[68px] bg-black-5 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (userLoyalty)
    return (
      <div className="w-full flex justify-between max-[400px]:px-[10px] px-[20px] py-[10px]  bg-black-5">
        <div className="">
          <div className="font-semibold uppercase">{userLoyalty?.status || 'black'}</div>
          <div className="text-black-400">Ваш статус</div>
        </div>
        <div className="">
          <div className="flex justify-end">
            <span className="font-medium mr-1">Активных бонусов </span>
            <span className="font-semibold"> {userLoyalty?.balance || 0}</span>
          </div>
          <div className="flex justify-end text-black-200">
            Ожидают подтверждения <span className="font-semibold ml-1"> {userLoyalty?.awaiting_balance || 0}</span>
          </div>
        </div>
      </div>
    );

  return <></>;
};
