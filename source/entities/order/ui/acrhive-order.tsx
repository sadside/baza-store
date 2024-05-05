'use client';

import React from 'react';
import { StateOrderLk } from '@shared/ui/state-order-lk';
import { getLkOrderPrice } from '@shared/utils/getLkOrderPrice';
import { CardProductLk } from '@entities/card-product-lk';
import { ViewOrder, ViewOrderStatusEnum } from '@shared/api/__generated__/generated-api.schemas';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { formatter } from '@/components/productItem/ProductItem';

interface LkActualInfoProps {
  order: ViewOrder;
}

export const ArchiveOrder = ({ order }: LkActualInfoProps) => {
  return (
    <div className="mt-2.5">
      <div className="flex items-center">
        <StateOrderLk status={order.status as ViewOrderStatusEnum} />
        <div className="flex ml-5 justify-between w-[91%] max-[1050px]:w-[85%]  max-[850px]:w-[80%]   max-[630px]:w-[75%] max-[540px]:w-[68%] max-[550px]:flex-col">
          <div className="flex">
            <span className="font-semibold mr-2">{order.id}</span>
            <span className=" text-black-300  ">
              {format(new Date(order.order_date?.split('T')[0] || ''), 'd MMMM yyyy', {
                // @ts-ignore
                locale: ru,
              })}
            </span>
          </div>
          <div>
            <span className=" text-black-300  ">
              {formatter.format(order.products.length || 1).replace('метр', 'товар')}
            </span>
            <span className="font-semibold ml-2">{getLkOrderPrice(order.products)}</span>
          </div>
        </div>
      </div>
      <div className="flex mt-5 flex-wrap justify-around	">
        {//@ts-ignore
        order?.products?.map((product) => <CardProductLk key={product.product.id} product={product} />)}
      </div>
    </div>
  );
};
