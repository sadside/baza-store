'use client';
import { Autocomplete } from '@shared/theme/autocomplete/ui/autocomplete';
import React, { useEffect } from 'react';
import { useUnit } from 'effector-react';
import {
  $apartment,
  $autocompleteError,
  $floor_number,
  $intercom,
  $selectTariffError,
  apartmentChanged,
  floorNumberChanged,
  intercomChanged,
  personalFormSubmitted,
  selectPersonalPickUpAutocomplete,
  tariffSelect,
} from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/model/pickup-not-selected';
import { twMerge } from 'tailwind-merge';
import { Select } from '@/source/features/add-address-cdek/ui/select/ui/select';

export const Personal = () => {
  const error = useUnit($autocompleteError);

  const apartment = useUnit($apartment);
  const floor = useUnit($floor_number);
  const intercom = useUnit($intercom);

  const selectError = useUnit($selectTariffError);

  useEffect(() => {
    return () => {
      apartmentChanged('');
      floorNumberChanged('');
      intercomChanged('');
    };
  }, []);

  return (
    <div>
      <div className="mt-5">
        <div className="text-[14px]">Начните вводить адрес</div>
        <span>
          <Autocomplete model={selectPersonalPickUpAutocomplete} className="mt-1 w-[544px]" />
          {error && <div className="text-red text-[12px] mt-1">{error}</div>}
        </span>
      </div>
      <div className="flex justify-between gap-3 max-w-[544px]">
        <div className="mt-5">
          <div className="text-[14px] mb-1">Квартира</div>
          <span>
            <input
              className={twMerge(
                'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none mb-0.5'
              )}
              value={apartment}
              type="number"
              onChange={(e) => apartmentChanged(e.target.value)}
            />
          </span>
        </div>
        <div className="mt-5">
          <div className="text-[14px] mb-1">Этаж</div>
          <span>
            <input
              className={twMerge(
                'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none mb-0.5'
              )}
              value={floor}
              type="number"
              onChange={(e) => floorNumberChanged(e.target.value)}
            />
          </span>
        </div>
        <div className="mt-5">
          <div className="text-[14px] mb-1">Домофон</div>
          <span>
            <input
              className={twMerge(
                'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none mb-0.5'
              )}
              value={intercom}
              type="number"
              onChange={(e) => intercomChanged(e.target.value)}
            />
          </span>
        </div>
      </div>
      <div className="mt-2.5 max-w-[544px]">
        <div className="text-[14px] mb-1">Тариф доставки</div>
        <Select
          placeholder="Выберите тариф доставки"
          className={twMerge('mt-1 w-full', selectError && 'text-red animate-shake animate-delay-100')}
          model={tariffSelect}
        />
      </div>
    </div>
  );
};
