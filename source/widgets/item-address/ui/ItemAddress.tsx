import React from 'react';
import { AddressItemInfo } from '@entities/address-items-info';
import { AddressItemActions } from '@/source/features/address-item-actions';
import { Address } from '@shared/api/__generated__/generated-api.schemas';
import { ShowModalAddress } from '@entities/show-modal-address';
import { deleteAddressesFx } from '@entities/address/model/address-model';
import { twMerge } from 'tailwind-merge';

type ItemAddressProps = {
  address: Address;
};

export const ItemAddress = ({ address }: ItemAddressProps) => {
  return (
    <div
      className={twMerge(
        'border-[1px] border-backBazaLogo px-[20px] py-[20px] flex mt-5 justify-between',
        address.is_main && 'border-black'
      )}
    >
      <AddressItemInfo address={address} />
      <AddressItemActions id={address.id} />
    </div>
  );
};
