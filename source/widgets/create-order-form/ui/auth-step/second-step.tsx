import { useForm } from 'react-hook-form';
import { RegisterFormValues } from '@pages/auth/ui/auth-page';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSubmitted } from '@widgets/create-order-form/model/first-step/first-step';
import { PhoneInput } from '@shared/ui/PhoneInput';
import { Button } from '@shared/theme/button';
import * as yup from 'yup';
import { Input } from '@shared/theme/input/ui/input';
import { twMerge } from 'tailwind-merge';
import { codeSubmitted } from '@widgets/create-order-form/model/first-step/second-step';
import { useUnit } from 'effector-react';
import { loginFx } from '@entities/user/model/user-model';

export interface ConfirmCodeValues {
  code: string;
}

const schema = yup.object().shape({
  code: yup.string().required('Это обязательное поле.').length(6, 'Длина кода 6 цифр'),
});

export const FirstSecondStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmCodeValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: ConfirmCodeValues) => {
    codeSubmitted(data);
  };

  const loading = useUnit(loginFx.pending);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[544px]">
        <h2 className="text-base font-semibold mb-3">ВХОД / РЕГИСТРАЦИЯ</h2>
        <p className="text-[14px] text-black-300 mb-3">
          Ускорьте покупку, сохраните детали заказа в личном кабинете.
          <br />
          Получите приветственные бонусы и до 10% баллами с каждой покупки.
        </p>
        <input
          placeholder="Код из смс"
          className={twMerge(
            'border border-black-50 h-11 w-full px-3 py-[14px] font-medium text-[12px] hover:border-black-200 active:border-black focus:border-black outline-none mb-0.5',
            Boolean(errors.code) && 'border-red'
          )}
          {...register('code')}
        />
        {errors.code && <div className="text-red text-[12px]">{errors.code.message}</div>}
        <Button.Primary type="submit" className="mb-7 mt-[14px]" loading={loading} disabled={loading}>
          далее
        </Button.Primary>
      </div>
    </form>
  );
};
