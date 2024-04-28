'use client';
import React from 'react';
import { ItemAddress } from '@widgets/item-address';
import Link from 'next/link';
import { ShowModalAddress } from '@entities/show-modal-address';

export const AddressesPage = () => {
  const address = [
    {
      typeOfObtain: 'доставка в пвз сдэк',
      address: 'Оренбург, Поляничко 9',
      id: 1,
    },
    {
      typeOfObtain: 'доставка в пвз сдэк',
      address: 'Оренбург, Поляничко 9',
      id: 3,
    },
    {
      typeOfObtain: 'доставка в пвз сдэк',
      address: 'Оренбург, Поляничко 9',
      id: 3,
    },
  ];
  return (
    <>
      <div>
        <div className="uppercase font-medium">Адреса</div>
        <div className="font-medium text-[12px]">
          Добавьте Ваши адреса и удобные способы доставки для быстрого оформления покупок.
        </div>
      </div>
      {!address[0] ? (
        <div className="mt-8 w-[251px]">
          <Link
            className="uppercase px-[50px] font-semibold py-[14px] text-[12px] bg-black text-white"
            href={'/lk/addresses/add'}
          >
            добавить адрес
          </Link>
        </div>
      ) : (
        <div className="mt-5">
          {address.map((a) => (
            <ItemAddress key={a.id} address={a} />
          ))}
          <div className="mt-7"></div>
          <Link
            className="uppercase px-[50px]  font-semibold border-[1px] border-black w-full flex justify-center	 py-[14px] text-[12px] bg-white text-black"
            href={'/lk/addresses/add'}
          >
            добавить адрес
          </Link>
        </div>
      )}
      <ShowModalAddress func={() => console.log()} text={'Удалить адрес?'} />
    </>
  );
};
