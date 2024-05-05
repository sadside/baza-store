import React from 'react';
import Image from 'next/image';
import { formatManyofFull } from '@shared/utils/formatMany';

import { IServerCart } from '@shared/types/models/Cart';

type Props = {
  product: IServerCart;
};

export const CardProductLk = ({ product }: Props) => {
  return (
    <div className="flex flex-col items-center w-[190px]  max-[620px]:w-[165px]">
      <Image src={product.product.image} alt="Ошибка при загрузке изображения." width={170} height={200} />
      <div className="w-[97%] font-semibold  uppercase text-[12px] flex justify-center content-center text-center	mt-2">
        {product.product.name}
      </div>
      <div className="font-medium text-[12px]">{formatManyofFull(product.product.price) + ' ₽'}</div>
    </div>
  );
};
