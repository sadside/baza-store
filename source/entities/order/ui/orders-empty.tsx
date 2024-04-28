'use client';
import { Button } from '@shared/theme/button';
import Link from 'next/link';
import React from 'react';

export const OrdersEmpty = () => {
  return (
    <div className="mb-10">
      <h2 className="font-medium text-[14px] leading-5 uppercase">Актуальные заказы</h2>
      <div className=" ont-medium text-[12px] mt-2.5 mb-7">
        У вас пока нет заказов.
        <br />
        Для оформления перейдите в каталог
      </div>
      <Link href={'/'}>
        <Button.Primary width={240}>Перейти в каталог</Button.Primary>
      </Link>
    </div>
  );
};
