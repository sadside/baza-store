import React from 'react';
import SvgSelector from '@shared/utils/SvgSelector';
import { ItemHistory } from '@shared/ui/item-history-loyalty';
import Link from 'next/link';
import { useUnit } from 'effector-react';
import { $loyaltyHistory } from '@entities/loyalty/model/loyalty-model';

export const HistoryLoyalty = () => {
  const loyaltyHistory = useUnit($loyaltyHistory);
  return (
    <div className="mt-5">
      <div className=" flex justify-between ">
        <div className="font-medium uppercase">История баллов</div>
        <button>
          <SvgSelector id={'arrow'} />
        </button>
      </div>
      <div className="mt-5">
        {loyaltyHistory && loyaltyHistory?.length > 0 ? (
          <>
            <div className="uppercase font-medium text-[12px] grid grid-cols-4">
              <div className="text-center">Дата и время</div>
              <div className="text-center">Операция</div>
              <div className="text-center">История</div>
              <div className="text-center">итого</div>
            </div>
            {loyaltyHistory?.map((item) => <ItemHistory historyItem={item} key={item.user_id} />)}
          </>
        ) : (
          <div className="h-[56px] flex items-center justify-center">
            <p className="uppercase text-black-100">История отсутствует</p>
          </div>
        )}
      </div>
      <div className="text-black-200 mt-5 text-[12px]">
        Узнайте больше о программе лояльности и условиях получения бонусов на{' '}
        <Link className="text-black" href="/">
          специальной странице.
        </Link>
      </div>
    </div>
  );
};
