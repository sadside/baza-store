import { Autocomplete } from '@shared/theme/autocomplete/ui/autocomplete';
import {
  $cdekAutocompleteError,
  $selectCdekError,
  $showPointsSelect,
  cdekPointsSelect,
  cityForCdekAutocomplete,
} from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/model/pickup-not-selected';
import { Select } from '@/source/features/add-address-cdek/ui/select/ui/select';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useUnit } from 'effector-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Cdek = () => {
  const { $selectedItem } = cdekPointsSelect;

  const isSelectVisible = useUnit($showPointsSelect);
  const selectedPoint = useUnit($selectedItem);
  const error = useUnit($cdekAutocompleteError);

  const selectError = useUnit($selectCdekError);

  return (
    <YMaps>
      <div className="max-w-[544px]">
        <div className="mt-5 mb-5">
          <div className="text-[14px] mb-1">Введите город</div>
          <Autocomplete placeholder="Адрес ПВЗ СДЕК" className="mt-1 w-full" model={cityForCdekAutocomplete} />
          {error && <div className="text-red text-[12px] mt-1">{error}</div>}
        </div>
        {isSelectVisible && (
          <>
            <div className="text-[14px] mb-1">Выберите ПВЗ СДЕК</div>
            <Select
              model={cdekPointsSelect}
              placeholder="Ничего не выбрано"
              className={twMerge('w-full', selectError && 'text-red animate-shake animate-delay-100')}
            />
          </>
        )}
        {selectedPoint && (
          <div className="max-[470px]:w-full w-[425px] h-[300px] mt-4 relative overflow-y-hidden">
            <Map
              state={{ center: [selectedPoint.latitude, selectedPoint.longitude], zoom: 16 }}
              className="w-full h-[300px] absolute bottom-[100%]"
            >
              <Placemark
                geometry={[selectedPoint.latitude, selectedPoint.longitude]}
                options={{
                  preset: 'islands#darkGreenDotIcon',
                }}
              />
            </Map>
          </div>
        )}
      </div>
    </YMaps>
  );
};
