import React from 'react';
import s from '@/source/features/add-address-cdek/ui/indexx.module.scss';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@shared/theme/button';
import { Autocomplete } from '@shared/theme/autocomplete/ui/autocomplete';
import {
  $autocompleteError,
  $isMainAddress,
  courierAutocomplete,
  createCourierAddressFx,
  Fields,
  formSubmitted,
  mainAddressClicked,
} from '@/source/features/add-address-courier/model/add-address-courier-model';
import { useUnit } from 'effector-react';
import { Checkbox } from '@shared/ui/shadcn/ui/checkbox';

const schema = yup.object().shape({});

export const AddAddressCourier = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Fields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Fields) => {
    formSubmitted(data);
  };

  const autocompleteError = useUnit($autocompleteError);
  const loading = useUnit(createCourierAddressFx.pending);
  const isMainAddress = useUnit($isMainAddress);

  const handleMainAddressClicked = () => {
    mainAddressClicked();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5">
        <div className="text-[14px]">Начните вводить адрес</div>
        <span>
          <Autocomplete model={courierAutocomplete} className="mt-1" placeholder="Аддрес дома" />
          {autocompleteError && <div className="text-red absolute text-[12px]">{autocompleteError}</div>}
        </span>
      </div>
      <div className="mt-5">
        <div className="text-[14px] mb-1">Квартира</div>
        <span>
          <input {...register('apartment')} className={classNames(s.input, errors.apartment && s.error)} />
          {errors.apartment && <div className="text-red absolute text-[12px]">{errors.apartment?.message}</div>}
        </span>
      </div>
      <div className="mt-5">
        <div className="text-[14px] mb-1">Этаж</div>
        <span>
          <input {...register('floor')} className={classNames(s.input, errors.floor && s.error)} />
          {errors.floor && <div className="text-red absolute text-[12px]">{errors.floor?.message}</div>}
        </span>
      </div>
      <div className="mt-5">
        <div className="text-[14px] mb-1">Домофон</div>
        <span>
          <input {...register('intercom')} className={classNames(s.input, errors.intercom && s.error)} />
          {errors.intercom && <div className="text-red absolute text-[12px]">{errors.intercom?.message}</div>}
        </span>
      </div>
      <div className="flex gap-2.5 items-center mb-[22px] mt-[22px]">
        <Checkbox checked={isMainAddress} onClick={handleMainAddressClicked} />
        <div onClick={handleMainAddressClicked} className="cursor-pointer select-none">
          <p className="text-[12px] font-medium uppercase">Основной адрес</p>
        </div>
      </div>
      <div className="mt-7 max-[470px]:w-full w-[221px]">
        <Button.Primary type="submit" disabled={loading} loading={loading}>
          добавить адрес
        </Button.Primary>
      </div>
    </form>
  );
};
