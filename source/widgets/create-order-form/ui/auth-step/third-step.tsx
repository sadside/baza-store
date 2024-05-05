import { Button } from '@shared/theme/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUnit } from 'effector-react';
import { $user, postUserFx, userInfoEdited } from '@entities/user/model/user-model';
import * as yup from 'yup';
import { InputNameMask } from '@/components/inputNameMask/InputNameMask';
import React from 'react';
import { InputDateMask } from '@/components/InputDateMask/InputDateMask';
import { twMerge } from 'tailwind-merge';
import { Checkbox } from '@shared/ui/shadcn/ui/checkbox';
import {
  $offerCheckBox,
  $policyCheckBox,
  offerCheckBoxClicked,
  policyCheckBoxClicked,
} from '@widgets/create-order-form/model/first-step/third-step';
import Link from 'next/link';
import { toast } from 'sonner';

export type ProfileFormFields = {
  name: string;
  surname: string;
  date: string;
  mail: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Введите имя'),
  surname: yup.string().required('Введите Фамилию'),
  date: yup.string().required('Введите дату рождения').min(10, 'Введите дату в формате дд.мм.гггг'),
  mail: yup.string().required('Введите почту').email('Введите корректную почту'),
});

export const FirstThirdStep = () => {
  const user = useUnit($user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name ?? '',
      surname: user?.surname ?? '',
      mail: user?.email ?? '',
      date: user?.birthday_date ?? '',
    },
  });

  const offerCheckBox = useUnit($offerCheckBox);
  const policyCheckBox = useUnit($policyCheckBox);

  const onSubmit = (data: ProfileFormFields) => {
    if (offerCheckBox && policyCheckBox) userInfoEdited(data);
    else
      toast.error('Заполните все поля.', {
        position: 'top-right',
      });
  };
  const loading = useUnit(postUserFx.pending);

  const handleOfferClick = () => {
    offerCheckBoxClicked();
  };

  const handlePolicyClick = () => {
    policyCheckBoxClicked();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[544px]">
        <h2 className="text-base font-semibold mb-3">ВХОД / РЕГИСТРАЦИЯ</h2>
        <p className="text-[14px] text-black-300 mb-3">
          Ускорьте покупку, сохраните детали заказа в личном кабинете.
          <br />
          Получите приветственные бонусы и до 10% баллами с каждой покупки.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-[14px] gap-y-[6px]">
          <div>
            <InputNameMask
              error={!!errors.name}
              register={register}
              name="name"
              placeholder="Имя"
              className="w-full text-[12px]"
            />
            {errors.name && <div className="text-red text-[12px]">{errors.name.message}</div>}
          </div>
          <div>
            <InputNameMask
              error={!!errors.surname}
              register={register}
              name="surname"
              placeholder="Фамилия"
              className="w-full text-[12px]"
            />
            {errors.surname && <div className="text-red text-[12px]">{errors.surname.message}</div>}
          </div>
          <div>
            <input
              placeholder="E-mail"
              className={twMerge(
                'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none'
              )}
              {...register('mail')}
            />
            {errors.mail && <div className="text-red text-[12px]">{errors.mail.message}</div>}
          </div>
          <div>
            <InputDateMask
              error={!!errors.date}
              register={register}
              name="date"
              placeholder="Дата рождения"
              className="w-full text-[12px]"
            />
            {errors.date && <div className="text-red text-[12px]">{errors.date.message}</div>}
          </div>
        </div>

        <div className="flex gap-2.5 items-center mb-[10px] mt-[14px]">
          <Checkbox checked={offerCheckBox} onClick={handleOfferClick} />
          <p className="text-[12px] font-medium cursor-pointer select-none" onClick={handleOfferClick}>
            Я прочитал и согласен с условиями публичной оферты
          </p>
        </div>
        <div className="flex gap-2.5 items-center mb-[18px]">
          <Checkbox checked={policyCheckBox} onClick={handlePolicyClick} />
          <p className="text-[12px] font-medium cursor-pointer select-none" onClick={handlePolicyClick}>
            Я прочитал и согласен с условиями{' '}
            <Link href={'/info'} className="underline">
              политики обработки персональных данных
            </Link>
          </p>
        </div>

        <Button.Primary type="submit" className="mb-7" disabled={loading} loading={loading}>
          начать оформление заказа
        </Button.Primary>
      </div>
    </form>
  );
};
