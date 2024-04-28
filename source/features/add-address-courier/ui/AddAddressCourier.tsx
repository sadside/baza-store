import React from 'react';
import s from '@/source/features/add-address-cdek/ui/indexx.module.scss';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@shared/theme/button';

const schema = yup.object().shape({
  address: yup.string().required('Введите адрес'),
  apartment: yup.string().required('Введите номер квартиры'),
  floor: yup.string().required('Введите этаж'),
  intercom: yup.string().required('Введите домофон'),
});
export const AddAddressCourier = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form>
      <div className="mt-5">
        <div>Начните вводить адрес</div>
        <span>
          <input {...register('address')} className={classNames(s.input, errors.address && s.error)} />
          {errors.address && (
            //@ts-ignore
            <div className="text-red absolute">{errors.address?.message}</div>
          )}
        </span>
      </div>
      <div className="mt-5">
        <div>Квартира</div>
        <span>
          <input {...register('apartment')} className={classNames(s.input, errors.apartment && s.error)} />
          {errors.apartment && (
            //@ts-ignore
            <div className="text-red absolute">{errors.apartment?.message}</div>
          )}
        </span>
      </div>
      <div className="mt-5">
        <div>Этаж</div>
        <span>
          <input {...register('floor')} className={classNames(s.input, errors.floor && s.error)} />
          {errors.floor && (
            //@ts-ignore
            <div className="text-red absolute">{errors.floor?.message}</div>
          )}
        </span>
      </div>
      <div className="mt-5">
        <div>Домофон</div>
        <span>
          <input {...register('intercom')} className={classNames(s.input, errors.intercom && s.error)} />
          {errors.intercom && (
            //@ts-ignore
            <div className="text-red absolute">{errors.intercom?.message}</div>
          )}
        </span>
      </div>
      <div className="mt-7 max-[470px]:w-full w-[221px]">
        <Button.Primary> добавить адрес</Button.Primary>
      </div>
    </form>
  );
};
