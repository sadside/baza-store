import React from 'react';
import { Address } from '@shared/api/__generated__/generated-api.schemas';

type Props = {
  address: Address;
};

const addressDeliveryType: Record<'cdek' | 'personal', string> = {
  ['cdek']: 'В пункте ПВЗ СДЕК',
  ['personal']: 'Курьером',
};

export const AddressItemInfo = ({ address }: Props) => {
  return (
    <div className="text-[12px] ">
      <div className="font-medium ">Способ получения</div>
      <div className="font-semibold uppercase">
        {
          //@ts-ignore
          addressDeliveryType[address.type]
        }
      </div>
      <div className="font-medium mt-[16px]">Адрес</div>
      <div className="font-semibold uppercase ">{address.address}</div>
    </div>
  );
};
