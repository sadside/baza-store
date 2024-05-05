'use client';

import { Button } from '@shared/theme/button';
import { Autocomplete } from '@shared/theme/autocomplete/ui/autocomplete';
import {
  $isMainAddress,
  $showPointsSelect,
  buttonClicked,
  cdekPointsSelect,
  cityForCdekAutocomplete,
  createCdekAddressFx,
  mainAddressClicked,
} from '@/source/features/add-address-cdek/model/add-address-cdek';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useUnit } from 'effector-react';
import { Select } from '@/source/features/add-address-cdek/ui/select/ui/select';
import { Checkbox } from '@shared/ui/shadcn/ui/checkbox';

export const AddAddressCdek = () => {
  const { $selectedItem } = cdekPointsSelect;

  const isSelectVisible = useUnit($showPointsSelect);
  const selectedPoint = useUnit($selectedItem);
  const loading = useUnit(createCdekAddressFx.pending);
  const isMainAddress = useUnit($isMainAddress);

  const handleMainAddressClicked = () => {
    mainAddressClicked();
  };
  return (
    <YMaps>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-5 mb-5">
          <div className="text-[14px] mb-1">Введите город</div>
          <Autocomplete
            placeholder="Адрес ПВЗ СДЕК"
            className="mt-1 max-[470px]:w-full"
            model={cityForCdekAutocomplete}
          />
        </div>
        {isSelectVisible && (
          <>
            <div className="text-[14px] mb-1">Выберите ПВЗ СДЕК</div>
            <Select model={cdekPointsSelect} placeholder="Ничего не выбрано" className="w-[425px]" />
          </>
        )}
        {selectedPoint && (
          <>
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
            <div className="flex gap-2.5 items-center my-[22px]">
              <Checkbox checked={isMainAddress} onClick={handleMainAddressClicked} />
              <div onClick={handleMainAddressClicked} className="cursor-pointer select-none">
                <p className="text-[12px] font-medium uppercase">Основной адрес</p>
              </div>
            </div>
          </>
        )}
        <div className="mt-7 max-[470px]:w-full w-[221px]">
          <Button.Primary disabled={!selectedPoint || loading} onClick={() => buttonClicked()} loading={loading}>
            добавить адрес
          </Button.Primary>
        </div>
      </form>
    </YMaps>
  );
};
