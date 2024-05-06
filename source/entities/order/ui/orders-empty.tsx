'use client';
import { Button } from '@shared/theme/button';
import Link from 'next/link';
import React from 'react';

export const OrdersEmpty = () => {
  return (
    <div className="mb-10">
      <div className="font-medium text-[12px] mb-7">
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
