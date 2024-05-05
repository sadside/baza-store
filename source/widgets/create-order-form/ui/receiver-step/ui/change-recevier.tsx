import { InputNameMask } from '@/components/inputNameMask/InputNameMask';
import { twMerge } from 'tailwind-merge';
import { InputDateMask } from '@/components/InputDateMask/InputDateMask';
import React from 'react';
import * as yup from 'yup';
import { useUnit } from 'effector-react';
import { $user } from '@entities/user/model/user-model';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfileFormFields } from '@widgets/create-order-form/ui/auth-step/third-step';
import { ReceiverData, receiverFormSubmitted } from '@widgets/create-order-form/model/third-step/step';
import { PhoneInput } from '@shared/ui/PhoneInput';
import { Button } from '@shared/theme/button';
import { $order } from '@widgets/create-order-form/model/create-order-model';

const schema = yup.object().shape({
  name: yup.string().required('Это обязательное поле'),
  surname: yup.string().required('Это обязательное поле'),
  phone: yup.string().required('Это обязательное поле'),
  mail: yup.string().required('Это обязательное поле').email('Введите корректную почту'),
});

export const ChangeRecevier = () => {
  const user = useUnit($user);
  const order = useUnit($order);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReceiverData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name ?? '',
      surname: user?.surname ?? '',
      mail: user?.email ?? '',
      phone: user?.phone.slice(1) ?? '',
    },
  });

  const onSubmit = (data: ReceiverData) => {
    receiverFormSubmitted(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[544px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-[14px] gap-y-[6px] mb-6">
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
                'border border-black-50 h-11 w-full px-3 py-[14px]  text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none'
              )}
              {...register('mail')}
            />
            {errors.mail && <div className="text-red text-[12px]">{errors.mail.message}</div>}
          </div>
          <div>
            <PhoneInput
              className="w-full mb-0.5 text-[12px]"
              type="tel"
              error={Boolean(errors?.phone?.message)}
              register={register}
              name="phone"
            />
            {errors.phone && <div className="text-red text-[12px]">{errors.phone.message}</div>}
          </div>
        </div>
        <Button.Primary className="w-full" type="submit" disabled={order?.price === 0}>
          {order?.price === 0 ? 'Выбранных товаров нет в наличии' : 'далее'}
        </Button.Primary>
      </div>
    </form>
  );
};
