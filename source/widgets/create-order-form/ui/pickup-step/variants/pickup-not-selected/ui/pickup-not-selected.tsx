import { twMerge } from 'tailwind-merge';
import { useUnit } from 'effector-react';
import {
  $activeTab,
  $orderComment,
  orderCommentChanged,
  tabChanged,
} from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/model/pickup-not-selected';
import { Personal } from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/personal';
import { Cdek } from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/cdek';
import { InShop } from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/inShop';
import { Button } from '@shared/theme/button';
import React from 'react';
import { mainFormSubmitted } from '@widgets/create-order-form/model/second-step/step';
import { $order } from '@widgets/create-order-form/model/create-order-model';

export const PickupNotSelected = () => {
  const activeTab = useUnit($activeTab);
  const orderComment = useUnit($orderComment);
  const order = useUnit($order);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div
          className={twMerge(
            'flex flex-col items-center border-b border-black-100 flex-1 hover:bg-black-5 cursor-pointer transition-all duration-500 pt-1.5',
            activeTab === 'personal' && 'border-black'
          )}
          onClick={() => tabChanged('personal')}
        >
          <div className={twMerge('text-black-100 font-semibold uppercase', activeTab === 'personal' && 'text-black')}>
            Курьером
          </div>
          <div className={twMerge('text-black-200 text-[10px] font-medium mb-1.5 uppercase')}>от 1200 ₽</div>
        </div>
        <div
          className={twMerge(
            'flex justify-between flex-col items-center border-b border-black-100 flex-1 hover:bg-black-5 cursor-pointer transition-all duration-500 pt-1.5',
            activeTab === 'cdek' && 'border-black'
          )}
          onClick={() => tabChanged('cdek')}
        >
          <div className={twMerge('text-black-100 font-semibold uppercase', activeTab === 'cdek' && 'text-black')}>
            В пункте сдэк
          </div>
          <div className={twMerge('text-black-200 text-[10px] font-medium mb-1.5 uppercase')}>800 ₽</div>
        </div>
        <div
          className={twMerge(
            'flex justify-between flex-col items-center border-b border-black-100 flex-1 hover:bg-black-5 cursor-pointer transition-all duration-500 pt-1.5',
            activeTab === 'inShop' && 'border-black'
          )}
          onClick={() => tabChanged('inShop')}
        >
          <div className={twMerge('text-black-100 font-semibold uppercase', activeTab === 'inShop' && 'text-black')}>
            В магазине
          </div>
          <div className={twMerge('text-black-200 text-[10px] font-medium mb-1.5 uppercase')}>БЕСПЛАТНО</div>
        </div>
      </div>
      {activeTab === 'personal' && <Personal />}
      {activeTab === 'cdek' && <Cdek />}
      {activeTab === 'inShop' && <InShop />}
      <div className="mt-5 max-w-[544px]">
        <div className="text-[14px] mb-1">Комментарий к заказу (необязательно)</div>
        <span>
          <textarea
            className={twMerge(
              'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none mb-0.5 h-20'
            )}
            value={orderComment}
            onChange={(e) => orderCommentChanged(e.target.value)}
          />
        </span>
      </div>
      <div className="mt-7 max-[470px]:w-full w-[221px] mb-7">
        <Button.Primary type="submit" onClick={() => mainFormSubmitted()} disabled={order?.price === 0}>
          {order?.price === 0 ? 'Выбранных товаров нет в наличии' : 'далее'}
        </Button.Primary>
      </div>
    </div>
  );
};
