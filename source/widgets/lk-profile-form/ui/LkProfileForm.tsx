'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputNameMask } from '@/components/inputNameMask/InputNameMask';
import { Button } from '@shared/theme/button';
import { InputDateMask } from '@/components/InputDateMask/InputDateMask';
import s from '@/components/LcForm/LcForm.module.scss';
import classNames from 'classnames';
import { PhoneInput } from '@shared/ui/PhoneInput';
import { useUnit } from 'effector-react';
import { IUser } from '@shared/types/models/User';
import { handlePhoneInput } from '@shared/ui/PhoneInput/lib/inputLogic';
import { $user, postUserFx, userInfoEdited } from '@entities/user/model/user-model';

const schema = yup.object().shape({
  name: yup.string().required('Введите имя'),
  surname: yup.string().required('Введите Фамилию'),
  date: yup.string().required('Введите дату рождения').min(10, 'Введите дату в формате дд.мм.гггг'),
  mail: yup.string().required('Введите почту').email('Введите корректную почту'),
  phone: yup.string().required('Введите номер телефона').min(5, 'Введите номер телефона'),
});

export type ProfileFormFields = {
  name: string;
  surname: string;
  date: string;
  mail: string;
  phone?: string;
};

export const LcProfileForm = () => {
  const user = useUnit($user) as IUser;
  const loading = useUnit(postUserFx.pending);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name || '',
      surname: user?.surname,
      mail: user?.email,
      phone: user?.phone.startsWith('8') ? user.phone.slice(1) : user.phone,
      date: user?.birthday_date,
    },
  });

  const onSubmit = async (data: ProfileFormFields) => userInfoEdited(data);

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div>Имя</div>
        <InputNameMask error={!!errors.name} register={register} name="name" className="w-[425px]" />
        {errors.name && <div className="absolute text-red">{errors.name.message}</div>}
      </div>
      <div className="relative mt-[18px]">
        <div>Фамилия</div>
        <InputNameMask error={!!errors.surname} register={register} name="surname" className="w-[425px]" />
        {errors.surname && <div className="absolute text-red">{errors.surname.message}</div>}
      </div>
      <div className="relative mt-[18px]">
        <div>Дата </div>
        <InputDateMask error={!!errors.date} register={register} name="date" className="w-[425px]" />
        {errors.date && <div className="absolute text-red">{errors.date.message}</div>}
      </div>

      <div className="relative mt-[18px]">
        <div>E-mail</div>
        <input {...register('mail')} className={classNames(s.input, errors.mail && s.error, 'w-[425px]')} />
        {errors.mail && <div className="absolute text-red">{errors.mail?.message}</div>}
      </div>
      <div className="relative mt-[18px]">
        <div>Телефон</div>
        <PhoneInput register={register} name="phone" error={!!errors.phone} disabled={true} className="w-[425px]" />
        {errors.phone && <div className="absolute text-red">{errors.phone?.message}</div>}
      </div>

      <div className="w-[267px] max-[470px]:w-full mt-5">
        <Button.Primary type="submit" loading={loading} disabled={loading}>
          Сохранить изменения
        </Button.Primary>
      </div>
    </form>
  );
};
