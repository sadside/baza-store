import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormValues } from '@pages/auth/ui/auth-page';
import { PhoneInput } from '@shared/ui/PhoneInput';
import * as yup from 'yup';
import { Button } from '@shared/theme/button';
import { formSubmitted, sendNumberPhoneFx } from '@widgets/create-order-form/model/first-step/first-step';
import { useUnit } from 'effector-react';

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Введите номер телефона'),
});

export const FirstFirstStep = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterFormValues) => formSubmitted(data);
  const loading = useUnit(sendNumberPhoneFx.pending);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[544px]">
        <h2 className="text-base font-semibold mb-3">ВХОД / РЕГИСТРАЦИЯ</h2>
        <p className="text-[14px] text-black-300 mb-3">
          Ускорьте покупку, сохраните детали заказа в личном кабинете.
          <br />
          Получите приветственные бонусы и до 10% баллами с каждой покупки.
        </p>
        <PhoneInput
          className="w-full mb-0.5"
          type="tel"
          error={Boolean(errors?.phoneNumber?.message)}
          register={register}
          name="phoneNumber"
          resetFiled={resetField}
        />
        {errors.phoneNumber && <div className="text-red text-[12px]">{errors.phoneNumber.message}</div>}
        <Button.Primary type="submit" className="mb-7 mt-[14px]" loading={loading} disabled={loading}>
          далее
        </Button.Primary>
      </div>
    </form>
  );
};
